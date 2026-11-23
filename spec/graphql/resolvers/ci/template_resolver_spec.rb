# frozen_string_literal: true

require 'spec_helper'

RSpec.describe Resolvers::Ci::TemplateResolver do
  include GraphqlHelpers

  describe '#resolve' do
    let_it_be(:user) { create(:user) }
    let_it_be(:project) { create(:project, :private) }

    subject(:resolve_subject) { resolve(described_class, obj: project, ctx: { current_user: user }, args: { name: template_name }) }

    context 'when the user can download code' do
      before_all do
        project.add_developer(user)
      end

      context 'when template exists' do
        let(:template_name) { 'Android' }

        it 'returns the found template' do
          found_template = resolve_subject

          expect(found_template).to be_an_instance_of(Gitlab::Template::GitlabCiYmlTemplate)
          expect(found_template.name).to eq('Android')
        end
      end

      context 'when template does not exist' do
        let(:template_name) { 'invalidname' }

        it 'returns nil' do
          expect(resolve_subject).to be_nil
        end
      end
    end

    context 'when the user cannot download code' do
      let(:template_name) { 'Android' }

      context 'with a guest' do
        before_all do
          project.add_guest(user)
        end

        it 'returns nil' do
          expect(resolve_subject).to be_nil
        end
      end

      context 'with a non-member' do
        it 'returns nil' do
          expect(resolve_subject).to be_nil
        end
      end
    end
  end
end
