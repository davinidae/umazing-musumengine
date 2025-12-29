import { createCipheriv } from 'crypto';
import { describe, test, expect } from 'vitest';
import {
  AuthKey,
  buildBlob1Buffer,
  decompressResponse,
  parseParsedRequest,
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
  Udid,
  buildLengthPrefixedPayload,
} from '../../../../src';

export function buildRequest(prefixHex: string): Buffer {
  const prefix = Buffer.from(prefixHex, 'hex');
  const session = Buffer.from('11'.repeat(16), 'hex');
  const udid = Buffer.from('22'.repeat(16), 'hex');
  const respKey = Buffer.from('33'.repeat(32), 'hex');
  const auth = Buffer.from('44'.repeat(48), 'hex');
  const blob1 = Buffer.concat([prefix, session, udid, respKey, auth]);
  const key = Buffer.from('55'.repeat(32), 'hex');
  const blob2 = Buffer.concat([Buffer.alloc(0), key]);
  const raw = Buffer.concat([Buffer.alloc(4), blob1, blob2]);
  raw.writeUInt32LE(blob1.length, 0);
  return raw;
}

export function buildRequestWithoutAuth(prefixHex: string): Buffer {
  const prefix = Buffer.from(prefixHex, 'hex');
  const session = Buffer.from('11'.repeat(16), 'hex');
  const udid = Buffer.from('22'.repeat(16), 'hex');
  const respKey = Buffer.from('33'.repeat(32), 'hex');
  const blob1 = Buffer.concat([prefix, session, udid, respKey]);
  const key = Buffer.from('55'.repeat(32), 'hex');
  const blob2 = Buffer.concat([Buffer.alloc(0), key]);
  const raw = Buffer.concat([Buffer.alloc(4), blob1, blob2]);
  raw.writeUInt32LE(blob1.length, 0);
  return raw;
}

describe('protocol.util', () => {
  test('parseRequest splits header and blob2; parseHeaderBlob1 slices fields', () => {
    const raw = buildRequest('aabb');
    const [blob1, blob2] = parseRequest(raw);
    const h = parseHeaderBlob1(blob1);
    expect(h.session_id.length).toEqual(16);
    expect(h.udid_raw.length).toEqual(16);
    expect(h.response_key.length).toEqual(32);
    expect(h.auth_key.length).toEqual(48);
    expect(blob2.length).toEqual(32); // only key appended
  });

  test('parseHeaderBlob1 supports missing auth_key (0B)', () => {
    const raw = buildRequestWithoutAuth('aabb');
    const [blob1] = parseRequest(raw);
    const h = parseHeaderBlob1(blob1);
    expect(h.session_id.length).toEqual(16);
    expect(h.udid_raw.length).toEqual(16);
    expect(h.response_key.length).toEqual(32);
    expect(h.auth_key.length).toEqual(0);
  });

  test('parseHeaderBlob1 preserves the prefix bytes', () => {
    const prefixHex = 'deadbeef';
    const raw = buildRequestWithoutAuth(prefixHex);
    const [blob1] = parseRequest(raw);
    const h = parseHeaderBlob1(blob1);
    expect(h.prefix.toString('hex')).toEqual(prefixHex);
  });

  test('udidRawToCanonicalString and deriveIvFromUdidString', () => {
    const raw = Buffer.from('00112233445566778899aabbccddeeff', 'hex');
    const canon = udidRawToCanonicalString(raw);
    expect(canon).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/);
    const iv = deriveIvFromUdidString(canon);
    expect(iv.length).toEqual(16);
  });

  test('deriveIvFromUdidString throws on too-short UDID', () => {
    expect(() => deriveIvFromUdidString('abcd-ef')).toThrow();
  });

  test('parseRequest errors on short buffers', () => {
    expect(() => parseRequest(Buffer.alloc(2))).toThrow();
  });

  test('parseParsedRequest errors when blob1 length prefix exceeds available bytes', () => {
    const raw = Buffer.alloc(4);
    raw.writeUInt32LE(999, 0);
    expect(() => parseParsedRequest(raw)).toThrow(/blob1 length prefix/i);
  });

  test('parseParsedRequest errors when blob2 is too short (<32 bytes)', () => {
    const session = Buffer.from('11'.repeat(16), 'hex');
    const udid = Buffer.from('22'.repeat(16), 'hex');
    const respKey = Buffer.from('33'.repeat(32), 'hex');
    const blob1 = Buffer.concat([session, udid, respKey]); // no prefix
    const blob2TooShort = Buffer.alloc(31);
    const raw = Buffer.concat([Buffer.alloc(4), blob1, blob2TooShort]);
    raw.writeUInt32LE(blob1.length, 0);
    expect(() => parseParsedRequest(raw)).toThrow(/blob2 too short/i);
  });

  test('parseParsedRequest errors when blob1 is too short to contain mandatory fields', () => {
    const blob1TooShort = Buffer.alloc(0);
    const blob2 = Buffer.alloc(32);
    const raw = Buffer.concat([Buffer.alloc(4), blob1TooShort, blob2]);
    raw.writeUInt32LE(blob1TooShort.length, 0);
    expect(() => parseParsedRequest(raw)).toThrow(/blob1 too short/i);
  });

  test('buildBlob1Buffer validates field sizes', () => {
    expect(() =>
      buildBlob1Buffer({
        prefix: Buffer.alloc(0),
        sessionId: Buffer.alloc(15),
        udidRaw: Buffer.alloc(16),
        responseKey: Buffer.alloc(32),
      }),
    ).toThrow(/sessionId/i);

    expect(() =>
      buildBlob1Buffer({
        prefix: Buffer.alloc(0),
        sessionId: Buffer.alloc(16),
        udidRaw: Buffer.alloc(15),
        responseKey: Buffer.alloc(32),
      }),
    ).toThrow(/udidRaw/i);

    expect(() =>
      buildBlob1Buffer({
        prefix: Buffer.alloc(0),
        sessionId: Buffer.alloc(16),
        udidRaw: Buffer.alloc(16),
        responseKey: Buffer.alloc(31),
      }),
    ).toThrow(/responseKey/i);

    expect(() =>
      buildBlob1Buffer({
        prefix: Buffer.alloc(0),
        sessionId: Buffer.alloc(16),
        udidRaw: Buffer.alloc(16),
        responseKey: Buffer.alloc(32),
        authKey: Buffer.alloc(1),
      }),
    ).toThrow(/authKey/i);
  });

  test('AuthKey validates length (48 bytes)', () => {
    expect(() => new AuthKey(Uint8Array.from([]))).toThrow();
    expect(() => new AuthKey(Uint8Array.from(new Array(47).fill(0)))).toThrow();
    expect(() => new AuthKey(Uint8Array.from(new Array(49).fill(0)))).toThrow();
    expect(() => new AuthKey(Uint8Array.from(new Array(48).fill(0)))).not.toThrow();
  });

  test('Udid.rawBytes throws on non-hex characters', () => {
    const udid = new Udid('zzzzzzzz-zzzz-zzzz-zzzz-zzzzzzzzzzzz');
    expect(() => udid.rawBytes()).toThrow();
  });

  test('decompressResponse throws on too-short response bodies', () => {
    const udid = new Udid('00112233-4455-6677-8899-aabbccddeeff');
    const tooShort = Buffer.alloc(10).toString('base64');
    expect(() => decompressResponse(tooShort, udid)).toThrow(/response too short/i);
  });

  test('decompressResponse returns the extracted payload bytes', () => {
    const udid = new Udid('00112233-4455-6677-8899-aabbccddeeff');
    const key = Buffer.alloc(32, 0x11);
    const iv = Buffer.from(udid.ivRepresentation());

    const payload = Buffer.from('abc', 'utf8');
    const plaintext = buildLengthPrefixedPayload(payload);

    const cipher = createCipheriv('aes-256-cbc', key, iv);
    const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
    const responseB64 = Buffer.concat([ciphertext, key]).toString('base64');

    const extracted = Buffer.from(decompressResponse(responseB64, udid));
    expect(extracted).toEqual(payload);
  });

  test('decompressResponse throws when decrypted payload is shorter than 4 bytes', () => {
    const udid = new Udid('00112233-4455-6677-8899-aabbccddeeff');
    const key = Buffer.alloc(32, 0x11);
    const iv = Buffer.from(udid.ivRepresentation());

    const plaintext = Buffer.from([0x01, 0x02, 0x03]);
    const cipher = createCipheriv('aes-256-cbc', key, iv);
    const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
    const responseB64 = Buffer.concat([ciphertext, key]).toString('base64');

    expect(() => decompressResponse(responseB64, udid)).toThrow(/missing 4-byte length prefix/i);
  });

  test('decompressResponse throws when decrypted length prefix exceeds available bytes', () => {
    const udid = new Udid('00112233-4455-6677-8899-aabbccddeeff');
    const key = Buffer.alloc(32, 0x11);
    const iv = Buffer.from(udid.ivRepresentation());

    const bad = Buffer.concat([Buffer.from([10, 0, 0, 0]), Buffer.from([0xaa, 0xbb])]);
    const cipher = createCipheriv('aes-256-cbc', key, iv);
    const ciphertext = Buffer.concat([cipher.update(bad), cipher.final()]);
    const responseB64 = Buffer.concat([ciphertext, key]).toString('base64');

    expect(() => decompressResponse(responseB64, udid)).toThrow(/length prefix/i);
  });
});
