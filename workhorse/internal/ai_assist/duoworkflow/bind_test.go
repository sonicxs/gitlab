package duoworkflow

import (
	"context"
	"errors"
	"fmt"
	"net/http"
	"net/http/httptest"
	"net/url"
	"strings"
	"sync"
	"sync/atomic"
	"testing"
	"time"

	"github.com/gorilla/websocket"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc/metadata"

	pb "gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/clients/gopb/contract"

	"gitlab.com/gitlab-org/gitlab/workhorse/internal/api"
	"gitlab.com/gitlab-org/gitlab/workhorse/internal/testhelper"
)

// Workflow IDs bindingRails answers specially.
const (
	otherWorkflowID    = "77"  // Rails authorizes workflow 78 instead
	unnamedWorkflowID  = "297" // a config that names no workflow, as a Rails without the binding sends
	noConfigWorkflowID = "298" // 200 without a DuoWorkflow config
	droppedWorkflowID  = "299" // connection dropped without a response
	heldWorkflowID     = "300" // answered once release is closed
)

// bindingRails answers the /ws pre-authorization like Rails does: a config
// naming the workflow when workflow_id is given, an unbound one otherwise, and
// an error status for a workflow the caller cannot use.
type bindingRails struct {
	mu          sync.Mutex
	workflowIDs [][]string
	release     chan struct{}
}

func (b *bindingRails) requests() [][]string {
	b.mu.Lock()
	defer b.mu.Unlock()
	return append([][]string(nil), b.workflowIDs...)
}

func setupBindingRails(t *testing.T, dwsAddr string) (*bindingRails, *api.API) {
	t.Helper()

	rails := &bindingRails{release: make(chan struct{})}
	server := httptest.NewServer(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		values := r.URL.Query()[workflowIDParam]
		rails.mu.Lock()
		rails.workflowIDs = append(rails.workflowIDs, values)
		rails.mu.Unlock()

		// Like Rails `params[:workflow_id].present?`: the last value wins and blank means none.
		token, workflowID := "unbound", ""
		if len(values) > 0 && strings.TrimSpace(values[len(values)-1]) != "" {
			workflowID = values[len(values)-1]
			switch workflowID {
			case "400", "401", "403", "404", "500":
				var status int
				_, _ = fmt.Sscan(workflowID, &status)
				w.WriteHeader(status)
				return
			case noConfigWorkflowID:
				w.Header().Set("Content-Type", api.ResponseContentType)
				_, err := w.Write([]byte(`{}`))
				assert.NoError(t, err)
				return
			case droppedWorkflowID:
				conn, _, err := w.(http.Hijacker).Hijack()
				assert.NoError(t, err)
				_ = conn.Close()
				return
			case otherWorkflowID:
				workflowID = "78"
			case unnamedWorkflowID:
				workflowID = ""
			case heldWorkflowID:
				<-rails.release
			}
			token = "bound-" + workflowID
		}

		w.Header().Set("Content-Type", api.ResponseContentType)
		w.WriteHeader(http.StatusOK)
		_, err := fmt.Fprintf(w, `{"DuoWorkflow": {"Service": {"URI": %q, "Headers": {"Authorization": "Bearer %s"}, "Secure": false}, "WorkflowID": %q}}`, dwsAddr, token, workflowID)
		assert.NoError(t, err)
	}))
	t.Cleanup(server.Close)

	apiURL, err := url.Parse(server.URL)
	require.NoError(t, err)

	return rails, api.NewAPI(apiURL, "test-version", http.DefaultTransport)
}

// recordingDWS records the Authorization each ExecuteWorkflow stream arrives
// with, and the workflow each one is started for.
type recordingDWS struct {
	mu     sync.Mutex
	authz  []string
	starts []string
	*testServer
}

func (d *recordingDWS) seen() []string {
	d.mu.Lock()
	defer d.mu.Unlock()
	return append([]string(nil), d.authz...)
}

func (d *recordingDWS) started() []string {
	d.mu.Lock()
	defer d.mu.Unlock()
	return append([]string(nil), d.starts...)
}

func setupRecordingDWS(t *testing.T) *recordingDWS {
	t.Helper()

	dws := &recordingDWS{testServer: setupTestServer(t)}
	dws.execWorkflowHandler = func(stream pb.DuoWorkflow_ExecuteWorkflowServer) error {
		md, _ := metadata.FromIncomingContext(stream.Context())
		dws.mu.Lock()
		dws.authz = append(dws.authz, strings.Join(md.Get("authorization"), ","))
		dws.mu.Unlock()

		event, err := stream.Recv()
		if err != nil {
			return err
		}
		dws.mu.Lock()
		dws.starts = append(dws.starts, event.GetStartRequest().GetWorkflowID())
		dws.mu.Unlock()
		return stream.Send(&pb.Action{Action: &pb.Action_RunCommand{RunCommand: &pb.RunCommandAction{Program: "ls"}}})
	}
	return dws
}

func newBindHandler(t *testing.T, apiClient *api.API) *Handler {
	return NewHandler(apiClient, initRdb(t), http.HandlerFunc(func(_ http.ResponseWriter, _ *http.Request) {}), "")
}

func dialDuo(t *testing.T, apiClient *api.API, query string) *websocket.Conn {
	t.Helper()
	return dialHandler(t, newBindHandler(t, apiClient), query)
}

func dialHandler(t *testing.T, handler *Handler, query string) *websocket.Conn {
	t.Helper()

	server := httptest.NewServer(handler.Build())
	t.Cleanup(server.Close)

	conn, resp, err := websocket.DefaultDialer.Dial("ws"+strings.TrimPrefix(server.URL, "http")+"/duo"+query, nil)
	if resp != nil {
		_ = resp.Body.Close()
	}
	require.NoError(t, err)
	t.Cleanup(func() { _ = conn.Close() })
	return conn
}

func sendAndReadAction(t *testing.T, conn *websocket.Conn, message string) {
	t.Helper()

	require.NoError(t, conn.WriteMessage(websocket.BinaryMessage, []byte(message)))
	_, response, err := conn.ReadMessage()
	require.NoError(t, err)
	require.Contains(t, string(response), `"runCommand"`)
}

func sendAndReadClose(t *testing.T, conn *websocket.Conn, message string) int {
	t.Helper()

	require.NoError(t, conn.WriteMessage(websocket.BinaryMessage, []byte(message)))
	_, _, err := conn.ReadMessage()
	var closeErr *websocket.CloseError
	require.ErrorAs(t, err, &closeErr)
	return closeErr.Code
}

func startRequest(workflowID string) string {
	return `{"startRequest": {"workflowID": "` + workflowID + `", "goal": "g"}}`
}

func TestBind_StartRequestRunsAsTheAuthorizedWorkflow(t *testing.T) {
	testhelper.ConfigureSecret()

	for query, expected := range map[string][][]string{
		"?project_id=1":               {nil, {"42"}},
		"?workflow_id=":               {{""}, {"42"}},
		"?workflow_id=7&workflow_id=": {{"7", ""}, {"42"}},
		"?workflow_id=42":             {{"42"}},
	} {
		for _, workflowID := range []string{"42", "#42", "gid://gitlab/Ai::DuoWorkflows::Workflow/42"} {
			t.Run(query+" "+workflowID, func(t *testing.T) {
				dws := setupRecordingDWS(t)
				rails, apiClient := setupBindingRails(t, dws.Addr)

				conn := dialDuo(t, apiClient, query)
				sendAndReadAction(t, conn, startRequest(workflowID))

				require.Equal(t, expected, rails.requests())
				require.Equal(t, []string{"Bearer bound-42"}, dws.seen())
				require.Equal(t, []string{"42"}, dws.started())
			})
		}
	}
}

func TestBind_StartRequestForAnotherWorkflowIsRefused(t *testing.T) {
	testhelper.ConfigureSecret()

	for name, message := range map[string]string{
		"other workflow":      startRequest("43"),
		"other global id":     startRequest("gid://gitlab/Ai::DuoWorkflows::Workflow/43"),
		"no workflow":         startRequest(""),
		"padded workflow":     startRequest(" 42"),
		"leading zero":        startRequest("042"),
		"unknown id shape":    startRequest("gid://gitlab/Project/42"),
		"not a start request": `{"heartbeat": {}}`,
	} {
		t.Run(name, func(t *testing.T) {
			dws := setupRecordingDWS(t)
			rails, apiClient := setupBindingRails(t, dws.Addr)

			conn := dialDuo(t, apiClient, "?workflow_id=42")
			require.Equal(t, closeInvalidRequest, sendAndReadClose(t, conn, message))

			require.Equal(t, [][]string{{"42"}}, rails.requests())
			require.Empty(t, dws.seen())
		})
	}
}

func TestBind_RebindAnsweredForAnotherWorkflowIsRefused(t *testing.T) {
	testhelper.ConfigureSecret()
	dws := setupRecordingDWS(t)
	rails, apiClient := setupBindingRails(t, dws.Addr)

	conn := dialDuo(t, apiClient, "")
	require.Equal(t, closeInvalidRequest, sendAndReadClose(t, conn, startRequest(otherWorkflowID)))

	require.Equal(t, [][]string{nil, {otherWorkflowID}}, rails.requests())
	require.Empty(t, dws.seen())
}

func TestBind_UnrecognizedWorkflowIDIsRefusedWithoutRebinding(t *testing.T) {
	testhelper.ConfigureSecret()
	dws := setupRecordingDWS(t)
	rails, apiClient := setupBindingRails(t, dws.Addr)

	conn := dialDuo(t, apiClient, "")
	require.Equal(t, closeInvalidRequest, sendAndReadClose(t, conn, startRequest("42abc")))

	require.Equal(t, [][]string{nil}, rails.requests())
	require.Empty(t, dws.seen())
}

func TestBind_RailsAnswerOnRebindDecidesTheClose(t *testing.T) {
	testhelper.ConfigureSecret()

	for _, tc := range []struct {
		workflowID string
		closeCode  int
	}{
		{"400", closeInvalidRequest},
		{"401", closeInvalidRequest},
		{"403", closeInvalidRequest},
		{"404", closeInvalidRequest},
		{"500", websocket.CloseGoingAway},
		{unnamedWorkflowID, websocket.CloseGoingAway},
		{noConfigWorkflowID, websocket.CloseGoingAway},
		{droppedWorkflowID, websocket.CloseGoingAway},
	} {
		t.Run(tc.workflowID, func(t *testing.T) {
			dws := setupRecordingDWS(t)
			rails, apiClient := setupBindingRails(t, dws.Addr)

			conn := dialDuo(t, apiClient, "")
			require.Equal(t, tc.closeCode, sendAndReadClose(t, conn, startRequest(tc.workflowID)))

			// The HTTP client may retry a GET whose connection dropped.
			requests := rails.requests()
			require.Nil(t, requests[0])
			for _, rebind := range requests[1:] {
				require.Equal(t, []string{tc.workflowID}, rebind)
			}
			require.Empty(t, dws.seen())
		})
	}
}

func TestBind_FirstEventWithoutWorkflowIDKeepsTheConfig(t *testing.T) {
	testhelper.ConfigureSecret()
	dws := setupRecordingDWS(t)
	rails, apiClient := setupBindingRails(t, dws.Addr)

	conn := dialDuo(t, apiClient, "")
	sendAndReadAction(t, conn, `{"startRequest": {"goal": "g"}}`)

	require.Equal(t, [][]string{nil}, rails.requests())
	require.Equal(t, []string{"Bearer unbound"}, dws.seen())
}

func TestBind_FirstEventThatIsNotAStartRequestIsRefused(t *testing.T) {
	testhelper.ConfigureSecret()

	for _, query := range []string{"", "?workflow_id=42"} {
		t.Run(query, func(t *testing.T) {
			dws := setupRecordingDWS(t)
			rails, apiClient := setupBindingRails(t, dws.Addr)

			conn := dialDuo(t, apiClient, query)
			require.Equal(t, closeInvalidRequest, sendAndReadClose(t, conn, `{"heartbeat": {}}`))

			require.Len(t, rails.requests(), 1)
			require.Empty(t, dws.seen())
		})
	}
}

func TestBind_UnreadableFirstEventClosesNormally(t *testing.T) {
	testhelper.ConfigureSecret()

	dws := setupRecordingDWS(t)
	_, apiClient := setupBindingRails(t, dws.Addr)

	conn := dialDuo(t, apiClient, "")
	require.Equal(t, websocket.CloseNormalClosure, sendAndReadClose(t, conn, "not an event"))
	require.Empty(t, dws.seen())
}

func TestBind_ClientLeavingBeforeStartOpensNoStream(t *testing.T) {
	testhelper.ConfigureSecret()
	dws := setupRecordingDWS(t)
	rails, apiClient := setupBindingRails(t, dws.Addr)

	conn := dialDuo(t, apiClient, "")
	require.NoError(t, conn.WriteMessage(websocket.CloseMessage, websocket.FormatCloseMessage(websocket.CloseNormalClosure, "")))
	_ = conn.Close()

	assert.Never(t, func() bool { return len(dws.seen()) > 0 }, 300*time.Millisecond, 20*time.Millisecond)
	require.Equal(t, [][]string{nil}, rails.requests())
}

func TestBind_ShutdownTellsAWaitingClientToReconnect(t *testing.T) {
	testhelper.ConfigureSecret()
	dws := setupRecordingDWS(t)
	_, apiClient := setupBindingRails(t, dws.Addr)

	handler := newBindHandler(t, apiClient)
	conn := dialHandler(t, handler, "")

	shutdownWaiting(t, handler)
	requireClose(t, conn, websocket.CloseGoingAway)
	require.Empty(t, dws.seen())
}

func TestBind_ShutdownDuringRebindOpensNoStream(t *testing.T) {
	testhelper.ConfigureSecret()
	dws := setupRecordingDWS(t)
	rails, apiClient := setupBindingRails(t, dws.Addr)

	handler := newBindHandler(t, apiClient)
	conn := dialHandler(t, handler, "")
	require.NoError(t, conn.WriteMessage(websocket.BinaryMessage, []byte(startRequest(heldWorkflowID))))
	require.Eventually(t, func() bool { return len(rails.requests()) == 2 }, 5*time.Second, 10*time.Millisecond)

	shutdownWaiting(t, handler)
	requireClose(t, conn, websocket.CloseGoingAway)

	close(rails.release)
	assert.Never(t, func() bool { return len(dws.seen()) > 0 }, 300*time.Millisecond, 20*time.Millisecond)
}

func shutdownWaiting(t *testing.T, handler *Handler) {
	t.Helper()

	require.Eventually(t, func() bool {
		count := 0
		handler.runners.Range(func(_, _ any) bool { count++; return true })
		return count == 1
	}, 5*time.Second, 10*time.Millisecond)

	ctx, cancel := context.WithTimeout(context.Background(), 100*time.Millisecond)
	defer cancel()
	require.NoError(t, handler.Shutdown(ctx))
}

func requireClose(t *testing.T, conn *websocket.Conn, code int) {
	t.Helper()

	_, _, err := conn.ReadMessage()
	var closeErr *websocket.CloseError
	require.ErrorAs(t, err, &closeErr)
	require.Equal(t, code, closeErr.Code)
}

// waitingTransport blocks reads until an event is sent or events is closed.
type waitingTransport struct {
	clientTransport
	starts     atomic.Int32
	keepalives atomic.Int32
	events     chan *pb.ClientEvent
	readErr    error
	orderly    bool
}

func (w *waitingTransport) Start() error                     { w.starts.Add(1); return nil }
func (w *waitingTransport) KeepaliveInterval() time.Duration { return time.Millisecond }
func (w *waitingTransport) Keepalive() error                 { w.keepalives.Add(1); return nil }
func (w *waitingTransport) ReadError(error) (string, bool)   { return "client closed", w.orderly }

func (w *waitingTransport) ReadClientEvent() (*pb.ClientEvent, error) {
	if event, ok := <-w.events; ok {
		return event, nil
	}
	return nil, w.readErr
}

func TestReadFirstEvent_PingsWhileWaiting(t *testing.T) {
	client := &waitingTransport{events: make(chan *pb.ClientEvent)}
	result := make(chan *pb.ClientEvent, 1)
	go func() {
		event, err := readFirstEvent(client)
		assert.NoError(t, err)
		result <- event
	}()

	require.Eventually(t, func() bool { return client.keepalives.Load() >= 2 }, 5*time.Second, time.Millisecond)

	sent := &pb.ClientEvent{Response: &pb.ClientEvent_StartRequest{StartRequest: &pb.StartWorkflowRequest{WorkflowID: "42"}}}
	client.events <- sent
	require.Same(t, sent, <-result)
	require.Equal(t, int32(1), client.starts.Load())
}

func TestReadFirstEvent_ReadErrors(t *testing.T) {
	for name, tc := range map[string]struct {
		orderly  bool
		expected error
	}{
		"client left":     {orderly: true, expected: errClientGoneBeforeStart},
		"unreadable read": {orderly: false, expected: errFirstEventUnreadable},
	} {
		t.Run(name, func(t *testing.T) {
			client := &waitingTransport{events: make(chan *pb.ClientEvent), readErr: errors.New("read failed"), orderly: tc.orderly}
			close(client.events)

			_, err := readFirstEvent(client)
			require.ErrorIs(t, err, tc.expected)
		})
	}
}
