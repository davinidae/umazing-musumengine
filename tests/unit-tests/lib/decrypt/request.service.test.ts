import { describe, test, expect } from 'vitest';
import {
  EncryptPayloadService,
  DETERMINISTIC_ENC_SECRET,
  DecryptRequestService,
} from '../../../../src';

describe('DecryptRequestService (unit)', () => {
  test('decodes requestB64 and returns original payload', () => {
    const enc = new EncryptPayloadService();
    const blob1 = {
      viewer_id: 123456789,
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
    const blob2 = { v: 123, s: 'ok' };
    const { requestB64 } = enc.build({ blob1, blob2, DETERMINISTIC_ENC_SECRET });

    const reqSvc = new DecryptRequestService();
    const reqOut = reqSvc.decodeFromBase64(requestB64);
    expect(reqOut.blob2).toEqual(blob2);
  });

  test('throws when requestB64 is missing', () => {
    const reqSvc = new DecryptRequestService();
    expect(() => reqSvc.decodeFromBase64('')).toThrow(/requestB64 is required/i);
  });

  test('throws when requestB64 decodes to fewer than 4 bytes', () => {
    const reqSvc = new DecryptRequestService();
    const tooShort = Buffer.alloc(2).toString('base64');
    expect(() => reqSvc.decodeFromBase64(tooShort)).toThrow(/missing 4-byte blob1 length prefix/i);
  });

  test('throws when blob1 length prefix exceeds available bytes', () => {
    const reqSvc = new DecryptRequestService();
    const raw = Buffer.concat([Buffer.alloc(4), Buffer.alloc(3)]);
    raw.writeUInt32LE(10, 0);
    const bad = raw.toString('base64');
    expect(() => reqSvc.decodeFromBase64(bad)).toThrow(/blob1 length prefix/i);
  });

  test('throws for non-base64 input that decodes to an empty buffer', () => {
    const reqSvc = new DecryptRequestService();
    expect(() => reqSvc.decodeFromBase64('!!!!')).toThrow(/missing 4-byte blob1 length prefix/i);
  });
});
