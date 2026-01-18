import { describe, expect, test } from 'vitest';
import { createHash } from 'crypto';
import {
  DETERMINISTIC_ENC_SECRET,
  EncryptPayloadService,
  deriveIvFromUdidString,
  parseHeaderBlob1,
  parseRequest,
  udidRawToCanonicalString,
} from '../../../../../src';
import {
  blob1ToJson,
  decodeRequestContextFromBase64,
} from '../../../../../src/lib/decrypt/utils/request-context.util';

describe('decrypt/utils/request-context.util', () => {
  test('decodeRequestContextFromBase64 throws when requestB64 is empty', () => {
    expect(() => decodeRequestContextFromBase64('')).toThrow();
  });

  test('decodeRequestContextFromBase64 returns header, canonical UDID and IV', () => {
    const svc = new EncryptPayloadService();
    const blob1 = {
      viewer_id: 123,
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
    const blob2 = { hello: 'world' };
    const { requestB64 } = svc.build({
      blob1,
      blob2,
      DETERMINISTIC_ENC_SECRET,
    });

    const ctx = decodeRequestContextFromBase64(requestB64);
    expect(ctx.udidRaw).toEqual(udidRawToCanonicalString(ctx.header.udid_raw));
    expect(ctx.iv).toEqual(deriveIvFromUdidString(ctx.udidRaw));

    const raw = Buffer.from(requestB64, 'base64');
    const [b1] = parseRequest(raw);
    const parsedHeader = parseHeaderBlob1(b1);
    expect(ctx.header.session_id.toString('hex')).toEqual(parsedHeader.session_id.toString('hex'));
  });

  test('blob1ToJson produces expected fields and auth_key null when missing', () => {
    const raw = Buffer.from('aa'.repeat(2 + 16 + 16 + 32), 'hex');
    const header = parseHeaderBlob1(raw);
    const udidRaw = udidRawToCanonicalString(header.udid_raw);
    const keyUsed = createHash('sha256').update('k', 'utf8').digest();

    const out = blob1ToJson(header, udidRaw, keyUsed);
    expect(out.prefix_len).toEqual(header.prefix.length);
    expect(out.udid_raw).toEqual(udidRaw);
    expect(out.encryption_key).toEqual(keyUsed.toString('hex'));
    expect(out.auth_key).toEqual(null);
  });
});
