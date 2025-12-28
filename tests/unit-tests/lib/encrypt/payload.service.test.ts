import { describe, test, expect } from 'vitest';
import {
  EncryptPayloadService,
  DETERMINISTIC_ENC_SECRET,
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
  FramingMode,
} from '../../../../src';
import { decryptBlob2, LengthPrefixedStrategy } from '../../../../src/lib/decrypt/shared';

describe('EncryptPayloadService (unit)', () => {
  const svc = new EncryptPayloadService();

  test('buildFromParts length-prefixed encodes and can be decoded back', () => {
    const blob1 = {
      viewer_id: 123456789,
      prefix_hex: 'aabb',
      udid_raw_hex: '00'.repeat(16),
      session_id_hex: '11'.repeat(16),
      response_key_hex: '22'.repeat(32),
      auth_key_hex: '33'.repeat(48),
    };
    const blob2 = { hello: 'world', n: 7 };
    const { requestB64 } = svc.build({
      blob1,
      blob2,
      DETERMINISTIC_ENC_SECRET,
    });
    const raw = Buffer.from(requestB64, 'base64');
    const [b1, b2] = parseRequest(raw);
    const h = parseHeaderBlob1(b1);
    const udidCanon = udidRawToCanonicalString(h.udid_raw);
    const iv = deriveIvFromUdidString(udidCanon);
    const { plaintext } = decryptBlob2(b2, iv);
    const strategy = new LengthPrefixedStrategy();
    const obj = strategy.execute(plaintext) as any;
    expect(obj).toEqual(blob2);
  });

  test('throws when UDID fields are missing', () => {
    expect(() =>
      svc.build({
        blob1: {
          prefix_hex: 'aa55',
          session_id_hex: '11'.repeat(16),
          response_key_hex: '22'.repeat(32),
          auth_key_hex: '33'.repeat(48),
        } as any,
        blob2: { x: 1 },
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/Missing UDID/);
  });

  test('throws when session_id_hex is not 16B', () => {
    expect(() =>
      svc.build({
        blob1: {
          viewer_id: 123456789,
          prefix_hex: 'aa55',
          udid_raw_hex: '00'.repeat(16),
          session_id_hex: '11'.repeat(15), // 15B
          response_key_hex: '22'.repeat(32),
          auth_key_hex: '33'.repeat(48),
        },
        blob2: { x: 1 },
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/16B/);
  });

  test('throws when response_key_hex is not 32B', () => {
    expect(() =>
      svc.build({
        blob1: {
          viewer_id: 123456789,
          prefix_hex: 'aa55',
          udid_raw_hex: '00'.repeat(16),
          session_id_hex: '11'.repeat(16),
          response_key_hex: '22'.repeat(31),
          auth_key_hex: '33'.repeat(48),
        },
        blob2: { x: 1 },
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/32B/);
  });

  test('throws when auth_key_hex is not 48B', () => {
    expect(() =>
      svc.build({
        blob1: {
          viewer_id: 123456789,
          prefix_hex: 'aa55',
          udid_raw_hex: '00'.repeat(16),
          session_id_hex: '11'.repeat(16),
          response_key_hex: '22'.repeat(32),
          auth_key_hex: '33'.repeat(47),
        },
        blob2: { x: 1 },
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/48B/);
  });

  test('allows missing auth_key_hex (pre-auth flows)', () => {
    const blob1 = {
      viewer_id: 123456789,
      prefix_hex: 'aabb',
      udid_raw_hex: '00'.repeat(16),
      session_id_hex: '11'.repeat(16),
      response_key_hex: '22'.repeat(32),
      auth_key_hex: null,
    };
    const blob2 = { hello: 'world', n: 7 };
    const { requestB64 } = svc.build({
      blob1,
      blob2,
      DETERMINISTIC_ENC_SECRET,
    });
    const raw = Buffer.from(requestB64, 'base64');
    const [b1] = parseRequest(raw);
    const h = parseHeaderBlob1(b1);
    expect(h.auth_key.length).toEqual(0);
  });

  test('kv-stream requires object payload', () => {
    expect(() =>
      svc.build({
        blob1: {
          viewer_id: 123456789,
          prefix_hex: 'aa55',
          udid_raw_hex: '00'.repeat(16),
          session_id_hex: '11'.repeat(16),
          response_key_hex: '22'.repeat(32),
          auth_key_hex: '33'.repeat(48),
        },
        framing: FramingMode.KvStream,
        blob2: [1, 2, 3],
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/kv-stream/);
  });
});
