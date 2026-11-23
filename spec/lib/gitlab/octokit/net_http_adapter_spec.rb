# frozen_string_literal: true

require 'spec_helper'

RSpec.describe Gitlab::Octokit::NetHttpAdapter, feature_category: :importers do
  using RSpec::Parameterized::TableSyntax

  let(:adapter) { described_class.new(->(env) { env }) }
  let(:request_options) { {} }
  let(:candidates) { nil }
  let(:env) do
    Faraday::Env.from(
      method: :get,
      url: URI('https://github.example.com/api/v3'),
      request: Faraday::RequestOptions.from(request_options),
      ssl: Faraday::SSLOptions.new,
      request_headers: {}
    ).tap { |env| env[:gitlab_candidate_addresses] = candidates }
  end

  describe '#build_connection' do
    subject(:connection) { adapter.build_connection(env) }

    context 'with pinned IPs' do
      let(:candidates) { ['93.184.216.34'] }

      it 'copies them and keeps the hostname as address' do
        expect(connection.gitlab_candidate_addresses).to eq(['93.184.216.34'])
        expect(connection.address).to eq('github.example.com')
        expect(connection.hostname_override).to be_nil
      end

      where(:timeout_option, :expected_open_timeout) do
        nil           | 10
        :open_timeout | 30
        :timeout      | 30
      end

      with_them do
        let(:request_options) { timeout_option ? { timeout_option => 30 } : {} }

        it 'uses a 10s open timeout unless the request sets its own' do
          expect(connection.open_timeout).to eq(expected_open_timeout)
        end
      end
    end

    context 'without pinned IPs' do
      it 'leaves the candidates and the Net::HTTP default open timeout alone' do
        expect(connection.gitlab_candidate_addresses).to be_nil
        expect(connection.open_timeout).to eq(Net::HTTP.new('github.example.com').open_timeout)
      end
    end
  end
end
