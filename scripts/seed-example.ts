import fs from 'fs';
import path from 'path';
import { EncodeRequestInput, RuntimeClient } from '../src';
import {
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
} from '../src';
import { encode as mpEncode } from '@msgpack/msgpack';
import { createHash } from 'crypto';
import { pkcs7Pad } from '../src';
import { DETERMINISTIC_ENC_SECRET } from '../src/constants';
import { encryptAes256Cbc } from '../src';

/**
 * Seeds a minimal example pack under `decrypt/input/example`.
 *
 * Produces:
 * - `request.txt`: a base64-encoded request with deterministic header fields
 * - `response.txt`: a base64-encoded response using AES-256-CBC and MsgPack
 */
async function main() {
  const outDir = path.join(process.cwd(), 'decrypt', 'input', 'example');
  fs.mkdirSync(outDir, { recursive: true });

  // Minimal valid header fields
  const blob1: EncodeRequestInput['blob1'] = {
    viewer_id: 123456789,
    prefix_hex: 'aabbccdd',
    prefix_b64: 'aabbccdd',
    session_id_b64: '11'.repeat(16),
    response_key_b64: '22'.repeat(32),
    auth_key_b64: '33'.repeat(48),
    udid_hex: '00'.repeat(16),
    session_id_hex: '11'.repeat(16),
    response_key_hex: '22'.repeat(32),
    auth_key_hex: '33'.repeat(48),
  };
  // Simple payload
  const blob2: EncodeRequestInput['blob2'] = {
    hello: 'world',
    n: 42,
  };

  // Build request
  const runtime = new RuntimeClient();
  const { requestB64 } = runtime.encodeRequest({ blob1, blob2 });
  fs.writeFileSync(path.join(outDir, 'request.txt'), requestB64 + '\n', 'utf-8');

  // Build response using same deterministic key and IV derived from request UDID
  const reqRaw = Buffer.from(requestB64, 'base64');
  const [reqBlob1] = parseRequest(reqRaw);
  const h = parseHeaderBlob1(reqBlob1);
  const udidCanon = udidRawToCanonicalString(h.udid_raw);
  const iv = deriveIvFromUdidString(udidCanon);
  const sha = createHash('sha256');
  sha.update(DETERMINISTIC_ENC_SECRET, 'utf8');
  const encryptionKey = sha.digest();
  const packed = Buffer.from(mpEncode(blob2));
  const prefixed = Buffer.concat([Buffer.alloc(4), packed]);
  prefixed.writeUInt32LE(packed.length, 0);
  const padded = pkcs7Pad(prefixed, 16);
  const ciphertext = encryptAes256Cbc(padded, encryptionKey, iv);
  const blob2Buffer = Buffer.concat([ciphertext, encryptionKey]);
  const responseB64 = blob2Buffer.toString('base64');
  fs.writeFileSync(path.join(outDir, 'response.txt'), responseB64 + '\n', 'utf-8');

  console.log('Seeded example request/response under decrypt/input/example');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
