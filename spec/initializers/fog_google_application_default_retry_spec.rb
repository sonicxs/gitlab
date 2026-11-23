# frozen_string_literal: true

require 'spec_helper'

RSpec.describe 'Fog::Google application default credentials retry', feature_category: :job_artifacts do
  let(:metadata_url) { 'http://169.254.169.254/' }
  let(:compute_metadata) { Google::Cloud.env.compute_metadata }
  let(:metadata_response) { { status: 200, headers: { 'Metadata-Flavor' => 'Google' } } }

  subject(:connect) do
    Fog::Storage.new(provider: 'Google', google_project: 'project', google_application_default: true)
  end

  before do
    compute_metadata.reset!
    allow(Google::Cloud.env.compute_smbios).to receive(:google_compute?).and_return(true)

    # Treat any failed lookup as past the warmup window, so it latches existence to :no
    compute_metadata.warmup_time = 0
    compute_metadata.retry_count = 0
    # A failed lookup is cached for this long; in production the latch is usually much older
    compute_metadata.retry_interval = 0
  end

  after do
    compute_metadata.reset!
  end

  context 'when a metadata server timeout has latched existence to :no' do
    before do
      stub_request(:get, metadata_url).to_timeout.then.to_return(metadata_response)
    end

    it 'resets the existence cache and connects' do
      expect { connect }.not_to raise_error
      expect(compute_metadata.existence_immediate).to eq(:confirmed)
    end
  end

  context 'when the metadata server keeps timing out' do
    before do
      stub_request(:get, metadata_url).to_timeout
    end

    it 'retries once and raises' do
      expect(Google::Auth::GCECredentials).to receive(:reset_cache).once.and_call_original

      expect { connect }.to raise_error(RuntimeError, Google::Auth::NOT_FOUND_ERROR)
    end
  end

  context 'when the metadata server responds' do
    before do
      stub_request(:get, metadata_url).to_return(metadata_response)
    end

    it 'does not reset the existence cache' do
      expect(Google::Auth::GCECredentials).not_to receive(:reset_cache)

      expect { connect }.not_to raise_error
    end
  end
end
