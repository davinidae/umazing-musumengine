import { describe, test, expect } from 'vitest';
import { createDecipheriv, createHash } from 'crypto';
import {
  EncryptPayloadService,
  DETERMINISTIC_ENC_SECRET,
  parseRequest,
  deriveIvFromUdidString,
  EncodeRequestInput,
  FramingMode,
  LengthPrefixedStrategy,
  Unpacker,
} from '../../../../src';

describe('EncryptPayloadService (integration)', () => {
  test('kv-stream build can be auto-unpacked by Unpacker', () => {
    const svc = new EncryptPayloadService();
    const blob1: EncodeRequestInput['blob1'] = {
      viewer_id: 123456789,
      prefix_hex: 'bb66',
      udid_raw_hex: '11'.repeat(16),
      session_id_hex: '22'.repeat(16),
      response_key_hex: '55'.repeat(32),
      auth_key_hex: '44'.repeat(48),
    };
    const blob2 = { a: 1, b: 'z' };
    const { requestB64 } = svc.build({
      blob1,
      blob2,
      DETERMINISTIC_ENC_SECRET,
      framing: FramingMode.KvStream,
    });
    const raw = Buffer.from(requestB64, 'base64');
    const [_b1, b2] = parseRequest(raw);

    // kv-stream framing does not use the fixed 112-byte blob1 layout, so don't parse it with parseHeaderBlob1.
    // It also doesn't append the AES key to blob2; instead it appends a 32B auth digest.
    // Decrypt using the deterministic key derivation used by EncryptPayloadService.
    const udidNoHyphens = (blob1.udid_raw_hex ?? '').toLowerCase();
    expect(udidNoHyphens.length).toBe(32);
    const iv = deriveIvFromUdidString(
      `${udidNoHyphens.slice(0, 8)}-${udidNoHyphens.slice(8, 12)}-${udidNoHyphens.slice(
        12,
        16,
      )}-${udidNoHyphens.slice(16, 20)}-${udidNoHyphens.slice(20, 32)}`,
    );

    expect(b2.length).toBeGreaterThan(32);
    const ciphertext = b2.subarray(0, b2.length - 32);
    const key = createHash('sha256').update(DETERMINISTIC_ENC_SECRET, 'utf8').digest();
    const decipher = createDecipheriv('aes-256-cbc', key, iv);
    decipher.setAutoPadding(true);
    const plaintext = Buffer.concat([decipher.update(ciphertext), decipher.final()]);

    // should not parse as length-prefixed
    const lp = new LengthPrefixedStrategy();
    expect(() => lp.execute(plaintext)).toThrow();

    // but Unpacker should reconstruct the object
    const unpacker = new Unpacker();
    const obj = unpacker.execute(plaintext) as any;
    expect(obj).toEqual(blob2);
  });
});
