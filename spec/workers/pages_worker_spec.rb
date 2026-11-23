# frozen_string_literal: true

require 'spec_helper'

RSpec.describe PagesWorker, :sidekiq_inline, feature_category: :pages do
  let_it_be(:ci_build) { create(:ci_build) }

  context 'when called with the deploy action' do
    it 'calls UpdatePagesService' do
      expect_next_instance_of(Projects::UpdatePagesService, ci_build.project, ci_build) do |service|
        expect(service).to receive(:execute)
      end

      described_class.perform_async(:deploy, ci_build.id)
    end
  end

  context 'when called with any other action' do
    it 'does nothing' do
      expect_next_instance_of(described_class) do |job_class|
        expect(job_class).not_to receive(:foo)
        expect(job_class).not_to receive(:deploy)
      end

      described_class.perform_async(:foo)
    end
  end

  describe '.sidekiq_retries_exhausted' do
    let(:job) { { 'args' => ['deploy', ci_build.id] } }

    it 'calls perform_failure with the retries exhausted message' do
      expect_next_instance_of(described_class) do |worker|
        expect(worker).to receive(:perform_failure).with(ci_build.id, described_class::RETRIES_EXHAUSTED_MESSAGE)
      end

      described_class.sidekiq_retries_exhausted_block.call(job, StandardError.new)
    end
  end

  describe '.sidekiq_interruptions_exhausted' do
    let(:job) { { 'args' => ['deploy', ci_build.id] } }

    it 'calls perform_failure with the interruptions exhausted message' do
      expect_next_instance_of(described_class) do |worker|
        expect(worker).to receive(:perform_failure)
          .with(ci_build.id, described_class::INTERRUPTIONS_EXHAUSTED_MESSAGE)
      end

      described_class.interruptions_exhausted_block.call(job)
    end
  end

  describe '#perform_failure' do
    let_it_be(:pipeline) { ci_build.pipeline }
    let(:message) { described_class::INTERRUPTIONS_EXHAUSTED_MESSAGE }

    let!(:stuck_statuses) do
      create_list(:generic_commit_status, 2, :running, pipeline: pipeline, name: 'pages:deploy')
    end

    let!(:successful_status) { create(:generic_commit_status, :success, pipeline: pipeline, name: 'pages:deploy') }
    let!(:other_running_status) { create(:generic_commit_status, :running, pipeline: pipeline, name: 'other') }

    subject(:perform_failure) { described_class.new.perform_failure(ci_build.id, message) }

    it 'drops every running pages:deploy status on the pipeline' do
      perform_failure

      stuck_statuses.each do |status|
        status.reload

        expect(status).to be_failed
        expect(status.failure_reason).to eq('script_failure')
        expect(status.description).to eq(message)
      end
    end

    it 'does not touch other statuses' do
      perform_failure

      expect(successful_status.reload).to be_success
      expect(other_running_status.reload).to be_running
    end

    it 'sets allow_failure based on whether the build is the latest for its ref' do
      allow_next_instance_of(Gitlab::Pages::DeploymentValidations) do |validations|
        allow(validations).to receive(:latest_build?).and_return(false)
      end

      perform_failure

      expect(stuck_statuses.map(&:reload)).to all(be_allow_failure)
    end

    context 'with pages deployments for the build' do
      let!(:orphaned_deployment) do
        create(:pages_deployment, project: ci_build.project, ci_build: ci_build).tap do |deployment|
          deployment.update_column(:upload_ready, false)
        end
      end

      let!(:ready_deployment) { create(:pages_deployment, project: ci_build.project, ci_build: ci_build) }
      let!(:other_build_deployment) do
        create(:pages_deployment, project: ci_build.project).tap do |deployment|
          deployment.update_column(:upload_ready, false)
        end
      end

      it 'destroys only the deployments for the build that never finished uploading' do
        perform_failure

        expect(PagesDeployment.exists?(orphaned_deployment.id)).to be(false)
        expect(PagesDeployment.exists?(ready_deployment.id)).to be(true)
        expect(PagesDeployment.exists?(other_build_deployment.id)).to be(true)
      end
    end

    context 'when the build does not exist' do
      subject(:perform_failure) { described_class.new.perform_failure(non_existing_record_id, message) }

      it 'does nothing' do
        expect { perform_failure }.not_to raise_error

        expect(stuck_statuses.map(&:reload)).to all(be_running)
      end
    end
  end
end
