import { describe, test, expect } from 'vitest';
import fs from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import {
  EncryptPayloadService,
  deriveIvFromUdidString,
  parseHeaderBlob1,
  parseRequest,
  udidRawToCanonicalString,
  readBase64File,
  decryptBlob2,
  DETERMINISTIC_ENC_SECRET,
  LengthPrefixedStrategy,
} from '../../src';

describe('encrypt build e2e', () => {
  test('builds request from decoded.json and can decrypt blob2 back', async () => {
    const packDir = path.join('encrypt', 'input', '__test__', 'pack1');
    const outDir = path.join('encrypt', 'output', '__test__', 'pack1');
    try {
      fs.rmSync(packDir, {
        recursive: true,
        force: true,
      });
      fs.rmSync(outDir, {
        recursive: true,
        force: true,
      });
      fs.mkdirSync(packDir, {
        recursive: true,
      });
      // Deterministic fields
      const prefixHex = 'aabbccddeeff';
      const udidRawHex = '00112233445566778899aabbccddeeff'; // 16B
      const sessionIdHex = '11223344556677889900aabbccddeeff'; // 16B
      const authKeyHex = 'ab'.repeat(48); // 48B
      const decoded = {
        blob1: {
          prefix_hex: prefixHex,
          udid_raw_hex: udidRawHex,
          session_id_hex: sessionIdHex,
          response_key_hex: 'c0'.repeat(32),
          auth_key_hex: authKeyHex,
        },
        blob2: {
          answer: 42,
          s: 'hi',
        },
      };
      const decodedPath = path.join(packDir, 'decoded.json');
      fs.writeFileSync(decodedPath, JSON.stringify(decoded, null, 2), 'utf-8');
      // Run builder with overrides for keys and session id
      const buildRun = new EncryptPayloadService();
      await buildRun.execute();
      const builtPath = path.join(outDir, 'built.b64');
      expect(fs.existsSync(builtPath)).toBe(true);
      const raw = readBase64File(builtPath);
      const [blob1, blob2] = parseRequest(raw);
      const h = parseHeaderBlob1(blob1);
      expect(h.prefix.toString('hex')).toBe(prefixHex);
      expect(h.session_id.toString('hex')).toBe(sessionIdHex);
      expect(h.udid_raw.toString('hex')).toBe(udidRawHex);
      expect(h.response_key.toString('hex')).toBe('c0'.repeat(32));
      expect(h.auth_key.toString('hex')).toBe(authKeyHex);
      // blob2 ends with 32B encryption key
      const encKeyFromBlob2 = blob2.subarray(blob2.length - 32);
      const expectedEncKeyHex = createHash('sha256')
        .update(DETERMINISTIC_ENC_SECRET, 'utf8')
        .digest('hex');
      expect(encKeyFromBlob2.toString('hex')).toBe(expectedEncKeyHex);
      // Decrypt and unpack blob2
      const udidCanonical = udidRawToCanonicalString(h.udid_raw);
      const iv = deriveIvFromUdidString(udidCanonical);
      const { plaintext } = decryptBlob2(blob2, iv);
      const strategy = new LengthPrefixedStrategy();
      const obj = strategy.execute(plaintext) as any;
      expect(obj).toEqual({ answer: 42, s: 'hi' });
    } finally {
      // cleanup
      fs.rmSync(path.join('encrypt', 'input', '__test__'), {
        recursive: true,
        force: true,
      });
      fs.rmSync(path.join('encrypt', 'output', '__test__'), {
        recursive: true,
        force: true,
      });
    }
  });
});
