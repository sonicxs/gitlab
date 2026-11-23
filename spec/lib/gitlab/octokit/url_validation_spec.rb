# frozen_string_literal: true

require 'spec_helper'

RSpec.describe Gitlab::Octokit::UrlValidation, feature_category: :importers do
  let(:app) { instance_double(Octokit::Response::RaiseError) }
  let(:middleware) { described_class.new(app) }

  subject(:call_middleware) { middleware.call(env) }

  shared_examples 'Allowed URL' do
    it 'does not raise an error' do
      expect(app).to receive(:call).with(env)

      expect { call_middleware }.not_to raise_error
    end
  end

  shared_examples 'Blocked URL' do
    it 'raises an error' do
      expect { call_middleware }.to raise_error(Gitlab::HTTP_V2::UrlBlocker::BlockedUrlError)
    end
  end

  describe '#call' do
    context 'when the URL is a public URL' do
      let(:env) { { url: 'https://public-url.com' } }

      it_behaves_like 'Allowed URL'

      context 'when DNS rebinding protection is active' do
        before do
          stub_application_setting(dns_rebinding_protection_enabled: true)
        end

        it 'calls validate_url_with_proxy! with dns_rebind_protection: true' do
          expect(Gitlab::HTTP_V2::UrlBlocker).to receive(:validate_url_with_proxy!).with(
            'https://public-url.com',
            hash_including(dns_rebind_protection: true)
          ).and_call_original

          expect(app).to receive(:call).with(env)

          call_middleware
        end
      end

      context 'when behind an HTTP proxy' do
        before do
          allow(Gitlab).to receive(:http_proxy_env?).and_return(true)
        end

        it 'disables dns_rebind_protection' do
          expect(Gitlab::HTTP_V2::UrlBlocker).to receive(:validate_url_with_proxy!).with(
            'https://public-url.com',
            hash_including(dns_rebind_protection: false)
          ).and_call_original

          expect(app).to receive(:call).with(env)

          call_middleware
        end
      end

      context 'with failed address check' do
        before do
          allow(Addrinfo).to receive(:getaddrinfo)
            .with('public-url.com', anything, anything, :STREAM, any_args)
            .and_raise(SocketError)
        end

        it_behaves_like 'Blocked URL'

        context 'with disabled dns rebinding check' do
          before do
            stub_application_setting(dns_rebinding_protection_enabled: false)
          end

          it_behaves_like 'Allowed URL'
        end
      end
    end

    context 'when the URL is a localhost address' do
      let(:env) { { url: 'http://127.0.0.1' } }

      context 'when localhost requests are not allowed' do
        before do
          stub_application_setting(allow_local_requests_from_web_hooks_and_services: false)
        end

        it_behaves_like 'Blocked URL'
      end

      context 'when localhost requests are allowed' do
        before do
          stub_application_setting(allow_local_requests_from_web_hooks_and_services: true)
        end

        it_behaves_like 'Allowed URL'
      end
    end

    context 'when the URL is a local network address' do
      let(:env) { { url: 'http://172.16.0.0' } }

      context 'when local network requests are not allowed' do
        before do
          stub_application_setting(allow_local_requests_from_web_hooks_and_services: false)
        end

        it_behaves_like 'Blocked URL'
      end

      context 'when local network requests are allowed' do
        before do
          stub_application_setting(allow_local_requests_from_web_hooks_and_services: true)
        end

        it_behaves_like 'Allowed URL'
      end
    end

    describe 'candidate addresses' do
      let(:env) { { url: URI('https://public-url.com') } }
      let(:resolved_ips) { ['93.184.216.34'] }

      before do
        stub_application_setting(dns_rebinding_protection_enabled: true)
        allow(Addrinfo).to receive(:getaddrinfo)
          .with('public-url.com', anything, anything, :STREAM, any_args)
          .and_return(resolved_ips.map { |ip| Addrinfo.tcp(ip, 443) })
        allow(app).to receive(:call)
      end

      shared_examples 'no candidate addresses' do
        it 'clears a stale value from a previous redirect hop' do
          env[:gitlab_candidate_addresses] = ['198.51.100.1']

          expect { call_middleware }.to change { env[:gitlab_candidate_addresses] }.to(nil)
        end
      end

      it 'pins the validated IP and keeps the original URL' do
        call_middleware

        expect(env[:gitlab_candidate_addresses]).to eq(['93.184.216.34'])
        expect(env[:url]).to eq(URI('https://public-url.com'))
      end

      it 'overwrites a stale value from a previous redirect hop' do
        env[:gitlab_candidate_addresses] = ['198.51.100.1']

        expect { call_middleware }.to change { env[:gitlab_candidate_addresses] }.to(['93.184.216.34'])
      end

      context 'when the host resolves to several IPs per family' do
        let(:resolved_ips) { ['2606:2800:220:1::1', '93.184.216.34', '93.184.216.35'] }

        it 'keeps the first IP of each family in resolution order' do
          call_middleware

          expect(env[:gitlab_candidate_addresses]).to eq(['2606:2800:220:1::1', '93.184.216.34'])
        end
      end

      context 'when DNS rebinding protection is disabled' do
        before do
          stub_application_setting(dns_rebinding_protection_enabled: false)
        end

        it_behaves_like 'no candidate addresses'
      end

      context 'when behind an HTTP proxy' do
        before do
          allow(Gitlab).to receive(:http_proxy_env?).and_return(true)
        end

        it_behaves_like 'no candidate addresses'
      end

      context 'when the host is in the outbound local requests allowlist' do
        before do
          stub_application_setting(outbound_local_requests_whitelist: ['public-url.com'])
        end

        it_behaves_like 'no candidate addresses'
      end

      context 'when the resolved IP is in the outbound local requests allowlist' do
        let(:resolved_ips) { ['10.0.0.5', '93.184.216.34'] }

        before do
          stub_application_setting(
            allow_local_requests_from_web_hooks_and_services: false,
            outbound_local_requests_whitelist: ['10.0.0.5', 'fd00::5']
          )
        end

        it 'pins the allowlisted IP' do
          call_middleware

          expect(env[:gitlab_candidate_addresses]).to eq(['10.0.0.5'])
        end

        context 'when the allowlisted IP is IPv6' do
          let(:resolved_ips) { ['fd00::5'] }

          it 'pins it without brackets' do
            call_middleware

            expect(env[:gitlab_candidate_addresses]).to eq(['fd00::5'])
          end
        end

        context 'when DNS rebinding protection is disabled' do
          before do
            stub_application_setting(dns_rebinding_protection_enabled: false)
          end

          it_behaves_like 'no candidate addresses'
        end

        context 'when the URL is the allowlisted IP itself' do
          let(:env) { { url: URI('https://10.0.0.5') } }

          it_behaves_like 'no candidate addresses'
        end
      end
    end

    context 'when a non HTTP/HTTPS URL is provided' do
      let(:env) { { url: 'ssh://172.16.0.0' } }

      it 'raises an error' do
        expect { call_middleware }.to raise_error(Gitlab::HTTP_V2::UrlBlocker::BlockedUrlError)
      end
    end
  end
end
