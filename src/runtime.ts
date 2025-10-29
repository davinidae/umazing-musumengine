/**
 * Runtime API: programmatic encode/decode helpers used by the CLI and tests.
 *
 * Wire format
 * - request = [4B LE blob1_len][blob1][blob2]
 * - blob1   = [prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(48)]
 * - blob2   = [AES-256-CBC(ciphertext)][deterministic_key(32)]
 *
 * Notes
 * - The IV for AES is derived from the device UDID (canonical string form).
 * - The encryption key for tests is deterministic (SHA-256 of DETERMINISTIC_ENC_SECRET)
 *   to make roundtrips reproducible.
 * - Payload framing:
 *   - length-prefixed: [4B LE len][msgpack]
 *   - kv-stream: concatenated msgpack documents [k1][v1][k2][v2]...
 */
import { createHash } from 'node:crypto';
import { encode } from '@msgpack/msgpack';
import {
  udidRawToCanonicalString,
  deriveIvFromUdidString,
  fromJsonFriendly,
  encryptAes256Cbc,
  pkcs7Pad,
} from './shared';
import { decryptBlob2, Unpacker } from './decrypt';
import { DETERMINISTIC_ENC_SECRET } from './variables';
import {
  FramingMode,
  EncodeRequestInput,
  EncodeRequestOutput,
  DecodeResponseInput,
  DecodeResponseOutput,
  RuntimeClientOptions,
  Logger,
} from './models';
import { defaultLogger } from './shared';

export class RuntimeClient {
  /** Thin OO wrapper so consumers can inject options later (e.g., logger). */
  constructor(private readonly opts: RuntimeClientOptions = {}) {}
  private get logger(): Logger {
    return this.opts.logger ?? defaultLogger;
  }

  /**
   * Encode a request from header fields (blob1) and a JS payload.
   *
   * @param input Blob1 header pieces and the payload to serialize.
   * @returns An object containing the Base64-encoded request buffer.
   * @throws If mandatory fields are missing or have invalid sizes.
   */
  encodeRequest(input: EncodeRequestInput): EncodeRequestOutput {
    const { blob1, payload } = input;
    this.logger.debug?.('[runtime] encodeRequest framing=%s', blob1.framing ?? 'length-prefixed');
    // Determine UDID string (accept either canonical string or raw hex)
    let udidString: string | null = null;
    if (typeof blob1.udid_canonical === 'string') {
      udidString = blob1.udid_canonical;
    } else if (typeof blob1.udid_raw_hex === 'string') {
      udidString = udidRawToCanonicalString(Buffer.from(blob1.udid_raw_hex, 'hex'));
    }
    if (!udidString) {
      throw new Error('Missing UDID (udid_canonical or udid_raw_hex)');
    }
    const iv = deriveIvFromUdidString(udidString);
    // Validate required header fields and sizes
    const sidHex = blob1.session_id_hex;
    const respKeyHex = blob1.response_key_hex;
    if (!sidHex) {
      throw new Error('Missing session_id_hex');
    }
    if (!respKeyHex) {
      throw new Error('Missing response_key_hex');
    }
    const sessionId = Buffer.from(sidHex, 'hex');
    if (sessionId.length !== 16) {
      throw new Error('session_id_hex must be 16B');
    }
    const responseKey = Buffer.from(respKeyHex, 'hex');
    if (responseKey.length !== 32) {
      throw new Error('response_key_hex must be 32B');
    }
    const authKey = Buffer.from(blob1.auth_key_hex, 'hex');
    if (authKey.length !== 48) {
      throw new Error('auth_key_hex must be 48B');
    }
    // Build plaintext according to framing
    const framing: FramingMode = blob1.framing === 'kv-stream' ? 'kv-stream' : 'length-prefixed';
    const payloadObj = fromJsonFriendly(payload);
    let plaintext: Buffer;
    if (framing === 'length-prefixed') {
      const packed = Buffer.from(encode(payloadObj));
      const prefixed = Buffer.concat([Buffer.alloc(4), packed]);
      prefixed.writeUInt32LE(packed.length, 0);
      plaintext = prefixed;
    } else {
      if (!payloadObj || typeof payloadObj !== 'object' || Array.isArray(payloadObj)) {
        throw new Error('kv-stream framing requires object payload');
      }
      const parts: Buffer[] = [];
      for (const [k, v] of Object.entries(payloadObj as Record<string, unknown>)) {
        parts.push(Buffer.from(encode(String(k))));
        parts.push(Buffer.from(encode(v as any)));
      }
      plaintext = Buffer.concat(parts);
    }
    // Deterministic encryption key (helps reproducible tests)
    const encryptionKey = createHash('sha256').update(DETERMINISTIC_ENC_SECRET, 'utf8').digest();
    const padded = pkcs7Pad(plaintext, 16);
    const ciphertext = encryptAes256Cbc(padded, encryptionKey, iv);
    const blob2 = Buffer.concat([ciphertext, encryptionKey]);
    // Build blob1 header preserving user-provided prefix and UDID form
    const newBlob1 = Buffer.concat([
      Buffer.from(blob1.prefix_hex, 'hex'),
      sessionId,
      Buffer.from(blob1.udid_raw_hex ?? udidString.replace(/-/g, ''), 'hex'),
      responseKey,
      authKey,
    ]);
    const full = Buffer.concat([Buffer.alloc(4), newBlob1, blob2]);
    full.writeUInt32LE(newBlob1.length, 0);
    this.logger.debug?.(
      '[runtime] encodeRequest done: blob1_len=%d ciphertext_len=%d',
      newBlob1.length,
      blob2.length - 32,
    );
    return { requestB64: full.toString('base64') };
  }

  /**
   * Decode a Base64 response using the matching request for UDID/IV.
   * Extracts UDID from blob1, derives IV, decrypts blob2, and uses
   * the heuristic Unpacker to parse the plaintext.
   *
   * @param input An object with requestB64 and responseB64.
   * @returns The parsed payload best-effort as { payload }.
   * @throws If the request blob1 is malformed and UDID cannot be extracted.
   */
  decodeResponse(input: DecodeResponseInput): DecodeResponseOutput {
    this.logger.debug?.('[runtime] decodeResponse start');
    const { requestB64, responseB64 } = input;
    if (!requestB64 || !responseB64) {
      throw new Error('Missing requestB64 or responseB64');
    }
    const req = Buffer.from(requestB64, 'base64');
    if (req.length < 4) {
      throw new Error('Invalid request: too short');
    }
    const blob1Len = req.readUInt32LE(0);
    const blob1 = req.subarray(4, 4 + blob1Len);
    // UDID is at offset prefix_len + 16 (session_id) and is 16 bytes raw
    // Prefix can be variable length; derive UDID by parsing from end based on known sizes
    // blob1 layout: [prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(48)]
    if (blob1.length < 16 + 16 + 32 + 48) {
      throw new Error('Invalid blob1 length');
    }
    const tailLen = 16 + 16 + 32 + 48; // session + udid + resp_key + auth_key
    const prefixLen = blob1.length - tailLen;
    if (prefixLen < 0) {
      throw new Error('Invalid blob1 layout');
    }
    const udidRaw = blob1.subarray(prefixLen + 16, prefixLen + 32);
    const udidCanonical = udidRawToCanonicalString(udidRaw);
    const iv = deriveIvFromUdidString(udidCanonical);
    // Decrypt blob2
    const resp = Buffer.from(responseB64, 'base64');
    const { plaintext } = decryptBlob2(resp, iv);
    // Unpack
    const unpacker = new Unpacker();
    const payload = unpacker.run(plaintext);
    this.logger.debug?.('[runtime] decodeResponse unpacked');
    return { payload };
  }
}
