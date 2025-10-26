import path from 'node:path';
import fs from 'node:fs';
import fg from 'fast-glob';
import {
  readBase64File,
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
} from '../common/protocol';
import { decryptBlob2, unpackLengthPrefixedMsgpack, toJsonCompatible } from './common';

export async function run(): Promise<number> {
  const inRoot = 'decrypt/input';
  const entries = await fg('**/request.txt', { cwd: inRoot, dot: false });
  if (entries.length === 0) {
    console.log('No request.txt files found under decrypt/input');
    return 0;
  }
  let processed = 0;
  for (const relPath of entries.sort()) {
    const fullPath = path.join(inRoot, relPath);
    try {
      const raw = readBase64File(fullPath);
      const [blob1, blob2] = parseRequest(raw);
      const header = parseHeaderBlob1(blob1);
      const udidStr = udidRawToCanonicalString(header.udid_raw);
      const iv = deriveIvFromUdidString(udidStr);
      const { plaintext, keyUsed } = decryptBlob2(blob2, iv);
      const payload = unpackLengthPrefixedMsgpack(plaintext);
      const printable = toJsonCompatible(payload);

      const outDir = path.join('decrypt/output', path.dirname(relPath), path.parse(fullPath).name);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'decoded.bin'), plaintext);
      const headerJson = {
        prefix_hex: header.prefix.toString('hex'),
        prefix_len: header.prefix.length,
        session_id_hex: header.session_id.toString('hex'),
        udid_raw_hex: header.udid_raw.toString('hex'),
        udid_canonical: udidStr,
        response_key_hex: header.response_key.toString('hex'),
        auth_key_hex: header.auth_key.toString('hex'),
        encryption_key_hex: keyUsed.toString('hex'),
      };
      const combined = { blob1: headerJson, blob2: printable };
      const jsonPath = path.join(outDir, 'decoded.json');
      fs.writeFileSync(jsonPath, JSON.stringify(combined, null, 2), {
        encoding: 'utf-8',
      });

      console.log(`OK: request decrypted -> ${jsonPath}`);
      const pack = path.dirname(relPath) || '/';
      console.log(`- Pack: ${pack} / request`);
      console.log(`- UDID: ${udidStr}`);
      console.log(`- AES key used: ${keyUsed.toString('hex')}`);
      console.log(`- Decrypted bin: ${path.join(outDir, 'decoded.bin')}`);
      processed += 1;
    } catch (_err) {
      console.log(`Skip (invalid request format): ${fullPath}`);
      continue;
    }
  }
  if (processed === 0) console.log('No valid request.txt files detected under decrypt/input');
  return 0;
}
