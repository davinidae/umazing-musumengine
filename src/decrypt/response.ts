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
  const entries = await fg('**/response.txt', { cwd: inRoot, dot: false });
  if (entries.length === 0) {
    console.log('No response.txt files found under decrypt/input');
    return 0;
  }
  let processed = 0;
  for (const relPath of entries.sort()) {
    const fullPath = path.join(inRoot, relPath);
    const reqPath = path.join(path.dirname(fullPath), 'request.txt');
    if (!fs.existsSync(reqPath)) {
      console.log(`Skip (no matching request.txt in same folder): ${fullPath}`);
      continue;
    }
    try {
      const reqRaw = readBase64File(reqPath);
      const [reqBlob1] = parseRequest(reqRaw);
      const reqHeader = parseHeaderBlob1(reqBlob1);
      const respRaw = readBase64File(fullPath);
      const udidStr = udidRawToCanonicalString(reqHeader.udid_raw);
      const iv = deriveIvFromUdidString(udidStr);
      const { plaintext, keyUsed } = decryptBlob2(respRaw, iv);
      const payload = unpackLengthPrefixedMsgpack(plaintext);
      const printable = toJsonCompatible(payload);

      const outDir = path.join('decrypt/output', path.dirname(relPath), path.parse(fullPath).name);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'decoded.bin'), plaintext);
      const headerJson = {
        prefix_hex: reqHeader.prefix.toString('hex'),
        prefix_len: reqHeader.prefix.length,
        session_id_hex: reqHeader.session_id.toString('hex'),
        udid_raw_hex: reqHeader.udid_raw.toString('hex'),
        udid_canonical: udidStr,
        response_key_hex: reqHeader.response_key.toString('hex'),
        auth_key_hex: reqHeader.auth_key.toString('hex'),
        encryption_key_hex: keyUsed.toString('hex'),
      };
      const combined = { blob1: headerJson, blob2: printable };
      const jsonPath = path.join(outDir, 'decoded.json');
      fs.writeFileSync(jsonPath, JSON.stringify(combined, null, 2), {
        encoding: 'utf-8',
      });

      console.log(`OK: response decrypted -> ${jsonPath}`);
      const pack = path.dirname(relPath) || '/';
      console.log(`- Pack: ${pack} / response`);
      console.log(`- UDID: ${udidStr}`);
      console.log(`- AES key used: ${keyUsed.toString('hex')}`);
      console.log(`- Decrypted bin: ${path.join(outDir, 'decoded.bin')}`);
      processed += 1;
    } catch (_err) {
      console.log(`Skip (invalid input format): ${fullPath}`);
      continue;
    }
  }
  if (processed === 0) console.log('No valid response.txt files detected under decrypt/input');
  return 0;
}
