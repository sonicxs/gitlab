# frozen_string_literal: true

require 'spec_helper'

RSpec.describe 'shared/wikis/show.html.haml', feature_category: :wiki do
  include RSpec::Parameterized::TableSyntax

  # rubocop:disable RSpec/FactoryBot/AvoidCreate -- Need persisted objects
  let_it_be_with_reload(:project) { create(:project) }
  let_it_be_with_reload(:wiki_page) { create(:wiki_page, container: project) }
  # rubocop:enable RSpec/FactoryBot/AvoidCreate

  let_it_be(:wiki) { build_stubbed(:project_wiki, project: project) }

  before do
    assign(:wiki, wiki)
    assign(:page, wiki_page)
    assign(:templates, [wiki_page])
  end

  describe '#js-vue-wiki-app' do
    it 'renders wiki app' do
      render

      expect(rendered).to have_selector('#js-vue-wiki-app')
    end

    context 'when container not archived' do
      it 'sets is-container-archived to false' do
        allow(wiki.container).to receive(:self_or_ancestors_archived?).and_return(false)

        render

        expect(rendered).to have_selector('[data-is-container-archived="false"]')
      end
    end

    context 'when container archived' do
      it 'sets is-container-archived to true' do
        allow(wiki.container).to receive(:self_or_ancestors_archived?).and_return(true)

        render

        expect(rendered).to have_selector('[data-is-container-archived="true"]')
      end
    end

    context 'when the front matter title is a mapping' do
      let(:wiki_page) do
        build(:wiki_page, container: project,
          content: "---\ntitle:\n  'p></div><img src=x onerror=alert(1)> x': 1\n---\nContent")
      end

      it 'does not render attributes from the mapping', :aggregate_failures do
        render

        wiki_app = Nokogiri::HTML.fragment(rendered).at_css('#js-vue-wiki-app')

        expect(wiki_app.attribute_nodes.map(&:name)).not_to include(a_string_starting_with('data-page-heading-'))
        expect(rendered).not_to have_css('img')
      end
    end
  end
end
