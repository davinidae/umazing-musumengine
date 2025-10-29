import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import {
  EncryptPayloadService,
  DecryptRequestService,
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
  readBase64File,
  decryptBlob2,
  LengthPrefixedStrategy,
} from '../../src';

const sourceDecoded = path.join('decrypt', 'output', 'example', 'request', 'decoded.json');
const inPackDir = path.join('encrypt', 'input', '__roundtrip__', 'roundtrip');
const outPackDir = path.join('encrypt', 'output', '__roundtrip__', 'roundtrip');

function rmrf(p: string) {
  fs.rmSync(p, {
    recursive: true,
    force: true,
  });
}

describe('roundtrip using previously decrypted decoded.json', () => {
  let original: any | null = null;
  beforeAll(async () => {
    rmrf(inPackDir);
    rmrf(outPackDir);
    if (!fs.existsSync(sourceDecoded)) {
      // Try to generate it by running decrypt request (if request.txt exists)
      const decReq = new DecryptRequestService();
      await decReq.execute();
    }
    if (fs.existsSync(sourceDecoded)) {
      const json = JSON.parse(fs.readFileSync(sourceDecoded, 'utf-8')) as any;
      original = json;
      // Write as input for builder
      fs.mkdirSync(inPackDir, {
        recursive: true,
      });
      fs.writeFileSync(
        path.join(inPackDir, 'decoded.json'),
        JSON.stringify(json, null, 2),
        'utf-8',
      );
    }
  });

  afterAll(() => {
    rmrf(path.join('encrypt', 'input', '__roundtrip__'));
    rmrf(path.join('encrypt', 'output', '__roundtrip__'));
  });

  test('builder produces request that decrypts back to same payload', async () => {
    if (!original) {
      console.log('Skip (missing source decrypted decoded.json), run decrypt first if needed');
      return;
    }
    const buildRun = new EncryptPayloadService();
    await buildRun.execute();
    const builtPath = path.join(outPackDir, 'built.b64');
    expect(fs.existsSync(builtPath)).toBe(true);
    const raw = readBase64File(builtPath);
    const [blob1, blob2] = parseRequest(raw);
    const h = parseHeaderBlob1(blob1);
    // IV from UDID canonical
    const udidCanonical = udidRawToCanonicalString(h.udid_raw);
    const iv = deriveIvFromUdidString(udidCanonical);
    const { plaintext } = decryptBlob2(blob2, iv);
    const strategy = new LengthPrefixedStrategy();
    const obj = strategy.execute(plaintext);
    expect(obj).toEqual(original.blob2);
    // Header significant fields should remain the same as original
    expect(h.session_id.toString('hex')).toBe(original.blob1.session_id_hex);
    expect(h.udid_raw.toString('hex')).toBe(original.blob1.udid_raw_hex);
    expect(h.response_key.toString('hex')).toBe(original.blob1.response_key_hex);
    expect(h.auth_key.toString('hex')).toBe(original.blob1.auth_key_hex);
  });
});
