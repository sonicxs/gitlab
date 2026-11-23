# frozen_string_literal: true

require 'spec_helper'

RSpec.describe ::Packages::TerraformModule::PackagePresenter, feature_category: :package_registry do
  describe '#as_json' do
    # rubocop:disable RSpec/FactoryBot/AvoidCreate -- Need associations
    let_it_be(:project) { create(:project) }
    let_it_be(:user) { create(:user) }
    let_it_be(:pipeline) { create(:ci_pipeline, project: project, user: user) }
    let_it_be(:package) { create(:terraform_module_package, :with_metadatum, pipelines: [pipeline], project: project) }
    # rubocop:enable RSpec/FactoryBot/AvoidCreate

    let_it_be(:package_file) { package.package_files.first }

    let(:pipeline_hash) do
      pipeline
        .as_json(only: %i[created_at id sha ref])
        .merge(
          'project' => {
            'name' => project.name,
            'web_url' => ::Gitlab::Routing.url_helpers.project_url(project),
            'pipeline_url' => ::Gitlab::Routing.url_helpers.project_pipeline_url(project, pipeline),
            'commit_url' => ::Gitlab::Routing.url_helpers.project_commit_url(project, pipeline.sha)
          },
          'user' => {
            'avatar_url' => user.avatar_url,
            'name' => user.name
          }
        )
    end

    let(:result) do
      package.as_json.merge(
        'terraform_module_metadatum' => package.terraform_module_metadatum.as_json,
        'package_files' => [
          package_file.as_json(only: %i[id file_name size created_at])
            .merge(
              'download_path' => package_file.download_path,
              'pipelines' => [pipeline_hash]
            )
        ],
        'pipeline' => pipeline_hash,
        'pipelines' => [pipeline_hash]
      )
    end

    before_all do
      project.add_developer(user)
      package_file.package_file_build_infos.create!(pipeline: pipeline)
    end

    subject(:present) { described_class.new(package, user).as_json }

    it { is_expected.to include(result) }

    context 'when the user cannot read the pipeline' do
      let_it_be(:other_user) { create(:user) } # rubocop:disable RSpec/FactoryBot/AvoidCreate -- Need a persisted user

      subject(:present) { described_class.new(package, other_user).as_json }

      it 'does not expose the pipelines' do
        expect(present).to include('pipeline' => nil, 'pipelines' => [])
        expect(present['package_files']).to all(include('pipelines' => []))
      end
    end

    context 'when the pipeline belongs to another project' do
      # rubocop:disable RSpec/FactoryBot/AvoidCreate -- Need associations
      let_it_be(:another_project) { create(:project, :private) }
      let_it_be(:other_pipeline) { create(:ci_pipeline, project: another_project) }
      let_it_be(:other_package) do
        create(:terraform_module_package, :with_metadatum, pipelines: [other_pipeline], project: project)
      end
      # rubocop:enable RSpec/FactoryBot/AvoidCreate

      before_all do
        other_package.package_files.first.package_file_build_infos.create!(pipeline: other_pipeline)
      end

      subject(:present) { described_class.new(other_package, current_user).as_json }

      context 'when the user cannot read the package project pipelines' do
        let_it_be(:current_user) { create(:user, developer_of: another_project) } # rubocop:disable RSpec/FactoryBot/AvoidCreate -- Need a persisted user

        it 'does not expose the pipeline' do
          expect(present).to include('pipeline' => nil, 'pipelines' => [])
          expect(present['package_files']).to all(include('pipelines' => []))
        end
      end

      context 'when the user can read the package project but not the pipeline project' do
        let(:current_user) { user }

        it 'does not expose the pipeline' do
          expect(present).to include('pipeline' => nil, 'pipelines' => [])
          expect(present['package_files']).to all(include('pipelines' => []))
        end
      end

      context 'when the user can read both projects' do
        let_it_be(:current_user) { create(:user, developer_of: [project, another_project]) } # rubocop:disable RSpec/FactoryBot/AvoidCreate -- Need a persisted user

        it 'exposes the pipeline' do
          expect(present['pipeline']).to include('id' => other_pipeline.id)
          expect(present['pipelines']).to contain_exactly(a_hash_including('id' => other_pipeline.id))
          expect(present['package_files']).to all(
            include('pipelines' => [a_hash_including('id' => other_pipeline.id)])
          )
        end
      end
    end

    it 'avoids N+1 database queries' do
      # reset associations cache
      package.reload

      count = ActiveRecord::QueryRecorder.new { present }.count

      # rubocop:disable RSpec/FactoryBot/AvoidCreate -- Need associations
      create(:package_file, :terraform_module, package: package,
        pipelines: [create(:ci_pipeline, project: project)])
      # rubocop:enable RSpec/FactoryBot/AvoidCreate

      # reset associations cache
      package.reload

      expect do
        described_class.new(package, user).as_json
      end.not_to exceed_query_limit(count)
    end
  end
end
