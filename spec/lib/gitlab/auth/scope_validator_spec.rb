# frozen_string_literal: true

require 'spec_helper'

RSpec.describe Gitlab::Auth::ScopeValidator, feature_category: :system_access do
  let(:user) { build(:user) }
  let(:env) { {} }
  let(:authenticator) do
    instance_double(Gitlab::Auth::RequestAuthenticator, request: instance_double(ActionDispatch::Request, env: env))
  end

  let(:validator) { described_class.new(user, authenticator) }

  describe '#ai_workflow_request?' do
    context 'when current_token_scopes includes ai_workflows' do
      it 'returns true' do
        allow(authenticator).to receive(:current_token_scopes).and_return(%w[api ai_workflows])

        expect(validator.ai_workflow_request?).to be(true)
      end
    end

    context 'when current_token_scopes includes ai_workflows as a symbol' do
      it 'returns true' do
        allow(authenticator).to receive(:current_token_scopes).and_return(%i[api ai_workflows])

        expect(validator.ai_workflow_request?).to be(true)
      end
    end

    context 'when current_token_scopes does not include ai_workflows' do
      it 'returns false' do
        allow(authenticator).to receive(:current_token_scopes).and_return(%w[api read_user])

        expect(validator.ai_workflow_request?).to be(false)
      end
    end

    context 'when current_token_scopes is empty (e.g. session request)' do
      it 'returns false' do
        allow(authenticator).to receive(:current_token_scopes).and_return([])

        expect(validator.ai_workflow_request?).to be(false)
      end
    end
  end

  describe '#permit_quick_actions?' do
    where(:scopes, :api_access, :permitted) do
      [
        [%w[api ai_workflows], true, false],
        [%w[mcp], false, false],
        [[:mcp], false, false],
        [%w[api mcp], true, true],
        [%w[api read_user], true, true],
        [[], false, true]
      ]
    end

    with_them do
      it 'returns whether quick actions are permitted' do
        allow(authenticator).to receive_messages(current_token_scopes: scopes, valid_access_token?: api_access)

        expect(validator.permit_quick_actions?).to be(permitted)
      end
    end

    context 'when the request is an MCP tool call' do
      let(:env) { { described_class::MCP_TOOL_CALL_ENV_KEY => true } }

      it 'does not permit quick actions for any token' do
        allow(authenticator).to receive(:current_token_scopes).and_return(%w[granular])

        expect(validator.permit_quick_actions?).to be(false)
      end
    end
  end
end
