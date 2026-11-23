# frozen_string_literal: true

require 'fast_spec_helper'
require_relative '../../../scripts/database/migration_timestamp_checker'

RSpec.describe MigrationTimestampChecker, feature_category: :database do
  subject(:checker) { described_class.new }

  let(:new_migrations) { [] }

  before do
    stub_const('MigrationTimestampChecker::MIGRATION_DIRS', [db_migration_path])
    # CI sets the real target branch, which skips the age check on stable branch merge requests.
    stub_env('CI_MERGE_REQUEST_TARGET_BRANCH_NAME', nil)
    allow(checker).to receive(:new_migrations).and_return(new_migrations)
  end

  describe "#check" do
    let(:db_migration_path) { 'spec/fixtures/migrations/db/post_migrate' }

    subject(:check) { checker.check }

    context "when migrations are valid" do
      it { expect(check).to be_nil }
    end

    context 'when a migration does not have a timestamp' do
      let(:db_migration_path) { 'spec/fixtures/migrations/db/migrate' }

      it 'raises an error' do
        expect { check }.to raise_error(RuntimeError)
      end
    end

    context 'when a migration is in the future' do
      let(:future_timestamp) { 1.day.from_now.strftime('%Y%m%d%H%M%S') }
      let(:file_path) { "spec/fixtures/migrations/db/post_migrate/#{future_timestamp}_future_migration.rb" }

      before do
        File.write(file_path, "This is a future migration file", mode: 'w')
      end

      after do
        File.delete("spec/fixtures/migrations/db/post_migrate/#{future_timestamp}_future_migration.rb")
      end

      it 'returns the error code' do
        expect(check.error_code).to eq(1)
      end

      it 'returns the error message' do
        expect(check.error_message).to include(
          'Invalid Timestamp was found in migrations', file_path, 'has a future timestamp'
        )
      end
    end

    context 'when a migration has a timestamp older than three weeks' do
      let(:old_timestamp) { 4.weeks.ago.strftime('%Y%m%d%H%M%S') }
      let(:file_path) { "spec/fixtures/migrations/db/post_migrate/#{old_timestamp}_old_migration.rb" }

      before do
        File.write(file_path, "This is an old migration file", mode: 'w')
      end

      after do
        File.delete(file_path)
      end

      context 'and the migration is newly added in the current branch' do
        let(:new_migrations) { [file_path] }

        it 'returns the error code' do
          expect(check.error_code).to eq(1)
        end

        it 'returns the error message' do
          expect(check.error_message).to include(
            'Invalid Timestamp was found in migrations', file_path, 'has a timestamp older than three weeks',
            'scripts/refresh-migrations-timestamps'
          )
        end
      end

      context 'and the migration already exists on the target branch' do
        let(:new_migrations) { [] }

        it 'does not flag the pre-existing migration' do
          expect(check).to be_nil
        end
      end

      context 'and the merge request targets a branch' do
        using RSpec::Parameterized::TableSyntax

        let(:new_migrations) { [file_path] }

        before do
          stub_env('CI_MERGE_REQUEST_TARGET_BRANCH_NAME', target_branch)
        end

        where(:target_branch, :flagged) do
          '19-5-stable-ee'          | false
          '19-5-stable'             | false
          'master'                  | true
          'my-19-5-stable-ee-patch' | true
        end

        with_them do
          it 'only skips the age limit for stable branches' do
            expect(check.present?).to eq(flagged)
          end
        end
      end
    end

    context 'when a migration is in the future and the merge request targets a stable branch' do
      let(:future_timestamp) { 1.day.from_now.strftime('%Y%m%d%H%M%S') }
      let(:file_path) { "spec/fixtures/migrations/db/post_migrate/#{future_timestamp}_future_migration.rb" }

      before do
        stub_env('CI_MERGE_REQUEST_TARGET_BRANCH_NAME', '19-5-stable-ee')
        File.write(file_path, "This is a future migration file", mode: 'w')
      end

      after do
        File.delete(file_path)
      end

      it 'still flags the future timestamp' do
        expect(check.error_message).to include(file_path, 'has a future timestamp')
      end
    end

    context 'when a newly added migration has a recent timestamp' do
      let(:recent_timestamp) { 1.week.ago.strftime('%Y%m%d%H%M%S') }
      let(:file_path) { "spec/fixtures/migrations/db/post_migrate/#{recent_timestamp}_recent_migration.rb" }
      let(:new_migrations) { [file_path] }

      before do
        File.write(file_path, "This is a recent migration file", mode: 'w')
      end

      after do
        File.delete(file_path)
      end

      it { expect(check).to be_nil }
    end
  end
end
