# frozen_string_literal: true

require 'fast_spec_helper'
require 'labkit/fields'
require_relative '../../../support/helpers/gpg_helpers'

RSpec.describe Gitlab::Gpg::PacketGuard, feature_category: :source_code_management do
  using RSpec::Parameterized::TableSyntax

  before do
    allow(Gitlab::AppJsonLogger).to receive(:info)
  end

  def armor(binary, label: 'SIGNATURE')
    "-----BEGIN PGP #{label}-----\n\n#{Base64.strict_encode64(binary)}\n-----END PGP #{label}-----\n"
  end

  def packet(tag, body, length: nil)
    [0xC0 + tag].pack('C') + (length || [255, body.bytesize].pack('CN')) + body
  end

  def subpacket(type, size, length: nil)
    (length || [size + 1].pack('C')) + [type].pack('C') + ('x' * size)
  end

  def signature(hashed: ''.b, unhashed: ''.b, version: 4)
    [version, 0, 1, 8, hashed.bytesize].pack('CCCCn') + hashed +
      [unhashed.bytesize].pack('n') + unhashed + "\x00\x00\x00\x01\x01".b
  end

  def fixture_binary(armored)
    body = armored.split("\n\n").last.lines.take_while { |line| !line.start_with?('=') }.join.delete("\n")

    Base64.strict_decode64(body)
  end

  def body_line
    fixture_armor.split("\n\n").last.lines.first.chomp
  end

  def armor_with_padding(size)
    fixture_armor.sub("\n=", "#{'=' * size}\n=")
  end

  shared_examples 'armor with UTF-8 headers' do
    where(:encoding) { [Encoding::UTF_8, Encoding::ASCII_8BIT] }

    with_them do
      let(:input) { fixture_armor.sub("\n\n", "\nComment: clé publique\n\n").force_encoding(encoding) }

      it 'accepts UTF-8 armor header values #security' do
        expect(decoded).to eq(fixture_binary(fixture_armor))
      end
    end
  end

  shared_examples 'armor with empty header values' do
    where(:header) { ['Comment: ', 'Comment:   '] }

    with_them do
      let(:input) { fixture_armor.sub("\n", "\n#{header}\n") }

      it 'accepts empty and whitespace-only armor header values #security' do
        expect(decoded).to eq(fixture_binary(fixture_armor))
      end
    end
  end

  shared_examples 'armor with trailing whitespace' do
    where(:line_pattern) do
      [
        /^-----BEGIN PGP [A-Z ]+-----$/,
        /^-----END PGP [A-Z ]+-----$/,
        %r{^[A-Za-z0-9+/]+={0,2}$},
        %r{^=[A-Za-z0-9+/]{4}$},
        /^$/
      ]
    end

    with_them do
      let(:input) { fixture_armor.gsub(line_pattern) { |line| "#{line} \t" } }

      it 'accepts trailing spaces and tabs on armor lines' do
        expect(decoded).to eq(fixture_binary(fixture_armor))
      end
    end
  end

  shared_examples 'compatible armor formatting' do
    let(:blank_body_lines) { fixture_armor.sub(body_line, "#{body_line}\n\n\n") }
    let(:missing_separator_with_header) { fixture_armor.sub("\n\n", "\n") }
    let(:missing_separator_without_header) { fixture_armor.sub(/^Version:.*\n/, '').sub("\n\n", "\n") }
    let(:stray_cr_begin) { fixture_armor.sub("-----\n", "-----\r\r\n") }
    let(:stray_cr_end) { fixture_armor.sub(/(-----END PGP [A-Z ]+-----)/, "\\1\r\r") }
    let(:mixed_crlf) { stray_cr_begin.gsub("\n", "\r\n").sub(/(-----END PGP [A-Z ]+-----)/, "\\1\r\r") }
    let(:body_spaces_tabs) { fixture_armor.sub(body_line, body_line.chars.join(" \t")) }
    let(:body_other_whitespace) { fixture_armor.sub(body_line, body_line.chars.join("\r\v\f")) }
    let(:split_padding) { fixture_armor.sub(/^=....\n/, '').sub(/=\n/, "\n=\n") }
    let(:blank_after_checksum) { fixture_armor.sub(/(^=....$)/, "\\1\n\n") }
    let(:end_after_checksum) { fixture_armor.sub("\n-----END", '-----END') }
    let(:end_after_checksum_space) { fixture_armor.sub("\n-----END", ' -----END') }
    let(:end_after_body) { fixture_armor.sub(/^=....\n/, '').sub("\n-----END", '-----END') }
    let(:end_after_body_space) { fixture_armor.sub(/^=....\n/, '').sub("\n-----END", ' -----END') }
    let(:joined_tail) do
      trailing_lines = fixture_armor.lines.last(4)

      fixture_armor.delete_suffix(trailing_lines.join) + trailing_lines.map(&:chomp).join(' ')
    end

    let(:checksum_after_body) { fixture_armor.sub("\n=", '=') }
    let(:checksum_after_body_space) { fixture_armor.sub("\n=", ' =') }

    context 'with invisible characters inside body lines' do
      where(:codepoint, :character) do
        'U+00A0' | "\u00A0"
        'U+200B' | "\u200B"
        'U+200C' | "\u200C"
        'U+200D' | "\u200D"
        'U+2060' | "\u2060"
        'U+FEFF' | "\uFEFF"
      end

      with_them do
        let(:input) { fixture_armor.sub(body_line, body_line.chars.join(character)) }

        it 'returns the same binary with invisible body characters' do
          expect(decoded).to eq(fixture_binary(fixture_armor))
        end
      end
    end

    context 'with redundant trailing padding' do
      where(extra_padding: [1, 8], with_checksum: [true, false])

      with_them do
        let(:input) { armor_with_padding(extra_padding).sub(/^=....\n/, with_checksum ? '\\0' : '') }

        it 'returns the same binary with extra trailing padding' do
          expect(decoded).to eq(fixture_binary(fixture_armor))
        end
      end
    end

    context 'with indented checksums' do
      where(:extra_padding, :indentation) do
        0 | " \t"
        8 | " \t"
        0 | "\t\v\f\r "
        8 | "\t\v\f\r "
      end

      with_them do
        let(:input) { armor_with_padding(extra_padding).sub("\n=", "\n#{indentation}=") }

        it 'returns the same binary with an indented checksum' do
          expect(decoded).to eq(fixture_binary(fixture_armor))
        end
      end
    end

    context 'with adjusted body padding' do
      let(:missing_padding) { fixture_armor.sub(/=\n=/, "\n=") }
      let(:inline_checksum_with_padding) { fixture_armor.sub("\n=", '===') }

      where(:formatting, :input) do
        'missing body padding with a CRC'                | ref(:missing_padding)
        'CRC after the body with extra trailing padding' | ref(:inline_checksum_with_padding)
      end

      with_them do
        it 'returns the same binary with the given formatting' do
          expect(decoded).to eq(fixture_binary(fixture_armor))
        end
      end
    end

    where(:formatting, :input) do
      'blank lines inside the body'                     | ref(:blank_body_lines)
      'no blank separator after headers'                | ref(:missing_separator_with_header)
      'no headers or blank separator'                   | ref(:missing_separator_without_header)
      'stray carriage returns on BEGIN'                 | ref(:stray_cr_begin)
      'stray carriage returns on END'                   | ref(:stray_cr_end)
      'CRLF mixed with stray carriage returns'          | ref(:mixed_crlf)
      'spaces and tabs inside body lines'               | ref(:body_spaces_tabs)
      'carriage returns, VT and FF inside body lines'   | ref(:body_other_whitespace)
      'final padding on its own line without a CRC'     | ref(:split_padding)
      'blank lines after the checksum'                  | ref(:blank_after_checksum)
      'END immediately after the checksum'              | ref(:end_after_checksum)
      'END after the checksum and a space'              | ref(:end_after_checksum_space)
      'END immediately after the body without a CRC'    | ref(:end_after_body)
      'END after the body and a space without a CRC'    | ref(:end_after_body_space)
      'last body lines, CRC and END joined with spaces' | ref(:joined_tail)
      'CRC immediately after the last body line'        | ref(:checksum_after_body)
      'CRC after the last body line and a space'        | ref(:checksum_after_body_space)
    end

    with_them do
      it 'returns the same binary with the given formatting #security' do
        expect(decoded).to eq(fixture_binary(fixture_armor))
      end
    end
  end

  shared_examples 'invalid armor formatting' do
    let(:double_armor) { fixture_armor * 2 }
    let(:leading_junk) { "junk#{fixture_armor}" }
    let(:trailing_junk) { "#{fixture_armor}junk" }
    let(:wrong_label) { fixture_armor.gsub('PGP ', 'PGP MESSAGE ') }
    let(:missing_begin) { fixture_armor.lines.drop(1).join }
    let(:missing_end) { fixture_armor.sub(/^-----END PGP [A-Z ]+-----$/, '') }
    let(:empty_body) { "#{fixture_armor.lines.first}\n#{fixture_armor.lines.last}" }
    let(:bad_crc) { fixture_armor.sub(/^=....$/, '=AAAA') }
    let(:malformed_crc) { fixture_armor.sub(/^=....$/, '=AAA') }
    let(:bad_indented_crc) { fixture_armor.sub(/^=....$/, " \t=AAAA") }
    let(:multiple_checksums) { fixture_armor.sub(/(^=....$)/, "\\1\n\\1") }
    let(:text_before_body) { fixture_armor.sub("\n\n", "\nsome text!\n\n").sub(/^=....\n/, '') }
    let(:bad_armor_header) { fixture_armor.sub("\n\n", "\nnot-a-header\n\n").sub(/^=....\n/, '') }
    let(:header_after_separator) { fixture_armor.sub("\n\n", "\n\nComment: value\n") }
    let(:header_after_body) { fixture_armor.sub(body_line, "#{body_line}\nComment: value") }
    let(:padded_body_line) { fixture_armor.sub(body_line, "#{body_line}=") }
    let(:padded_chunks) do
      binary = fixture_binary(fixture_armor)
      first_chunk = Base64.strict_encode64(binary.byteslice(0, 47))
      remaining_chunk = Base64.strict_encode64(binary.byteslice(47..))
      label = fixture_armor.lines.first[/PGP (.+)-----/, 1]

      armor(binary, label: label).sub(Base64.strict_encode64(binary), "#{first_chunk}\n#{remaining_chunk}")
    end

    let(:mid_body_equals) { fixture_armor.sub(body_line, "#{body_line}\n=") }
    let(:mid_body_crc) do
      checksum = fixture_armor.lines.find { |line| line.start_with?('=') }.chomp

      fixture_armor.sub(body_line, "#{body_line}\n#{checksum}")
    end

    let(:cr_only) { fixture_armor.tr("\n", "\r") }
    let(:body_on_begin) { fixture_armor.sub(/^Version:.*\n/, '').sub("\n\n", ' ') }
    let(:begin_only) { fixture_armor.lines.first.chomp }
    let(:mismatched_label) { fixture_armor.sub('-----END PGP ', '-----END PGP MESSAGE ') }
    let(:overlapping_markers) do
      fixture_armor.lines.first.chomp + fixture_armor.lines.last.delete_prefix('-----').chomp
    end

    context 'with non-base64 body characters' do
      where(:codepoint, :character) do
        'U+0021' | '!'
        'U+2028' | "\u2028"
      end

      with_them do
        let(:input) { fixture_armor.sub(body_line, "#{character}#{body_line}") }

        it 'rejects the body character', :aggregate_failures do
          expect(Gitlab::AppJsonLogger).to receive(:info).once.with(hash_including(rejection_reason: 'invalid_armor'))

          expect(decoded).to be_nil
        end
      end
    end

    where(:formatting, :input) do
      'a second armor block'            | ref(:double_armor)
      'junk before BEGIN'               | ref(:leading_junk)
      'junk after END'                  | ref(:trailing_junk)
      'the wrong label'                 | ref(:wrong_label)
      'no BEGIN'                        | ref(:missing_begin)
      'no END'                          | ref(:missing_end)
      'an empty body'                   | ref(:empty_body)
      'only header lines'               | lazy { "#{fixture_armor.lines.first}Version: x#{fixture_armor.lines.last}" }
      'an incorrect checksum'           | ref(:bad_crc)
      'a malformed checksum'            | ref(:malformed_crc)
      'an incorrect indented checksum'  | ref(:bad_indented_crc)
      'multiple checksum lines'         | ref(:multiple_checksums)
      'text before the body'            | ref(:text_before_body)
      'an invalid armor header'         | ref(:bad_armor_header)
      'a header after the separator'    | ref(:header_after_separator)
      'a header after a body line'      | ref(:header_after_body)
      'padding before more body data'   | ref(:padded_body_line)
      'separately padded chunks'        | ref(:padded_chunks)
      'a mid-body line starting with =' | ref(:mid_body_equals)
      'a mid-body checksum line'        | ref(:mid_body_crc)
      'CR-only line endings'            | ref(:cr_only)
      'body text on the BEGIN line'     | ref(:body_on_begin)
      'only a BEGIN marker'             | ref(:begin_only)
      'mismatched BEGIN and END labels' | ref(:mismatched_label)
      'overlapping armor markers'       | ref(:overlapping_markers)
    end

    with_them do
      it 'rejects the given formatting #security', :aggregate_failures do
        expect(Gitlab::AppJsonLogger).to receive(:info).once.with(hash_including(rejection_reason: 'invalid_armor'))

        expect(decoded).to be_nil
      end
    end
  end

  shared_examples 'bounded armor input' do |limit_constant, input_type|
    let(:input) { fixture_armor }
    let(:size_limit) { input.bytesize }

    before do
      stub_const("#{described_class}::#{limit_constant}", size_limit)
    end

    it 'accepts input at the size limit #security' do
      expect(decoded).to eq(fixture_binary(fixture_armor))
    end

    context 'when the input exceeds the size limit' do
      let(:size_limit) { input.bytesize - 1 }

      it 'rejects the input and logs the reason #security', :aggregate_failures do
        expect(Gitlab::AppJsonLogger).to receive(:info).once.with(
          input_type: input_type, rejection_reason: 'oversized_input',
          Labkit::Fields::CLASS_NAME => described_class.name, Labkit::Fields::LOG_MESSAGE => 'Rejected OpenPGP input'
        )

        expect(decoded).to be_nil
      end
    end
  end

  describe '.dearmor_signature' do
    subject(:decoded) { described_class.dearmor_signature(input) }

    let(:fixture_armor) { GpgHelpers::User1.signed_commit_signature }

    it_behaves_like 'armor with UTF-8 headers'
    it_behaves_like 'armor with empty header values'
    it_behaves_like 'armor with trailing whitespace'
    it_behaves_like 'compatible armor formatting'
    it_behaves_like 'invalid armor formatting'
    it_behaves_like 'bounded armor input', 'MAX_SIGNATURE_SIZE', 'signature'

    context 'with existing signatures' do
      where(:fixture, :method) do
        GpgHelpers::User1                  | :signed_commit_signature
        GpgHelpers::User3                  | :signed_commit_signature
        GpgHelpers::UserWithRevokedUid      | :signed_commit_signature
        GpgHelpers::UserWithRevokedUid      | :subkey_signed_commit_signature
        GpgHelpers::UserWithOnlyRevokedUid  | :signed_commit_signature
      end

      with_them do
        let(:input) { fixture.public_send(method) }

        it 'returns the decoded binary', :aggregate_failures do
          expect(input).to match(%r{^=[A-Za-z0-9+/]{4}$})
          expect(decoded).to eq(fixture_binary(input))
          expect(decoded.encoding).to eq(Encoding::BINARY)
        end
      end
    end

    context 'with bounded status fields #security' do
      where(type: [20, 24, 26, 28], area: [:hashed, :unhashed], critical: [0, 128], size: [128, 129])

      with_them do
        let(:binary) { packet(2, signature(**{ area => subpacket(type + critical, size) })) }
        let(:input) { armor(binary) }

        it 'accepts only fields within the supported limit #security' do
          expect(decoded).to eq(size == 128 ? binary : nil)
        end
      end
    end

    context 'with supported encodings' do
      where(:body, :length) do
        ref(:v4_signature) | [13].pack('C')
        ref(:v4_signature) | [192, 0].pack('CC')
        ref(:v4_signature) | [255, 13].pack('CN')
        ref(:v3_signature) | [1].pack('C')
      end

      let(:v4_signature) { signature }
      let(:v3_signature) { "\x03".b }

      with_them do
        let(:binary) do
          packet(2, body.ljust(length == [192, 0].pack('CC') ? 192 : body.bytesize, "\x00"), length: length)
        end

        let(:input) { armor(binary).gsub("\n", "\r\n") }

        it 'accepts CRLF armor without a checksum' do
          expect(decoded).to eq(binary)
        end
      end
    end

    context 'with old packet headers' do
      where(:length_type, :length) do
        0 | [13].pack('C')
        1 | [13].pack('n')
        2 | [13].pack('N')
      end

      with_them do
        let(:binary) { [0x88 + length_type].pack('C') + length + signature }
        let(:input) { " \t\n#{armor(binary)}\t\n" }

        it 'accepts definite lengths and whitespace outside the armor' do
          expect(decoded).to eq(binary)
        end
      end
    end

    context 'with alternate subpacket lengths' do
      where(:type, :size, :length, :accepted) do
        28 | 128  | [192, 0].pack('CC')    | false
        28 | 128  | [255, 129].pack('CN')  | true
        28 | 129  | [255, 130].pack('CN')  | false
        21 | 191  | [192, 0].pack('CC')    | true
        21 | 8382 | [223, 255].pack('CC')  | true
        21 | 8383 | [224, 0].pack('CC')    | true
      end

      with_them do
        let(:binary) { packet(2, signature(hashed: subpacket(type, size, length: length))) }
        let(:input) { armor(binary) }

        it 'validates the area and masks only the subpacket type #security' do
          expect(decoded).to eq(accepted ? binary : nil)
        end
      end
    end

    context 'with malformed or unsupported input' do
      let(:literal) { armor(packet(11, 'filename')) }
      let(:compressed) { armor(packet(8, 'compressed')) }
      let(:trailing) { armor("#{packet(2, signature)}\x00") }
      let(:partial) { armor("\xC2\xE0\x04".b) }
      let(:indeterminate) { armor("\x8B".b + signature) }
      let(:overflow) { armor(packet(2, signature(hashed: "\x04\x1Cxx".b))) }
      let(:zero_subpacket) { armor(packet(2, signature(unhashed: "\x00".b))) }
      let(:v5) { armor(packet(2, signature(version: 5))) }
      let(:binary) { packet(2, signature) }
      let(:truncated_length) { armor("\xC2\xFF\x00".b) }
      let(:truncated_packet) { armor(packet(2, signature).chop) }
      let(:truncated_signature) { armor(packet(2, "\x04\x00\x01\x08\x00".b)) }
      let(:bad_header) { armor("\x02\x00".b) }
      let(:invalid_encoding) { (+"\xFF").force_encoding(Encoding::UTF_8) }

      where(:input) do
        [
          ref(:literal), ref(:compressed), ref(:trailing),
          ref(:partial), ref(:indeterminate), ref(:overflow), ref(:zero_subpacket), ref(:v5),
          ref(:binary), ref(:truncated_length), ref(:truncated_packet),
          ref(:truncated_signature), ref(:bad_header), ref(:invalid_encoding), nil, '', 123
        ]
      end

      with_them do
        it 'rejects the input without raising #security' do
          expect(decoded).to be_nil
        end
      end
    end
  end

  describe '.dearmor_key' do
    subject(:decoded) { described_class.dearmor_key(input) }

    let(:fixture_armor) { GpgHelpers::User1.public_key }

    it_behaves_like 'armor with UTF-8 headers'
    it_behaves_like 'armor with empty header values'
    it_behaves_like 'armor with trailing whitespace'
    it_behaves_like 'compatible armor formatting'
    it_behaves_like 'invalid armor formatting'
    it_behaves_like 'bounded armor input', 'MAX_KEY_SIZE', 'key'

    context 'with existing public keys' do
      where(:fixture, :method) do
        GpgHelpers::User1                 | :public_key
        GpgHelpers::User1                 | :public_key2
        GpgHelpers::User1                 | :public_key_with_extra_signing_key
        GpgHelpers::User2                 | :public_key
        GpgHelpers::User3                 | :public_key
        GpgHelpers::User4                 | :public_key
        GpgHelpers::UserWithRevokedUid     | :public_key
        GpgHelpers::UserWithOnlyRevokedUid | :public_key
      end

      with_them do
        let(:input) { fixture.public_send(method) }

        it 'accepts the key' do
          expect(decoded).to be_a(String)
        end
      end
    end

    context 'with supported key packets' do
      let(:binary) { [2, 6, 10, 12, 13, 14, 17].map { |tag| packet(tag, 'x') }.join }
      let(:input) { armor(binary, label: 'PUBLIC KEY BLOCK') }

      it 'does not parse signature subpackets within keys' do
        expect(decoded).to eq(binary)
      end
    end

    context 'with user IDs' do
      where(:size, :accepted) do
        described_class::MAX_USER_ID_SIZE         | true
        (described_class::MAX_USER_ID_SIZE + 1)   | false
      end

      with_them do
        let(:binary) { packet(6, 'key') + packet(13, 'x' * size) }
        let(:input) { armor(binary, label: 'PUBLIC KEY BLOCK') }

        it 'bounds user IDs before importing #security' do
          expect(decoded).to eq(accepted ? binary : nil)
        end
      end

      context 'when a maximum-size user ID is all colons, which GnuPG escapes 4x in --with-colons output' do
        let(:binary) { packet(6, 'key') + packet(13, ':' * described_class::MAX_USER_ID_SIZE) }
        let(:input) { armor(binary, label: 'PUBLIC KEY BLOCK') }

        it 'accepts a maximum-size user ID made of colons #security' do
          expect(decoded).to eq(binary)
        end
      end
    end

    context 'with disallowed packets' do
      where(:tag) { [5, 7, 8, 11] }

      with_them do
        let(:input) { armor(packet(tag, 'x'), label: 'PUBLIC KEY BLOCK') }

        it 'rejects secret keys, compression and literal data #security' do
          expect(decoded).to be_nil
        end
      end
    end
  end

  describe '.key_rejection_reason' do
    subject(:rejection_reason) { described_class.key_rejection_reason(input) }

    context 'with a valid key' do
      let(:input) { GpgHelpers::User1.public_key }

      it 'returns no reason and does not log a rejection', :aggregate_failures do
        expect(Gitlab::AppJsonLogger).not_to receive(:info)

        expect(rejection_reason).to be_nil
      end
    end

    context 'with a rejected key' do
      let(:invalid_packet) { armor("\xC6\xFF\x00".b, label: 'PUBLIC KEY BLOCK') }
      let(:disallowed_packet) { armor(packet(5, 'x'), label: 'PUBLIC KEY BLOCK') }
      let(:oversized_user_id) do
        armor(packet(13, 'x' * (described_class::MAX_USER_ID_SIZE + 1)), label: 'PUBLIC KEY BLOCK')
      end

      let(:oversized_input) { armor(packet(6, 'x' * 512), label: 'PUBLIC KEY BLOCK') }

      before do
        stub_const("#{described_class}::MAX_KEY_SIZE", 512)
      end

      where(:input, :reason) do
        'invalid'               | 'invalid_armor'
        ref(:invalid_packet)    | 'invalid_packet'
        ref(:disallowed_packet) | 'disallowed_packet'
        ref(:oversized_user_id) | 'oversized_user_id'
        ref(:oversized_input)   | 'oversized_input'
      end

      with_them do
        it 'returns the reason and logs it once #security', :aggregate_failures do
          expect(Gitlab::AppJsonLogger).to receive(:info).once.with(
            input_type: 'key', rejection_reason: reason,
            Labkit::Fields::CLASS_NAME => described_class.name, Labkit::Fields::LOG_MESSAGE => 'Rejected OpenPGP input'
          )

          expect(rejection_reason).to eq(reason)
        end
      end
    end
  end

  context 'when rejecting input' do
    let(:invalid_packet) { armor("\xC2\xFF\x00".b) }
    let(:unsupported_version) { armor(packet(2, signature(version: 5))) }
    let(:disallowed_packet) { armor(packet(11, 'sensitive input')) }
    let(:oversized_subpacket) { armor(packet(2, signature(unhashed: subpacket(28, 129)))) }
    let(:oversized_user_id) do
      armor(packet(13, 'x' * (described_class::MAX_USER_ID_SIZE + 1)), label: 'PUBLIC KEY BLOCK')
    end

    where(:input_type, :input, :reason) do
      'signature' | 'sensitive input'         | 'invalid_armor'
      'key'       | 'sensitive input'         | 'invalid_armor'
      'signature' | ref(:invalid_packet)      | 'invalid_packet'
      'signature' | ref(:unsupported_version) | 'unsupported_version'
      'signature' | ref(:disallowed_packet)   | 'disallowed_packet'
      'signature' | ref(:oversized_subpacket) | 'oversized_subpacket'
      'key'       | ref(:oversized_user_id)   | 'oversized_user_id'
    end

    with_them do
      it 'logs one structured message without input content #security' do
        expect(Gitlab::AppJsonLogger).to receive(:info).once.with(
          input_type: input_type, rejection_reason: reason,
          Labkit::Fields::CLASS_NAME => described_class.name, Labkit::Fields::LOG_MESSAGE => 'Rejected OpenPGP input'
        )

        described_class.public_send(:"dearmor_#{input_type}", input)
      end
    end
  end
end
