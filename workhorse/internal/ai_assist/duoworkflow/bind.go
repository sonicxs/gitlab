package duoworkflow

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"regexp"
	"sync"
	"time"

	pb "gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/clients/gopb/contract"

	"gitlab.com/gitlab-org/gitlab/workhorse/internal/api"
	"gitlab.com/gitlab-org/gitlab/workhorse/internal/log"
)

const (
	workflowIDParam             = "workflow_id"
	closeReasonRailsUnavailable = "workflow authorization unavailable"
)

// The StartRequest workflow ID forms the Duo Workflow Service accepts.
var startWorkflowID = regexp.MustCompile(`^(?:#|gid://gitlab/Ai::DuoWorkflows::Workflow/)?([1-9][0-9]*)$`)

var (
	// errWorkflowBindingRefused: the StartRequest names a workflow Rails did not authorize.
	errWorkflowBindingRefused = errors.New("workflow binding refused")
	// errWorkflowBindingUnavailable: Rails could not be asked, so the client should retry.
	errWorkflowBindingUnavailable = errors.New("workflow binding unavailable")
	errClientGoneBeforeStart      = errors.New("client disconnected before starting a workflow")
	errFirstEventUnreadable       = errors.New("first client event could not be read")
)

// boundTransport replays the first client event, read before the runner existed.
type boundTransport struct {
	clientTransport
	first *pb.ClientEvent
}

func (b *boundTransport) ReadClientEvent() (*pb.ClientEvent, error) {
	if b.first != nil {
		event := b.first
		b.first = nil
		return event, nil
	}
	return b.clientTransport.ReadClientEvent()
}

// waitingConnection stands in for the runner while a connection waits for its
// StartRequest, so a server shutdown still tells the client to reconnect.
type waitingConnection struct {
	client clientTransport
	req    *http.Request
}

func (c *waitingConnection) Shutdown(ctx context.Context) error {
	select {
	case <-c.req.Context().Done():
		return nil
	case <-ctx.Done():
	}
	if err := c.client.SendGoingAway(closeReasonWorkhorseShutdown); err != nil {
		log.WithRequest(c.req).WithError(err).Info("Shutdown: failed to tell a waiting client to reconnect")
	}
	return nil
}

// bindToStartRequest makes the first StartRequest run on a config Rails issued
// for that same workflow, authorizing an unbound connection again for it.
func (h *Handler) bindToStartRequest(r *http.Request, client clientTransport, cfg *api.DuoWorkflow) (clientTransport, *api.DuoWorkflow, error) {
	if cfg == nil || cfg.Service == nil {
		return nil, nil, fmt.Errorf("failed to initialize client: Service configuration is nil")
	}

	first, err := readFirstEvent(client)
	if err != nil {
		return nil, nil, err
	}
	bound := &boundTransport{clientTransport: client, first: first}

	start := first.GetStartRequest()
	if start == nil {
		return nil, nil, fmt.Errorf("%w: first event is not a start request", errWorkflowBindingRefused)
	}
	if cfg.WorkflowID == "" && start.GetWorkflowID() == "" {
		return bound, cfg, nil
	}

	match := startWorkflowID.FindStringSubmatch(start.GetWorkflowID())
	if match == nil {
		return nil, nil, fmt.Errorf("%w: unrecognized workflow ID", errWorkflowBindingRefused)
	}
	workflowID := match[1]

	if cfg.WorkflowID == "" {
		if cfg, err = h.workflowConfig(r, workflowID); err != nil {
			return nil, nil, err
		}
	}
	if cfg.WorkflowID != workflowID {
		return nil, nil, fmt.Errorf("%w: start request names another workflow", errWorkflowBindingRefused)
	}

	start.WorkflowID = workflowID
	return bound, cfg, nil
}

// readFirstEvent waits for the first client event under the liveness the runner
// applies: the pong read deadline, and a ping every keepalive interval.
func readFirstEvent(client clientTransport) (*pb.ClientEvent, error) {
	if err := client.Start(); err != nil {
		return nil, fmt.Errorf("readFirstEvent: start transport: %w", err)
	}

	done := make(chan struct{})
	var wg sync.WaitGroup
	wg.Add(1)
	go func() {
		defer wg.Done()
		ticker := time.NewTicker(client.KeepaliveInterval())
		defer ticker.Stop()
		for {
			select {
			case <-done:
				return
			case <-ticker.C:
				// A failed ping leaves the read to fail on its deadline.
				if client.Keepalive() != nil {
					return
				}
			}
		}
	}()

	event, err := client.ReadClientEvent()
	close(done)
	wg.Wait()

	if err != nil {
		if _, ok := client.ReadError(err); ok {
			return nil, errClientGoneBeforeStart
		}
		return nil, fmt.Errorf("%w: %v", errFirstEventUnreadable, err)
	}

	return event, nil
}

// workflowConfig asks Rails for the connection config of workflowID, exactly as
// if the client had sent it as the workflow_id parameter.
func (h *Handler) workflowConfig(r *http.Request, workflowID string) (*api.DuoWorkflow, error) {
	bindReq := r.Clone(r.Context())
	query := bindReq.URL.Query()
	query.Set(workflowIDParam, workflowID)
	bindReq.URL.RawQuery = query.Encode()

	httpResponse, authResponse, err := h.rails.PreAuthorize("", bindReq)
	if httpResponse != nil {
		defer func() { _ = httpResponse.Body.Close() }()
	}
	if err != nil {
		return nil, fmt.Errorf("%w: %v", errWorkflowBindingUnavailable, err)
	}

	if authResponse == nil {
		switch httpResponse.StatusCode {
		case http.StatusBadRequest, http.StatusUnauthorized, http.StatusForbidden, http.StatusNotFound:
			return nil, fmt.Errorf("%w: status %d", errWorkflowBindingRefused, httpResponse.StatusCode)
		default:
			return nil, fmt.Errorf("%w: status %d", errWorkflowBindingUnavailable, httpResponse.StatusCode)
		}
	}

	if authResponse.DuoWorkflow == nil {
		return nil, fmt.Errorf("%w: response has no workflow config", errWorkflowBindingUnavailable)
	}
	// A Rails that predates the binding never names the workflow; let the client retry.
	if authResponse.DuoWorkflow.WorkflowID == "" {
		return nil, fmt.Errorf("%w: response names no workflow", errWorkflowBindingUnavailable)
	}

	return authResponse.DuoWorkflow, nil
}
