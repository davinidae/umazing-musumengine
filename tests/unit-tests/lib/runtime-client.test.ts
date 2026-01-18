import { describe, test, expect } from 'vitest';
import { createHash } from 'crypto';
import {
  RuntimeClient,
  DETERMINISTIC_ENC_SECRET,
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
  decryptBlob2,
  LengthPrefixedStrategy,
  FramingMode,
  DecryptRequestService,
} from '../../../src';

describe('RuntimeClient (unit)', () => {
  const client = new RuntimeClient({ DETERMINISTIC_ENC_SECRET });

  test('encodeRequest produces valid requestB64 and roundtrips', () => {
    const blob1 = {
      viewer_id: 123456789,
      prefix: 'cc77',
      udid: '00'.repeat(16),
      session_id: '11'.repeat(16),
      response_key: '22'.repeat(32),
      auth_key: '33'.repeat(48),
      prefix_b64: 'aabbccdd',
      session_id_b64: '11'.repeat(16),
      response_key_b64: '22'.repeat(32),
      auth_key_b64: '33'.repeat(48),
    };
    const blob2 = { ok: true, n: 9 };
    const { requestB64 } = client.encodeRequest({ blob1, blob2 });
    const raw = Buffer.from(requestB64, 'base64');
    const [b1, b2] = parseRequest(raw);
    const h = parseHeaderBlob1(b1);
    const iv = deriveIvFromUdidString(udidRawToCanonicalString(h.udid_raw));
    const { plaintext } = decryptBlob2(b2, iv);
    const lp = new LengthPrefixedStrategy();
    const obj = lp.execute(plaintext) as any;
    expect(obj).toEqual(blob2);
  });

  test('decodeResponse returns payload via unpacker', () => {
    const blob1 = {
      viewer_id: 123456789,
      prefix: 'dd88',
      udid: '00'.repeat(16),
      session_id: '11'.repeat(16),
      response_key: '22'.repeat(32),
      auth_key: '33'.repeat(48),
      prefix_b64: 'aabbccdd',
      session_id_b64: '11'.repeat(16),
      response_key_b64: '22'.repeat(32),
      auth_key_b64: '33'.repeat(48),
    };
    const blob2 = { a: 1, b: 'z' };
    const { requestB64 } = client.encodeRequest({ blob1, blob2 });
    const raw = Buffer.from(requestB64, 'base64');
    const [, b2] = parseRequest(raw);
    const responseB64 = Buffer.from(b2).toString('base64');
    const { blob2: out } = client.decodeResponse({ requestB64, responseB64 });
    expect(out).toEqual(blob2);
  });

  test('decodeResponse throws on missing inputs', () => {
    expect(() => client.decodeResponse({ requestB64: '', responseB64: '' } as any)).toThrow(
      /required/i,
    );
    expect(() => client.decodeResponse({ requestB64: 'x', responseB64: '' } as any)).toThrow(
      /required/i,
    );
    expect(() => client.decodeResponse({ requestB64: '', responseB64: 'x' } as any)).toThrow(
      /required/i,
    );
  });

  test('encodeRequest uses injected deterministic secret (encryption_key matches SHA-256(secret))', () => {
    const secret = 'unit-test-secret';
    const injected = new RuntimeClient({ DETERMINISTIC_ENC_SECRET: secret });

    const blob1 = {
      viewer_id: 1,
      prefix: 'aa55',
      udid: '00'.repeat(16),
      session_id: '11'.repeat(16),
      response_key: '22'.repeat(32),
      auth_key: '33'.repeat(48),
      prefix_b64: 'aabbccdd',
      session_id_b64: '11'.repeat(16),
      response_key_b64: '22'.repeat(32),
      auth_key_b64: '33'.repeat(48),
    };
    const blob2 = { ok: true };

    const { requestB64 } = injected.encodeRequest({ blob1, blob2 });
    const decoded = new DecryptRequestService().decodeFromBase64(requestB64);
    const expectedKeyHex = createHash('sha256').update(secret, 'utf8').digest('hex');
    expect((decoded.blob1 as any).encryption_key).toBe(expectedKeyHex);
  });

  test('encodeRequest supports kv-stream framing; decodeResponse does not roundtrip it', () => {
    const blob1 = {
      viewer_id: 123456789,
      prefix: 'ee99',
      udid: '00'.repeat(16),
      session_id: '11'.repeat(16),
      response_key: '22'.repeat(32),
      auth_key: '33'.repeat(48),
      prefix_b64: 'aabbccdd',
      session_id_b64: '11'.repeat(16),
      response_key_b64: '22'.repeat(32),
      auth_key_b64: '33'.repeat(48),
    };
    const blob2 = { a: 1, b: 'z', c: true };
    const { requestB64 } = client.encodeRequest({ blob1, blob2, framing: FramingMode.KvStream });
    const raw = Buffer.from(requestB64, 'base64');
    const [, b2] = parseRequest(raw);
    const responseB64 = Buffer.from(b2).toString('base64');
    expect(() => client.decodeResponse({ requestB64, responseB64 })).toThrow();
  });

  test('decodeResponse throws when response blob2 is too short', () => {
    const blob1 = {
      viewer_id: 123,
      prefix: 'ff00',
      udid: '00'.repeat(16),
      session_id: '11'.repeat(16),
      response_key: '22'.repeat(32),
      auth_key: '33'.repeat(48),
      prefix_b64: 'aabbccdd',
      session_id_b64: '11'.repeat(16),
      response_key_b64: '22'.repeat(32),
      auth_key_b64: '33'.repeat(48),
    };
    const blob2 = { a: 1 };
    const { requestB64 } = client.encodeRequest({ blob1, blob2 });

    // decryptBlob2 requires at least 32 bytes (key). Provide less.
    const responseB64 = Buffer.from('abcd', 'utf8').toString('base64');
    expect(() => client.decodeResponse({ requestB64, responseB64 })).toThrow(/blob2 too short/i);
  });
});
