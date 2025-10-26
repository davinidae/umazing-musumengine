import path from 'node:path';
import fs from 'node:fs';
import fg from 'fast-glob';
import { encode } from '@msgpack/msgpack';
import { createHash } from 'node:crypto';
import { deriveIvFromUdidString, udidRawToCanonicalString } from '../common/protocol';
import { encryptAes256Cbc, pkcs7Pad } from '../decrypt/common';
import { DETERMINISTIC_ENC_SECRET } from '../variables';

function fromJsonFriendly(value: any): any {
  if (Array.isArray(value)) return value.map(fromJsonFriendly);
  if (value && typeof value === 'object') {
    const out: Record<string, any> = {};
    for (const [k, v] of Object.entries(value)) out[k] = fromJsonFriendly(v);
    return out;
  }
  if (typeof value === 'string' && value.startsWith('base64:')) {
    return Buffer.from(value.slice('base64:'.length), 'base64');
  }
  return value;
}

export async function run(): Promise<number> {
  const inRoot = 'encrypt/input';
  const entries = await fg('**/decoded.json', { cwd: inRoot, dot: false });
  if (entries.length === 0) {
    console.log('No decoded.json files found under encrypt/input');
    return 0;
  }
  let total = 0;
  for (const rel of entries.sort()) {
    const full = path.join(inRoot, rel);
    try {
      const root = JSON.parse(fs.readFileSync(full, 'utf-8'));
      if (!root || typeof root !== 'object' || !('blob1' in root) || !('blob2' in root)) {
        console.log(`Skip (invalid decoded.json structure): ${full}`);
        continue;
      }
      const blob1 = (root as any).blob1 ?? {};
      const payloadSource = (root as any).blob2;

      let udidString: string | null = null;
      if (typeof blob1.udid_canonical === 'string') udidString = blob1.udid_canonical;
      else if (typeof blob1.udid_raw_hex === 'string') {
        udidString = udidRawToCanonicalString(Buffer.from(blob1.udid_raw_hex, 'hex'));
      }
      if (!udidString) {
        console.log(`Skip (missing UDID fields in blob1): ${full}`);
        continue;
      }
      const iv = deriveIvFromUdidString(udidString);

      const sidHex = blob1.session_id_hex || null;
      const respKeyHex = blob1.response_key_hex || null;
      if (!sidHex) {
        console.log(`Skip (missing session_id in overrides and blob1): ${full}`);
        continue;
      }

      let sessionId: Buffer;
      try {
        sessionId = Buffer.from(sidHex, 'hex');
      } catch {
        console.log(`Skip (invalid session_id hex): ${full}`);
        continue;
      }
      if (sessionId.length !== 16) {
        console.log(`Skip (session_id must be 16B): ${full}`);
        continue;
      }

      if (!respKeyHex) {
        console.log(`Skip (missing response_key_hex in blob1): ${full}`);
        continue;
      }
      let responseKey: Buffer; // 32B
      responseKey = Buffer.from(respKeyHex, 'hex');
      if (responseKey.length !== 32) {
        console.log(`Skip (response_key_hex not 32B): ${full}`);
        continue;
      }

      // Force deterministic encryption key derived from a fixed ASCII secret
      const encryptionKey = createHash('sha256').update(DETERMINISTIC_ENC_SECRET, 'utf8').digest(); // 32B

      const payloadObj = fromJsonFriendly(payloadSource);
      const packed = Buffer.from(encode(payloadObj));
      const prefixed = Buffer.concat([Buffer.alloc(4), packed]);
      prefixed.writeUInt32LE(packed.length, 0);

      const padded = pkcs7Pad(prefixed, 16);
      const ciphertext = encryptAes256Cbc(padded, encryptionKey, iv);
      const ciphertextWithKey = Buffer.concat([ciphertext, encryptionKey]);

      for (const req of ['prefix_hex', 'udid_raw_hex', 'auth_key_hex']) {
        if (!(req in blob1)) {
          console.log(`Skip (missing '${req}' in blob1): ${full}`);
          continue;
        }
      }

      const newBlob1 = Buffer.concat([
        Buffer.from(blob1.prefix_hex, 'hex'),
        sessionId,
        Buffer.from(blob1.udid_raw_hex, 'hex'),
        responseKey,
        Buffer.from(blob1.auth_key_hex, 'hex'),
      ]);

      const fullRequest = Buffer.concat([Buffer.alloc(4), newBlob1, ciphertextWithKey]);
      fullRequest.writeUInt32LE(newBlob1.length, 0);

      const outB64 = fullRequest.toString('base64');
      const outDir = path.join('encrypt/output', path.dirname(rel));
      fs.mkdirSync(outDir, { recursive: true });
      const outPath = path.join(outDir, 'built.b64');
      fs.writeFileSync(outPath, outB64, 'utf-8');

      console.log('OK: request built');
      console.log(`- From decoded.json: ${full}`);
      console.log(`- UDID: ${udidString}`);
      console.log(`- prefix_len: ${Buffer.from(blob1.prefix_hex, 'hex').length}`);
      console.log(`- response_key: ${responseKey.toString('hex')}`);
      console.log(`- session_id: ${sessionId.toString('hex')}`);
      console.log(`- enc_key (blob2): ${encryptionKey.toString('hex')}`);
      console.log(`- OUT: ${outPath}`);
      total += 1;
    } catch (_e) {
      console.log(`Skip (error processing): ${full}`);
      continue;
    }
  }
  if (total === 0) console.log('No requests were built (check inputs and parameters)');
  return 0;
}
