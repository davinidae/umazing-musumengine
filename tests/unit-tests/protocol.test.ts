import { describe, test, expect } from 'vitest';
import { deriveIvFromUdidString, udidRawToCanonicalString } from '../../src/common/protocol';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { readBase64File, parseRequest, parseHeaderBlob1 } from '../../src/common/protocol';

describe('protocol helpers', () => {
  test('deriveIvFromUdidString uses first 16 hex chars (ascii)', () => {
    const udid = 'a4629d3a-0f39-44dd-b2e0-46e15c5f002d';
    const iv = deriveIvFromUdidString(udid);
    expect(iv.toString('utf-8')).toBe('a4629d3a0f3944dd');
    expect(iv).toHaveLength(16);
  });

  test('udidRawToCanonicalString formats hyphens', () => {
    const raw = Buffer.from('a4629d3a0f3944ddb2e046e15c5f002d', 'hex');
    const s = udidRawToCanonicalString(raw);
    expect(s).toBe('a4629d3a-0f39-44dd-b2e0-46e15c5f002d');
  });

  test('readBase64File handles whitespace and missing padding', () => {
    const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'umazing-'));
    const f = path.join(tmp, 'b64.txt');
    // 'Hello' base64 without padding is 'SGVsbG8'
    fs.writeFileSync(f, ' S GV s\n\n bG8  ');
    const buf = readBase64File(f);
    expect(buf.toString('utf-8')).toBe('Hello');
  });

  test('parseRequest splits header and blob2 with key', () => {
    const blob1 = Buffer.from('aabbcc', 'hex');
    const cipher = Buffer.from('1122', 'hex');
    const key = Buffer.alloc(32, 0xab);
    const raw = Buffer.concat([Buffer.alloc(4), blob1, cipher, key]);
    raw.writeUInt32LE(blob1.length, 0);
    const [b1, b2] = parseRequest(raw);
    expect(b1.equals(blob1)).toBe(true);
    expect(b2.length).toBe(cipher.length + key.length);
  });

  test('parseHeaderBlob1 slices last 112 bytes correctly', () => {
    const prefix = Buffer.from('00'.repeat(5), 'hex');
    const session = Buffer.alloc(16, 0x01);
    const udidRaw = Buffer.alloc(16, 0x02);
    const respKey = Buffer.alloc(32, 0x03);
    const authKey = Buffer.alloc(48, 0x04);
    const blob1 = Buffer.concat([prefix, session, udidRaw, respKey, authKey]);
    const h = parseHeaderBlob1(blob1);
    expect(h.prefix.equals(prefix)).toBe(true);
    expect(h.session_id.equals(session)).toBe(true);
    expect(h.udid_raw.equals(udidRaw)).toBe(true);
    expect(h.response_key.equals(respKey)).toBe(true);
    expect(h.auth_key.equals(authKey)).toBe(true);
  });

  test('UDID canonicalization and IV derivation', () => {
    const raw = Buffer.from('a4629d3a0f3944ddb2e046e15c5f002d', 'hex');
    const s = udidRawToCanonicalString(raw);
    expect(s).toBe('a4629d3a-0f39-44dd-b2e0-46e15c5f002d');
    const iv = deriveIvFromUdidString(s);
    expect(iv.toString('utf-8')).toBe('a4629d3a0f3944dd');
  });

  test('parseRequest throws when blob2 too short', () => {
    const raw = Buffer.concat([Buffer.from([0, 0, 0, 0])]);
    expect(() => parseRequest(raw)).toThrow();
  });

  test('parseRequest allows minimal blob2 (exact 32B key, no ciphertext)', () => {
    const blob1 = Buffer.from('aabbcc', 'hex');
    const keyOnly = Buffer.alloc(32, 0xcd);
    const raw = Buffer.concat([Buffer.alloc(4), blob1, keyOnly]);
    raw.writeUInt32LE(blob1.length, 0);
    const [b1, b2] = parseRequest(raw);
    expect(b1.equals(blob1)).toBe(true);
    expect(b2.length).toBe(32);
  });

  test('parseRequest throws on header length mismatch', () => {
    const blob1 = Buffer.from('aabbcc', 'hex');
    // header claims 3 bytes, but only provide 2 after prefix
    const raw = Buffer.concat([Buffer.alloc(4), blob1.subarray(0, 2)]);
    raw.writeUInt32LE(blob1.length, 0);
    expect(() => parseRequest(raw)).toThrow();
  });

  test('parseHeaderBlob1 throws when blob1 too short', () => {
    const tooShort = Buffer.alloc(111, 0); // must be >= 112
    expect(() => parseHeaderBlob1(tooShort)).toThrow();
  });

  test('deriveIvFromUdidString throws on short UDID', () => {
    expect(() => deriveIvFromUdidString('abcd')).toThrow();
  });
});
