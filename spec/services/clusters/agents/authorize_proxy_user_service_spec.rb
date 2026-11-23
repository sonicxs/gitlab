# frozen_string_literal: true

require 'spec_helper'

RSpec.describe Clusters::Agents::AuthorizeProxyUserService, feature_category: :deployment_management do
  subject(:service_response) { service.execute }

  let(:service) { described_class.new(user, agent) }
  let(:user) { create(:user) }

  let_it_be(:organization) { create(:group) }
  let_it_be(:configuration_project) { create(:project, group: organization) }
  let_it_be(:agent) { create(:cluster_agent, name: 'the-agent', project: configuration_project) }
  let_it_be(:deployment_project) { create(:project, group: organization) }
  let_it_be(:deployment_group) { create(:group, parent: organization) }

  let(:user_access_config) do
    {
      'user_access' => {
        'access_as' => { 'agent' => {} },
        'projects' => [{ 'id' => deployment_project.full_path }],
        'groups' => [{ 'id' => deployment_group.full_path }]
      }
    }
  end

  before do
    Clusters::Agents::Authorizations::UserAccess::RefreshService.new(agent, config: user_access_config).execute
  end

  it 'returns forbidden when user has no access to any project', :aggregate_failures do
    expect(service_response).to be_error
    expect(service_response.reason).to eq :forbidden
    expect(service_response.message)
      .to eq 'You must be a member of `projects` or `groups` under the `user_access` keyword.'
  end

  context 'when user is member of an authorized group' do
    it 'authorizes developers', :aggregate_failures do
      deployment_group.add_member(user, :developer)
      expect(service_response).to be_success
      expect(service_response.payload[:user]).to include(id: user.id, username: user.username)
      expect(service_response.payload[:agent]).to include(id: agent.id, config_project: { id: agent.project.id })
    end

    it 'does not authorize reporters', :aggregate_failures do
      deployment_group.add_member(user, :reporter)
      expect(service_response).to be_error
      expect(service_response.reason).to eq :forbidden
      expect(service_response.message)
        .to eq 'You must be a member of `projects` or `groups` under the `user_access` keyword.'
    end
  end

  context 'when user is member of an authorized project' do
    it 'authorizes developers', :aggregate_failures do
      deployment_project.add_member(user, :developer)
      expect(service_response).to be_success
      expect(service_response.payload[:user]).to include(id: user.id, username: user.username)
      expect(service_response.payload[:agent]).to include(id: agent.id, config_project: { id: agent.project.id })
    end

    it 'does not authorize reporters', :aggregate_failures do
      deployment_project.add_member(user, :reporter)
      expect(service_response).to be_error
      expect(service_response.reason).to eq :forbidden
      expect(service_response.message)
        .to eq 'You must be a member of `projects` or `groups` under the `user_access` keyword.'
    end
  end

  context 'when config is empty' do
    let(:user_access_config) { {} }

    it 'returns an error', :aggregate_failures do
      expect(service_response).to be_error
      expect(service_response.reason).to eq :forbidden
      expect(service_response.message).to eq '`user_access` keyword is not found in agent config file.'
    end
  end

  context 'with a personal access token' do
    let(:service) { described_class.new(user, agent, personal_access_token: token) }
    let(:token_boundary) { configuration_project }
    let(:token) do
      create(:granular_pat, user: user, boundary: ::Authz::Boundary.for(token_boundary),
        permissions: [:use_kubernetes_api_proxy])
    end

    before do
      deployment_project.add_member(user, :developer)
    end

    context 'with a granular token scoped to the agent project' do
      it { is_expected.to be_success }

      context 'when the user is not authorized under `user_access`' do
        let(:user_access_config) do
          {
            'user_access' => {
              'access_as' => { 'agent' => {} },
              'groups' => [{ 'id' => deployment_group.full_path }]
            }
          }
        end

        it 'returns forbidden', :aggregate_failures do
          expect(service_response).to be_error
          expect(service_response.reason).to eq :forbidden
          expect(service_response.message)
            .to eq 'You must be a member of `projects` or `groups` under the `user_access` keyword.'
        end
      end

      context 'when the granular_personal_access_tokens feature flag is disabled' do
        before do
          stub_feature_flags(granular_personal_access_tokens: false)
        end

        it 'returns forbidden', :aggregate_failures do
          expect(service_response).to be_error
          expect(service_response.reason).to eq :forbidden
        end
      end
    end

    context 'with a granular token scoped to the agent project group' do
      let(:token_boundary) { organization }

      it { is_expected.to be_success }
    end

    context 'with a granular token scoped to a different project' do
      let(:token_boundary) { deployment_project }

      it 'returns not found when the user cannot read the agent project', :aggregate_failures do
        expect(service_response).to be_error
        expect(service_response.reason).to eq :not_found
      end

      context 'when the user can read the agent project' do
        before do
          configuration_project.add_member(user, :guest)
        end

        it 'returns forbidden', :aggregate_failures do
          expect(service_response).to be_error
          expect(service_response.reason).to eq :forbidden
          expect(service_response.message).to include('Kubernetes API Proxy: Use')
        end
      end
    end

    context 'with a granular token holding an unrelated permission' do
      let(:token) do
        create(:granular_pat, user: user, boundary: ::Authz::Boundary.for(configuration_project),
          permissions: [:read_cluster_agent])
      end

      before do
        configuration_project.add_member(user, :guest)
      end

      it 'returns forbidden', :aggregate_failures do
        expect(service_response).to be_error
        expect(service_response.reason).to eq :forbidden
        expect(service_response.message).to include('Kubernetes API Proxy: Use')
      end
    end

    context 'with a legacy token' do
      let(:token) { create(:personal_access_token, user: user, scopes: [Gitlab::Auth::K8S_PROXY_SCOPE]) }

      it { is_expected.to be_success }

      context 'when the agent namespace enforces granular tokens' do
        before do
          configuration_project.add_member(user, :guest)
          ::NamespaceSetting.find_by!(namespace_id: organization.id).update!(
            enforce_granular_tokens: true,
            granular_tokens_enforced_after: Date.current
          )
        end

        it 'returns forbidden', :aggregate_failures do
          expect(service_response).to be_error
          expect(service_response.reason).to eq :forbidden
        end
      end
    end
  end
end
