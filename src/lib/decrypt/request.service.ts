/**
 * Decrypt all request.txt files under decrypt/input into decoded artifacts.
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

export class DecryptRequestService {
  private readonly logger: Logger;
  constructor(
    private readonly inRoot = 'decrypt/input',
    options: ServiceOptions = {},
  ) {
    this.logger = options.logger ?? defaultLogger;
  }

  /**
   * Scan decrypt/input for request.txt and write decoded.bin and decoded.json
   * under decrypt/output mirroring the input layout.
   * @returns Process exit code (0).
   */
  async execute(): Promise<number> {
    const entries = await fastGlob('**/request.txt', {
      cwd: this.inRoot,
      dot: false,
    });
    if (entries.length === 0) {
      this.logger.info('No request.txt files found under decrypt/input');
      return 0;
    }
    let processed = 0;
    for (const relPath of entries.sort()) {
      const fullPath = path.join(this.inRoot, relPath);
      try {
        const raw = readBase64File(fullPath);
        const parsed = ParsedRequest.parse(raw);
        const header = parsed.blob1;
        const blob2 = parsed.blob2;
        const udidStr = udidRawToCanonicalString(header.udid_raw);
        const iv = deriveIvFromUdidString(udidStr);
        const { plaintext, keyUsed } = decryptBlob2(blob2, iv);
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
          prefix_hex: header.prefix.toString('hex'),
          prefix_len: header.prefix.length,
          session_id_hex: header.session_id.toString('hex'),
          udid_raw_hex: header.udid_raw.toString('hex'),
          udid_canonical: udidStr,
          response_key_hex: header.response_key.toString('hex'),
          auth_key_hex: header.auth_key.toString('hex'),
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
        this.logger.info(`Skip (invalid request format): ${fullPath} -> ${msg}`);
        continue;
      }
    }
    if (processed === 0) {
      this.logger.info('No valid request.txt files detected under decrypt/input');
    }
    return 0;
  }
}
