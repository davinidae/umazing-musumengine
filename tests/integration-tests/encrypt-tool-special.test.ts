import { describe, test, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import {
  EncryptPayloadService,
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
  decryptBlob2,
  LengthPrefixedStrategy,
  Unpacker,
} from '../../src';

const inRoot = path.join('encrypt', 'input', '__tool__');
const outRoot = path.join('encrypt', 'output', '__tool__');

function rmrf(p: string) {
  fs.rmSync(p, { recursive: true, force: true });
}

function writeJSON(p: string, obj: any) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2), 'utf-8');
}

describe('encrypt build for tool kv-stream requests', () => {
  test('pre_signup: builds kv-stream (no length prefix) and auto-unpacks back to same object', async () => {
    try {
      rmrf(inRoot);
      rmrf(outRoot);
      const packDir = path.join(inRoot, 'tool', 'pre_signup');
      const outDir = path.join(outRoot, 'tool', 'pre_signup');
      const prefixHex = 'aa55';
      const udidRawHex = '00'.repeat(16);
      const sessionIdHex = '11'.repeat(16);
      const authKeyHex = '33'.repeat(48);
      const respKeyHex = '22'.repeat(32);
      const payload = {
        device: 4,
        viewer_id: 0,
        device_id: 'abc',
        device_name: 'PC',
      };
      writeJSON(path.join(packDir, 'decoded.json'), {
        blob1: {
          prefix_hex: prefixHex,
          udid_raw_hex: udidRawHex,
          session_id_hex: sessionIdHex,
          response_key_hex: respKeyHex,
          auth_key_hex: authKeyHex,
          framing: 'kv-stream',
        },
        blob2: payload,
      });
      const buildRun = new EncryptPayloadService();
      await buildRun.execute();
      const builtPath = path.join(outDir, 'built.b64');
      expect(fs.existsSync(builtPath)).toBe(true);
      const raw = Buffer.from(fs.readFileSync(builtPath, 'utf-8'), 'base64');
      const [blob1, blob2] = parseRequest(raw);
      const h = parseHeaderBlob1(blob1);
      const udidCanon = udidRawToCanonicalString(h.udid_raw);
      const iv = deriveIvFromUdidString(udidCanon);
      const { plaintext } = decryptBlob2(blob2, iv);
      // Should not be valid length-prefixed
      const strategy = new LengthPrefixedStrategy();
      expect(() => {
        return strategy.execute(plaintext);
      }).toThrow();
      // Auto-unpacker should reconstruct the same object
      const unpacker = new Unpacker();
      const obj = unpacker.execute(plaintext) as any;
      expect(obj).toEqual(payload);
    } finally {
      rmrf(inRoot);
      rmrf(outRoot);
    }
  });

  test('signup: honors explicit kv-stream framing hint', async () => {
    try {
      rmrf(inRoot);
      rmrf(outRoot);
      const packDir = path.join(inRoot, 'tool', 'signup');
      const outDir = path.join(outRoot, 'tool', 'signup');
      const prefixHex = 'bb66';
      const udidRawHex = '11'.repeat(16);
      const sessionIdHex = '22'.repeat(16);
      const authKeyHex = '44'.repeat(48);
      const respKeyHex = '55'.repeat(32);
      const payload = { a: 1, b: 'z' };
      writeJSON(path.join(packDir, 'decoded.json'), {
        blob1: {
          prefix_hex: prefixHex,
          udid_raw_hex: udidRawHex,
          session_id_hex: sessionIdHex,
          response_key_hex: respKeyHex,
          auth_key_hex: authKeyHex,
          framing: 'kv-stream',
        },
        blob2: payload,
      });
      const buildRun = new EncryptPayloadService();
      await buildRun.execute();
      const builtPath = path.join(outDir, 'built.b64');
      expect(fs.existsSync(builtPath)).toBe(true);
      const raw = Buffer.from(fs.readFileSync(builtPath, 'utf-8'), 'base64');
      const [blob1, blob2] = parseRequest(raw);
      const h = parseHeaderBlob1(blob1);
      const udidCanon = udidRawToCanonicalString(h.udid_raw);
      const iv = deriveIvFromUdidString(udidCanon);
      const { plaintext } = decryptBlob2(blob2, iv);
      const strategy = new LengthPrefixedStrategy();
      expect(() => {
        return strategy.execute(plaintext);
      }).toThrow();
      const unpacker = new Unpacker();
      const obj = unpacker.execute(plaintext) as any;
      expect(obj).toEqual(payload);
    } finally {
      rmrf(inRoot);
      rmrf(outRoot);
    }
  });
});
