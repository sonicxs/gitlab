# frozen_string_literal: true

require 'spec_helper'

RSpec.describe 'Octokit initializer', feature_category: :importers do
  include StubRequests

  it 'uses the pinning Net::HTTP adapter' do
    expect(Octokit.middleware.adapter.klass).to eq(Gitlab::Octokit::NetHttpAdapter)
  end

  it 'validates the URL on every redirect hop' do
    handlers = Octokit.middleware.handlers.map(&:klass)

    expect(handlers.index(Gitlab::Octokit::UrlValidation))
      .to eq(handlers.index(Octokit::Middleware::FollowRedirects) + 1)
  end

  describe 'connecting through an Octokit client' do
    let(:host) { 'github.rebind.test' }
    let(:pinned_ip) { '93.184.216.34' }
    let(:client) { Octokit::Client.new(api_endpoint: "http://#{host}/api/v3/") }

    around do |example|
      with_net_connect_allowed { example.run }
    end

    before do
      stub_application_setting(dns_rebinding_protection_enabled: true)
      stub_env(Gitlab::HTTP_PROXY_ENV_VARS.index_with(nil))
      stub_dns("http://#{host}", ip_address: pinned_ip)
      allow(TCPSocket).to receive(:open).and_raise(Errno::ECONNREFUSED)
    end

    it 'opens the socket to the validated IP instead of resolving the hostname again' do
      expect { client.repository('foo/bar') }.to raise_error(Faraday::ConnectionFailed)

      expect(TCPSocket).to have_received(:open).with(pinned_ip, 80, nil, nil)
      expect(TCPSocket).not_to have_received(:open).with(host, any_args)
    end
  end
end
