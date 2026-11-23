# frozen_string_literal: true

FactoryBot.define do
  factory :package_file_build_info, class: 'Packages::PackageFileBuildInfo' do
    package_file

    trait :with_pipeline do
      pipeline { association(:ci_pipeline, :with_job, project: package_file.package.project) }
    end
  end
end
