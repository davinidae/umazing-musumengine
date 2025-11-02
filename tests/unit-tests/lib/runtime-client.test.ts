import { describe, test, expect } from 'vitest';
import {
  RuntimeClient,
  DETERMINISTIC_ENC_SECRET,
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
} from '../../../src';
import { decryptBlob2, LengthPrefixedStrategy } from '../../../src/lib/decrypt/shared';

describe('RuntimeClient (unit)', () => {
  const client = new RuntimeClient({ DETERMINISTIC_ENC_SECRET });

  test('encodeRequest produces valid requestB64 and roundtrips', () => {
    const blob1 = {
      prefix_hex: 'cc77',
      udid_raw_hex: '00'.repeat(16),
      session_id_hex: '11'.repeat(16),
      response_key_hex: '22'.repeat(32),
      auth_key_hex: '33'.repeat(48),
    };
    const payload = { ok: true, n: 9 };
    const { requestB64 } = client.encodeRequest({ blob1, payload });
    const raw = Buffer.from(requestB64, 'base64');
    const [b1, b2] = parseRequest(raw);
    const h = parseHeaderBlob1(b1);
    const iv = deriveIvFromUdidString(udidRawToCanonicalString(h.udid_raw));
    const { plaintext } = decryptBlob2(b2, iv);
    const lp = new LengthPrefixedStrategy();
    const obj = lp.execute(plaintext) as any;
    expect(obj).toEqual(payload);
  });

  test('decodeResponse returns payload via unpacker', () => {
    const blob1 = {
      prefix_hex: 'dd88',
      udid_raw_hex: '00'.repeat(16),
      session_id_hex: '11'.repeat(16),
      response_key_hex: '22'.repeat(32),
      auth_key_hex: '33'.repeat(48),
    };
    const payload = { a: 1, b: 'z' };
    const { requestB64 } = client.encodeRequest({ blob1, payload });
    const raw = Buffer.from(requestB64, 'base64');
    const [, b2] = parseRequest(raw);
    const responseB64 = Buffer.from(b2).toString('base64');
    const { payload: out } = client.decodeResponse({ requestB64, responseB64 });
    expect(out).toEqual(payload);
  });

  test('decodeResponse throws on missing inputs', () => {
    expect(() => client.decodeResponse({ requestB64: '', responseB64: '' } as any)).toThrow();
  });
});
