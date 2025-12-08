import { describe, test, expect } from 'vitest';
import {
  EncryptPayloadService,
  DETERMINISTIC_ENC_SECRET,
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
  EncodeRequestInput,
  FramingMode,
} from '../../../../src';
import { decryptBlob2, LengthPrefixedStrategy, Unpacker } from '../../../../src/lib/decrypt/shared';

describe('EncryptPayloadService (integration)', () => {
  test('kv-stream build can be auto-unpacked by Unpacker', () => {
    const svc = new EncryptPayloadService();
    const blob1: EncodeRequestInput['blob1'] = {
      prefix_hex: 'bb66',
      udid_raw_hex: '11'.repeat(16),
      session_id_hex: '22'.repeat(16),
      response_key_hex: '55'.repeat(32),
      auth_key_hex: '44'.repeat(48),
      framing: FramingMode.KvStream,
    };
    const payload = { a: 1, b: 'z' };
    const { requestB64 } = svc.buildFromParts({ blob1, payload, DETERMINISTIC_ENC_SECRET });
    const raw = Buffer.from(requestB64, 'base64');
    const [b1, b2] = parseRequest(raw);
    const h = parseHeaderBlob1(b1);
    const iv = deriveIvFromUdidString(udidRawToCanonicalString(h.udid_raw));
    const { plaintext } = decryptBlob2(b2, iv);

    // should not parse as length-prefixed
    const lp = new LengthPrefixedStrategy();
    expect(() => lp.execute(plaintext)).toThrow();

    // but Unpacker should reconstruct the object
    const unpacker = new Unpacker();
    const obj = unpacker.execute(plaintext) as any;
    expect(obj).toEqual(payload);
  });
});
