/**
 * Build Base64 requests from decoded.json inputs under encrypt/input.
 * Handles both length-prefixed and kv-stream payload framings and produces
 * requests under encrypt/output mirroring the input folder structure.
 */
import path from 'node:path';
import fs from 'node:fs';
import fastGlob from 'fast-glob';
import { encode } from '@msgpack/msgpack';
import { createHash } from 'node:crypto';
import { setTimeout as delay } from 'node:timers/promises';
import {
  deriveIvFromUdidString,
  encryptAes256Cbc,
  udidRawToCanonicalString,
  fromJsonFriendly,
  pkcs7Pad,
  defaultLogger,
} from '../shared';
import { DETERMINISTIC_ENC_SECRET } from '../variables';
import type { Logger, ServiceOptions } from '../models';

/**
 * Builds Base64 requests from all decoded.json files under encrypt/input (recursive).
 *
 * Framing modes:
 * - Default 'length-prefixed': a single msgpack document with 4B LE length.
 * - 'kv-stream' when blob1.framing === 'kv-stream': concatenated msgpack(key)+msgpack(value) pairs.
 */
export class EncryptPayloadService {
  private readonly logger: Logger;
  constructor(
    private readonly inRoot = 'encrypt/input',
    options: ServiceOptions = {},
  ) {
    this.logger = options.logger ?? defaultLogger;
  }

  /**
   * Scan encrypt/input for decoded.json files and build request.b64 outputs.
   * @returns Process exit code (0).
   */
  async execute(): Promise<number> {
    // Glob can occasionally see transient EPERM/ENOENT on Windows when tests run in parallel.
    // Retry briefly to avoid flakes.
    const entries = await this.safeGlob('**/decoded.json', { cwd: this.inRoot, dot: false });
    if (entries.length === 0) {
      this.logger.info('No decoded.json files found under encrypt/input');
      return 0;
    }
    let total = 0;
    for (const rel of entries.sort()) {
      const full = path.join(this.inRoot, rel);
      try {
        const root = JSON.parse(fs.readFileSync(full, 'utf-8'));
        if (!root || typeof root !== 'object' || !('blob1' in root) || !('blob2' in root)) {
          this.logger.info(`Skip (invalid decoded.json structure): ${full}`);
          continue;
        }
        const blob1 = (root as any).blob1 ?? {};
        const payloadSource = (root as any).blob2;
        let udidString: string | null = null;
        if (typeof blob1.udid_canonical === 'string') {
          udidString = blob1.udid_canonical;
        } else if (typeof blob1.udid_raw_hex === 'string') {
          udidString = udidRawToCanonicalString(Buffer.from(blob1.udid_raw_hex, 'hex'));
        }
        if (!udidString) {
          this.logger.info(`Skip (missing UDID fields in blob1): ${full}`);
          continue;
        }
        const iv = deriveIvFromUdidString(udidString);
        const sidHex = blob1.session_id_hex || null;
        const respKeyHex = blob1.response_key_hex || null;
        if (!sidHex) {
          this.logger.info(`Skip (missing session_id in overrides and blob1): ${full}`);
          continue;
        }
        let sessionId: Buffer;
        try {
          sessionId = Buffer.from(sidHex, 'hex');
        } catch (_e) {
          this.logger.info(`Skip (invalid session_id hex): ${full}`);
          continue;
        }
        if (sessionId.length !== 16) {
          this.logger.info(`Skip (session_id must be 16B): ${full}`);
          continue;
        }
        if (!respKeyHex) {
          this.logger.info(`Skip (missing response_key_hex in blob1): ${full}`);
          continue;
        }
        const responseKey = Buffer.from(respKeyHex, 'hex');
        if (responseKey.length !== 32) {
          this.logger.info(`Skip (response_key_hex not 32B): ${full}`);
          continue;
        }
        const encryptionKey = createHash('sha256')
          .update(DETERMINISTIC_ENC_SECRET, 'utf8')
          .digest();
        const payloadObj = fromJsonFriendly(payloadSource);
        const hintFraming = (blob1.framing as string | undefined) || null;
        const framing: 'length-prefixed' | 'kv-stream' =
          hintFraming === 'kv-stream' ? 'kv-stream' : 'length-prefixed';
        let plaintext: Buffer;
        if (framing === 'length-prefixed') {
          const packed = Buffer.from(encode(payloadObj));
          const prefixed = Buffer.concat([Buffer.alloc(4), packed]);
          prefixed.writeUInt32LE(packed.length, 0);
          plaintext = prefixed;
        } else {
          if (!payloadObj || typeof payloadObj !== 'object' || Array.isArray(payloadObj)) {
            this.logger.info(`Skip (kv-stream requires object payload): ${full}`);
            continue;
          }
          const parts: Buffer[] = [];
          for (const [k, v] of Object.entries(payloadObj as Record<string, unknown>)) {
            parts.push(Buffer.from(encode(String(k))));
            parts.push(Buffer.from(encode(v as any)));
          }
          plaintext = Buffer.concat(parts);
        }
        const padded = pkcs7Pad(plaintext, 16);
        const ciphertext = encryptAes256Cbc(padded, encryptionKey, iv);
        const ciphertextWithKey = Buffer.concat([ciphertext, encryptionKey]);
        // Validate required blob1 fields; skip this file if any are missing
        const required = ['prefix_hex', 'udid_raw_hex', 'auth_key_hex'] as const;
        const missing = required.filter((k) => !(k in blob1));
        if (missing.length > 0) {
          this.logger.info(`Skip (missing '${missing[0]}' in blob1): ${full}`);
          continue;
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
        fs.mkdirSync(outDir, {
          recursive: true,
        });
        const outPath = path.join(outDir, 'built.b64');
        fs.writeFileSync(outPath, outB64, 'utf-8');
        total += 1;
      } catch (e: any) {
        const msg = e && e.message ? e.message : String(e);
        this.logger.info(`Skip (error processing encryption): ${full} -> ${msg}`);
        continue;
      }
    }
    if (total === 0) {
      this.logger.info('No requests were built (check inputs and parameters)');
    }
    return 0;
  }

  private async safeGlob(
    pattern: string,
    options: fastGlob.Options,
    retries = 2,
  ): Promise<string[]> {
    try {
      return await fastGlob(pattern, options);
    } catch (e: any) {
      if (retries > 0) {
        const msg = e && e.message ? e.message : String(e);
        this.logger.debug?.(`glob error, retrying (${retries} left): ${msg}`);
        await delay(30);
        return this.safeGlob(pattern, options, retries - 1);
      }
      throw e;
    }
  }
}
