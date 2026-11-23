# frozen_string_literal: true

require 'spec_helper'

RSpec.describe Gitlab::Graphql::LogSanitizer, feature_category: :api do
  describe '.query_string' do
    let(:mutation) { 'mutation { echoCreate(input: { messages: ["top-secret"] }) { errors } }' }
    let(:operation_name) { nil }

    subject(:query_string) do
      described_class.query_string(GraphQL::Query.new(GitlabSchema, document, operation_name: operation_name))
    end

    where(:prefix) { ['', ' ', "\n", "\t", ',', "# comment\n", "﻿"] }

    with_them do
      let(:document) { "#{prefix}#{mutation}" }

      it 'redacts literals' do
        expect(query_string.to_s).not_to include('top-secret')
      end
    end

    context 'when a query is selected from a document that also contains a mutation' do
      let(:document) { "query A { __typename } #{mutation.sub('mutation', 'mutation B')}" }
      let(:operation_name) { 'A' }

      it 'redacts the mutation literals' do
        expect(query_string).to include('<REDACTED>')
        expect(query_string).not_to include('top-secret')
      end
    end

    context 'when the document cannot be parsed' do
      let(:document) { 'mutation { echoCreate(input: { messages: ["top-secret"] }' }

      it 'does not return the raw document' do
        expect(query_string).to be_nil
      end
    end

    context 'when the document only contains queries' do
      let(:document) { 'query { project(fullPath: "group/project") { id } }' }

      it 'returns the document unchanged' do
        expect(query_string).to eq(document)
      end
    end
  end
end
