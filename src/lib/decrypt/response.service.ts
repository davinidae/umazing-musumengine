/**
 * Decrypt all response.txt files under decrypt/input using matching request.txt.
 */
import path from 'node:path';
import fs from 'node:fs';
import fastGlob from 'fast-glob';
import {
  readBase64File,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
  toJsonCompatible,
  defaultLogger,
} from '../shared';
import { decryptBlob2, Unpacker } from './shared';
import { ParsedRequest, ServiceOptions, Logger } from '../models';

export class DecryptResponseService {
  private readonly logger: Logger;
  constructor(
    private readonly inRoot = 'decrypt/input',
    options: ServiceOptions = {},
  ) {
    this.logger = options.logger ?? defaultLogger;
  }

  /**
   * Scan decrypt/input for response.txt, find the matching request.txt in the same folder,
   * and write decoded.bin and decoded.json under decrypt/output mirroring the layout.
   * @returns Process exit code (0).
   */
  async execute(): Promise<number> {
    const entries = await fastGlob('**/response.txt', {
      cwd: this.inRoot,
      dot: false,
    });
    if (entries.length === 0) {
      this.logger.info('No response.txt files found under decrypt/input');
      return 0;
    }
    let processed = 0;
    for (const relPath of entries.sort()) {
      const fullPath = path.join(this.inRoot, relPath);
      const reqPath = path.join(path.dirname(fullPath), 'request.txt');
      if (!fs.existsSync(reqPath)) {
        this.logger.info(`Skip (no matching request.txt in same folder): ${fullPath}`);
        continue;
      }
      try {
        const reqRaw = readBase64File(reqPath);
        const parsedReq = ParsedRequest.parse(reqRaw);
        const reqHeader = parsedReq.blob1;
        const respRaw = readBase64File(fullPath);
        const udidStr = udidRawToCanonicalString(reqHeader.udid_raw);
        const iv = deriveIvFromUdidString(udidStr);
        const { plaintext, keyUsed } = decryptBlob2(respRaw, iv);
        const unpacker = new Unpacker();
        const payload = unpacker.execute(plaintext);
        const printable = toJsonCompatible(payload);
        const outDir = path.join(
          'decrypt/output',
          path.dirname(relPath),
          path.parse(fullPath).name,
        );
        fs.mkdirSync(outDir, {
          recursive: true,
        });
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
        const combined = {
          blob1: headerJson,
          blob2: printable,
        };
        const jsonPath = path.join(outDir, 'decoded.json');
        fs.writeFileSync(jsonPath, JSON.stringify(combined, null, 2), {
          encoding: 'utf-8',
        });
        processed += 1;
      } catch (e: any) {
        const msg = e && e.message ? e.message : String(e);
        this.logger.info(`Skip (invalid response format): ${fullPath} -> ${msg}`);
        continue;
      }
    }
    if (processed === 0) {
      this.logger.info('No valid response.txt files detected under decrypt/input');
    }
    return 0;
  }
}
