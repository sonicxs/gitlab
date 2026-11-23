# frozen_string_literal: true

require 'spec_helper'

RSpec.describe Ci::GenerateCodequalityMrDiffReportService, feature_category: :code_review_workflow do
  let(:service) { described_class.new(project) }
  let_it_be(:project) { create(:project, :small_repo) }

  describe '#execute' do
    subject { service.execute(base_pipeline, head_pipeline) }

    context 'when head pipeline has codequality mr diff report' do
      let_it_be_with_reload(:merge_request) { create(:merge_request, :with_codequality_mr_diff_reports, source_project: project, id: 12345678) }
      let(:service) { described_class.new(project, nil, id: merge_request.id) }
      let(:head_pipeline) { merge_request.head_pipeline }
      let(:base_pipeline) { nil }

      it 'returns status and data', :aggregate_failures do
        expect_any_instance_of(Ci::PipelineArtifact) do |instance|
          expect(instance).to receive(:present)
          expect(instance).to receive(:for_files).with(merge_request).and_call_original
        end

        expect(subject[:status]).to eq(:parsed)
        expect(subject[:data]).to eq(files: {})
      end
    end

    context 'when the aggregate is built from a maintainer-only report' do
      let_it_be(:merge_request) do
        create(:merge_request, :with_codequality_mr_diff_reports, source_project: project, id: 12345678)
      end

      let_it_be(:reporter) { create(:user, reporter_of: project) }
      let_it_be(:maintainer) { create(:user, maintainer_of: project) }

      let(:head_pipeline) { merge_request.head_pipeline }
      let(:base_pipeline) { nil }
      let(:service) { described_class.new(project, viewer, id: merge_request.id) }
      let(:source_access) { [%w[public codequality], %w[maintainer codequality]] }

      before do
        pipeline_artifact = head_pipeline.pipeline_artifacts.find_by_file_type(:code_quality_mr_diff)
        content = Gitlab::Json::SafeParser.parse(pipeline_artifact.file.read)

        pipeline_artifact.update!(
          file: CarrierWaveStringFile.new_file(
            file_content: content.merge('source_access' => source_access).compact.to_json,
            filename: 'code_quality_mr_diff.json',
            content_type: 'application/json'
          )
        )

        allow_next_found_instance_of(MergeRequest) do |merge_request|
          allow(merge_request).to receive(:new_paths).and_return(['file_a.rb'])
        end
      end

      context 'when the viewer cannot read the report' do
        let(:viewer) { reporter }

        it 'returns no codequality data' do
          expect(subject).to include(status: :parsed, data: { files: {} })
        end
      end

      context 'when every source report has the default access' do
        let(:viewer) { reporter }
        let(:source_access) { [%w[public codequality]] }

        it 'returns the codequality data to a reporter' do
          expect(subject[:data][:files]).to include('file_a.rb')
        end
      end

      context 'when the viewer is anonymous' do
        let(:viewer) { nil }

        it 'returns no codequality data' do
          expect(subject).to include(status: :parsed, data: { files: {} })
        end
      end

      context 'when the viewer can read the report' do
        let(:viewer) { maintainer }

        it 'returns the codequality data' do
          expect(subject[:data][:files]).to include('file_a.rb')
        end

        context 'when the aggregate was built before its sources were recorded' do
          let(:source_access) { nil }

          it 'returns no codequality data' do
            expect(subject).to include(status: :parsed, data: { files: {} })
          end
        end
      end
    end

    context 'when head pipeline does not have a codequality mr diff report' do
      let_it_be_with_reload(:merge_request) { create(:merge_request, source_project: project) }
      let(:service) { described_class.new(project, nil, id: merge_request.id) }
      let(:head_pipeline) { merge_request.head_pipeline }
      let(:base_pipeline) { nil }

      it 'returns status and error message' do
        expect(subject[:status]).to eq(:error)
        expect(subject[:status_reason]).to include('An error occurred while fetching codequality mr diff reports.')
      end
    end

    context 'when head pipeline has codequality mr diff report and no merge request associated' do
      let_it_be(:head_pipeline) { create(:ci_pipeline, :with_codequality_mr_diff_report, project: project) }
      let(:base_pipeline) { nil }

      it 'returns status and error message' do
        expect(subject[:status]).to eq(:error)
        expect(subject[:status_reason]).to include('An error occurred while fetching codequality mr diff reports.')
      end
    end
  end
end
