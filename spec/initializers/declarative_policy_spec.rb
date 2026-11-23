# frozen_string_literal: true

require 'spec_helper'

RSpec.describe 'DeclarativePolicy subject cache key', feature_category: :permissions do
  describe 'DeclarativePolicy::Cache.subject_key' do
    it 'uses the key defined by the subject' do
      subject = instance_double(Commit, declarative_policy_subject_key: 'Commit:Project:1:abc')

      expect(DeclarativePolicy::Cache.subject_key(subject)).to eq('Commit:Project:1:abc')
    end

    it 'keeps the default key for other subjects' do
      project = build_stubbed(:project)

      expect(DeclarativePolicy::Cache.subject_key(project)).to eq("Project:#{project.id}")
    end

    it 'gives commits with the same SHA in different projects different keys' do
      project = create(:project, :repository)
      other_project = create(:project, :repository)
      sha = project.repository.head_commit.id

      expect(DeclarativePolicy::Cache.subject_key(project.commit(sha)))
        .not_to eq(DeclarativePolicy::Cache.subject_key(other_project.commit(sha)))
    end
  end
end
