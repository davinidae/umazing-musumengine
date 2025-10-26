import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { run as buildRun } from '../../src/encrypt/build';
import {
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
} from '../../src/common/protocol';
import { decryptBlob2, unpackLengthPrefixedMsgpack } from '../../src/decrypt/common';

const sourceDecoded = path.join('decrypt', 'output', 'example', 'request', 'decoded.json');
const inPackDir = path.join('encrypt', 'input', '__itest__', 'roundtrip');
const outPackDir = path.join('encrypt', 'output', '__itest__', 'roundtrip');

function rmrf(p: string) {
  fs.rmSync(p, { recursive: true, force: true });
}

describe('roundtrip using previously decrypted decoded.json', () => {
  beforeAll(() => {
    rmrf(inPackDir);
    rmrf(outPackDir);

    const json = JSON.parse(fs.readFileSync(sourceDecoded, 'utf-8')) as any;
    // Write as input for builder
    fs.mkdirSync(inPackDir, { recursive: true });
    fs.writeFileSync(path.join(inPackDir, 'decoded.json'), JSON.stringify(json, null, 2), 'utf-8');
  });

  afterAll(() => {
    rmrf(path.join('encrypt', 'input', '__itest__'));
    rmrf(path.join('encrypt', 'output', '__itest__'));
  });

  test('builder produces request that decrypts back to same payload', async () => {
    await buildRun();

    const builtPath = path.join(outPackDir, 'built.b64');
    expect(fs.existsSync(builtPath)).toBe(true);

    const raw = Buffer.from(fs.readFileSync(builtPath, 'utf-8'), 'base64');
    const [blob1, blob2] = parseRequest(raw);
    const h = parseHeaderBlob1(blob1);

    // IV from UDID canonical
    const udidCanonical = udidRawToCanonicalString(h.udid_raw);
    const iv = deriveIvFromUdidString(udidCanonical);

    const { plaintext } = decryptBlob2(blob2, iv);
    const obj = unpackLengthPrefixedMsgpack(plaintext);

    const original = JSON.parse(fs.readFileSync(sourceDecoded, 'utf-8')) as any;
    expect(obj).toEqual(original.blob2);

    // Header significant fields should remain the same as original
    expect(h.session_id.toString('hex')).toBe(original.blob1.session_id_hex);
    expect(h.udid_raw.toString('hex')).toBe(original.blob1.udid_raw_hex);
    expect(h.response_key.toString('hex')).toBe(original.blob1.response_key_hex);
    expect(h.auth_key.toString('hex')).toBe(original.blob1.auth_key_hex);
  });
});
