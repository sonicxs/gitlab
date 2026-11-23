# frozen_string_literal: true

require 'spec_helper'

RSpec.describe Ci::GenerateCoverageReportsService, feature_category: :code_testing do
  let_it_be(:project) { create(:project, :repository) }

  let(:service) { described_class.new(project) }

  describe '#execute' do
    subject { service.execute(base_pipeline, head_pipeline) }

    context 'when head pipeline has coverage reports' do
      let_it_be(:merge_request) { create(:merge_request, :with_coverage_reports, source_project: project) }
      let!(:service) { described_class.new(project, nil, id: merge_request.id) }
      let!(:head_pipeline) { merge_request.head_pipeline }
      let!(:base_pipeline) { nil }

      it 'returns status and data', :aggregate_failures do
        expect_any_instance_of(Ci::PipelineArtifact) do |instance|
          expect(instance).to receive(:present)
          expect(instance).to receive(:for_files).with(merge_request.new_paths).and_call_original
        end

        expect(subject[:status]).to eq(:parsed)
        expect(subject[:data]).to eq(files: {})
      end

      context 'when there is a parsing error' do
        before do
          allow_next_found_instance_of(MergeRequest) do |merge_request|
            allow(merge_request).to receive(:new_paths).and_raise(StandardError)
          end
        end

        it 'returns status with error message and tracks the error' do
          expect(service).to receive(:track_exception).and_call_original

          expect(subject[:status]).to eq(:error)
          expect(subject[:status_reason]).to include('An error occurred while fetching coverage reports.')
        end
      end
    end

    context 'when the aggregate is built from a maintainer-only report' do
      let_it_be(:reporter) { create(:user, reporter_of: project) }
      let_it_be(:maintainer) { create(:user, maintainer_of: project) }

      let(:merge_request) { create(:merge_request, :with_coverage_reports, source_project: project) }
      let(:head_pipeline) { merge_request.head_pipeline }
      let(:base_pipeline) { nil }
      let(:service) { described_class.new(project, viewer, id: merge_request.id) }
      let(:viewer) { reporter }
      let(:paths) { ['app/controllers/abuse_reports_controller.rb'] }
      let(:restricted_status) { :success }
      let(:restricted_traits) { [:maintainer_only_access] }
      let(:restricted) do
        create(:ci_build, restricted_status, name: 'restricted', pipeline: head_pipeline, project: project)
      end

      before do
        create(:ci_job_artifact, :cobertura,
          job: create(:ci_build, :success, name: 'public', pipeline: head_pipeline, project: project))
        create(:ci_job_artifact, :cobertura, *restricted_traits, job: restricted)

        allow(head_pipeline).to receive(:all_worktree_paths).and_return(paths)
        allow_next_instance_of(Gitlab::Ci::Reports::CoverageReportGenerator) do |generator|
          allow(generator).to receive(:merge_request_file_paths).and_return(paths.to_set)
        end
        Ci::PipelineArtifacts::CoverageReportService.new(head_pipeline).execute

        allow_next_found_instance_of(MergeRequest) do |merge_request|
          allow(merge_request).to receive(:new_paths).and_return(paths)
        end
      end

      it 'returns no coverage data to a reporter' do
        expect(subject).to include(status: :parsed, data: { files: {} })
      end

      context 'when the viewer is anonymous' do
        let(:viewer) { nil }

        it 'returns no coverage data' do
          expect(subject).to include(status: :parsed, data: { files: {} })
        end
      end

      context 'when the viewer is a maintainer' do
        let(:viewer) { maintainer }

        it 'returns the coverage data' do
          expect(subject[:data][:files]).to include(paths.first)
        end
      end

      context 'when every source report has the default access' do
        let(:restricted_traits) { [] }

        it 'returns the coverage data to a reporter' do
          expect(subject[:data][:files]).to include(paths.first)
        end
      end

      context 'when the source build is retried and the new job is still pending' do
        before do
          restricted.update!(retried: true)
          create(:ci_build, :pending, name: 'restricted', pipeline: head_pipeline, project: project)
        end

        it 'returns no coverage data to a reporter' do
          expect(subject).to include(status: :parsed, data: { files: {} })
        end
      end

      context 'when the source build failed after uploading and is then erased' do
        let(:restricted_status) { :failed }

        before do
          Ci::BuildEraseService.new(restricted, maintainer, rate_limit: false).execute
        end

        it 'returns no coverage data to a reporter' do
          expect(subject).to include(status: :parsed, data: { files: {} })
        end

        context 'when the viewer is a maintainer' do
          let(:viewer) { maintainer }

          it 'returns the coverage data' do
            expect(subject[:data][:files]).to include(paths.first)
          end
        end
      end
    end

    context 'when the aggregate was built before its sources were recorded' do
      let_it_be(:maintainer) { create(:user, maintainer_of: project) }
      let_it_be(:merge_request) { create(:merge_request, :with_coverage_reports, source_project: project) }

      let(:head_pipeline) { merge_request.head_pipeline }
      let(:base_pipeline) { nil }
      let(:service) { described_class.new(project, maintainer, id: merge_request.id) }

      before do
        head_pipeline.pipeline_artifacts.find_by_file_type(:code_coverage).update!(
          file: CarrierWaveStringFile.new_file(
            file_content: { files: { 'demo.rb' => { '1' => 1 } } }.to_json,
            filename: 'code_coverage.json',
            content_type: 'application/json'
          )
        )

        allow_next_found_instance_of(MergeRequest) do |merge_request|
          allow(merge_request).to receive(:new_paths).and_return(['demo.rb'])
        end
      end

      it 'returns no coverage data, even to a maintainer' do
        expect(subject).to include(status: :parsed, data: { files: {} })
      end
    end

    context 'when head pipeline does not have a coverage report artifact' do
      let!(:merge_request) { create(:merge_request, :with_coverage_reports, source_project: project) }
      let!(:service) { described_class.new(project, nil, id: merge_request.id) }
      let!(:head_pipeline) { merge_request.head_pipeline }
      let!(:base_pipeline) { nil }

      before do
        head_pipeline.pipeline_artifacts.destroy_all # rubocop: disable Cop/DestroyAll
      end

      it 'returns status and error message' do
        expect(service).not_to receive(:track_exception)

        expect(subject[:status]).to eq(:error)
        expect(subject[:status_reason]).to include('An error occurred while fetching coverage reports.')
      end
    end

    context 'when head pipeline has coverage reports and no merge request associated' do
      let!(:head_pipeline) { create(:ci_pipeline, :with_coverage_reports, project: project) }
      let!(:base_pipeline) { nil }

      it 'returns status and error message' do
        expect(service).not_to receive(:track_exception)

        expect(subject[:status]).to eq(:error)
        expect(subject[:status_reason]).to include('An error occurred while fetching coverage reports.')
      end
    end
  end

  describe '#latest?' do
    subject { service.latest?(base_pipeline, head_pipeline, data) }

    let!(:base_pipeline) { nil }
    let_it_be_with_reload(:head_pipeline) { create(:ci_pipeline, :with_coverage_reports, project: project) }
    let_it_be_with_reload(:child_pipeline) { create(:ci_pipeline, child_of: head_pipeline) }
    let!(:key) { service.send(:key, base_pipeline, head_pipeline) }

    let(:data) { { key: key } }

    context 'when cache key is latest' do
      it { is_expected.to be_truthy }
    end

    context 'when head pipeline has been updated' do
      before do
        head_pipeline.update_column(:updated_at, 1.minute.from_now)
      end

      it { is_expected.to be_falsy }
    end

    context 'when cache key is empty' do
      let(:data) { { key: nil } }

      it { is_expected.to be_falsy }
    end

    context 'when the pipeline has a child that is updated' do
      before do
        child_pipeline.update_column(:updated_at, 1.minute.from_now)
      end

      it { is_expected.to be_falsy }
    end
  end
end
