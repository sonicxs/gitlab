# frozen_string_literal: true

module API
  module Entities
    class PackageVersion < Grape::Entity
      expose :id
      expose :version
      expose :created_at
      expose :tags

      expose :pipeline, if: ->(package, opts) {
        package.last_build_info && can_read_pipeline?(package, opts)
      }, using: Package::Pipeline

      private

      def can_read_pipeline?(package, opts)
        return false unless Ability.allowed?(opts[:user], :read_pipeline, package.project)

        # The pipeline can belong to another project when published with a cross-project CI_JOB_TOKEN.
        pipeline = package.pipeline
        pipeline.nil? || pipeline.project_id == package.project_id ||
          Ability.allowed?(opts[:user], :read_pipeline, pipeline)
      end
    end
  end
end
