import { createHash } from 'crypto';
import { describe, test, expect } from 'vitest';
import {
  EncryptPayloadService,
  DETERMINISTIC_ENC_SECRET,
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
  FramingMode,
  decryptBlob2,
  LengthPrefixedStrategy,
} from '../../../../src';

describe('EncryptPayloadService (unit)', () => {
  const svc = new EncryptPayloadService();

  test('buildFromParts length-prefixed encodes and can be decoded back', () => {
    const blob1 = {
      viewer_id: 123456789,
      prefix: 'aabb',
      udid: '00'.repeat(16),
      session_id: '11'.repeat(16),
      response_key: '22'.repeat(32),
      auth_key: '33'.repeat(48),
      prefix_b64: 'aabbccdd',
      session_id_b64: '11'.repeat(16),
      response_key_b64: '22'.repeat(32),
      auth_key_b64: '33'.repeat(48),
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

  test('length-prefixed supports udid_raw (no udid)', () => {
    const blob1 = {
      viewer_id: 123456789,
      prefix: 'aabb',
      udid_raw: '00112233-4455-6677-8899-aabbccddeeff',
      session_id: '11'.repeat(16),
      response_key: '22'.repeat(32),
      auth_key: null,
      prefix_b64: 'aabbccdd',
      session_id_b64: '11'.repeat(16),
      response_key_b64: '22'.repeat(32),
      auth_key_b64: '33'.repeat(48),
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
          prefix: 'aa55',
          session_id: '11'.repeat(16),
          response_key: '22'.repeat(32),
          auth_key: '33'.repeat(48),
        } as any,
        blob2: { x: 1 },
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/(Missing UDID|UDID is required)/);
  });

  test('throws when session_id is not 16B', () => {
    expect(() =>
      svc.build({
        blob1: {
          viewer_id: 123456789,
          prefix: 'aa55',
          udid: '00'.repeat(16),
          session_id: '11'.repeat(15), // 15B
          response_key: '22'.repeat(32),
          auth_key: '33'.repeat(48),
        },
        blob2: { x: 1 },
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/session_id must be (16B|16 bytes)/);
  });

  test('throws when response_key is not 32B', () => {
    expect(() =>
      svc.build({
        blob1: {
          viewer_id: 123456789,
          prefix: 'aa55',
          udid: '00'.repeat(16),
          session_id: '11'.repeat(16),
          response_key: '22'.repeat(31),
          auth_key: '33'.repeat(48),
        },
        blob2: { x: 1 },
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/response_key must be (32B|32 bytes)/);
  });

  test('throws when auth_key is not 48B', () => {
    expect(() =>
      svc.build({
        blob1: {
          viewer_id: 123456789,
          prefix: 'aa55',
          udid: '00'.repeat(16),
          session_id: '11'.repeat(16),
          response_key: '22'.repeat(32),
          auth_key: '33'.repeat(47),
        },
        blob2: { x: 1 },
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/auth_key must be (48B|48 bytes)/);
  });

  test('throws when response_key is missing', () => {
    expect(() =>
      svc.build({
        blob1: {
          viewer_id: 123456789,
          prefix: 'aa55',
          udid: '00'.repeat(16),
          session_id: '11'.repeat(16),
          // response_key missing
          auth_key: '33'.repeat(48),
        } as any,
        blob2: { x: 1 },
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/response_key/);
  });

  test('throws when udid is wrong length', () => {
    expect(() =>
      svc.build({
        blob1: {
          viewer_id: 123456789,
          prefix: 'aa55',
          udid: '00'.repeat(15), // 15B
          session_id: '11'.repeat(16),
          response_key: '22'.repeat(32),
          auth_key: '33'.repeat(48),
        },
        blob2: { x: 1 },
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/udid/);
  });

  test('throws when udid_raw is wrong length', () => {
    expect(() =>
      svc.build({
        blob1: {
          viewer_id: 123456789,
          prefix: 'aa55',
          udid_raw: '00112233-4455-6677',
          session_id: '11'.repeat(16),
          response_key: '22'.repeat(32),
          auth_key: '33'.repeat(48),
        } as any,
        blob2: { x: 1 },
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/udid_raw/);
  });

  test('allows missing auth_key (pre-auth flows)', () => {
    const blob1 = {
      viewer_id: 123456789,
      prefix: 'aabb',
      udid: '00'.repeat(16),
      session_id: '11'.repeat(16),
      response_key: '22'.repeat(32),
      auth_key: null,
      prefix_b64: 'aabbccdd',
      session_id_b64: '11'.repeat(16),
      response_key_b64: '22'.repeat(32),
      auth_key_b64: '33'.repeat(48),
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

  test('length-prefixed appends AES key = sha256(secret) to blob2', () => {
    const blob1 = {
      viewer_id: 123456789,
      prefix: 'aabb',
      udid: '00'.repeat(16),
      session_id: '11'.repeat(16),
      response_key: '22'.repeat(32),
      auth_key: null,
      prefix_b64: 'aabbccdd',
      session_id_b64: '11'.repeat(16),
      response_key_b64: '22'.repeat(32),
      auth_key_b64: '33'.repeat(48),
    };
    const { requestB64 } = svc.build({
      blob1,
      blob2: { x: 1 },
      DETERMINISTIC_ENC_SECRET,
    });

    const raw = Buffer.from(requestB64, 'base64');
    const [, blob2] = parseRequest(raw);
    const appendedKey = blob2.subarray(blob2.length - 32);
    const expectedKey = createHash('sha256').update(DETERMINISTIC_ENC_SECRET, 'utf8').digest();
    expect(appendedKey.toString('hex')).toEqual(expectedKey.toString('hex'));
  });

  test('kv-stream requires object payload', () => {
    expect(() =>
      svc.build({
        blob1: {
          viewer_id: 123456789,
          prefix: 'aa55',
          udid: '00'.repeat(16),
          session_id: '11'.repeat(16),
          response_key: '22'.repeat(32),
          auth_key: '33'.repeat(48),
        },
        framing: FramingMode.KvStream,
        blob2: [1, 2, 3],
        DETERMINISTIC_ENC_SECRET,
      }),
    ).toThrow(/kv-stream/);
  });

  test('kv-stream derives response_key and appends auth key based on udidString', () => {
    const udidRawHex = '00'.repeat(16);
    const udidString = udidRawToCanonicalString(Buffer.from(udidRawHex, 'hex'));

    const blob1 = {
      viewer_id: 123456789,
      prefix: 'aa55',
      udid: udidRawHex,
      session_id: '11'.repeat(16),
      // required (even though kv-stream derives its own response key)
      response_key: '22'.repeat(32),
      auth_key: null,
      prefix_b64: 'aabbccdd',
      session_id_b64: '11'.repeat(16),
      response_key_b64: '22'.repeat(32),
      auth_key_b64: '33'.repeat(48),
    };

    const { requestB64 } = svc.build({
      blob1,
      framing: FramingMode.KvStream,
      blob2: { a: 1, b: 'x' },
      DETERMINISTIC_ENC_SECRET,
    });

    const raw = Buffer.from(requestB64, 'base64');
    const [b1, b2] = parseRequest(raw);
    const h = parseHeaderBlob1(b1);

    const expectedResponseKey = createHash('sha256')
      .update('resp:' + udidString, 'utf8')
      .digest();
    const expectedAuthKey = createHash('sha256')
      .update('auth:' + udidString, 'utf8')
      .digest();
    expect(h.response_key.toString('hex')).toEqual(expectedResponseKey.toString('hex'));
    expect(b2.subarray(b2.length - 32).toString('hex')).toEqual(expectedAuthKey.toString('hex'));
  });
});
