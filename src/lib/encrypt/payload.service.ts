import { encode } from '@msgpack/msgpack';
import { createHash } from 'node:crypto';
import {
  deriveIvFromUdidString,
  encryptAes256Cbc,
  udidRawToCanonicalString,
  fromJsonFriendly,
  pkcs7Pad,
} from '../shared';

/**
 * Build Base64 requests from in-memory parts (no filesystem access).
 *
 * Framing modes:
 * - Default 'length-prefixed': a single msgpack document with a 4-byte little-endian length prefix.
 * - 'kv-stream' when blob1.framing === 'kv-stream': concatenated msgpack(key)+msgpack(value) pairs.
 *
 * @public
 */
export class EncryptPayloadService {
  /**
   * PURE: Build a Base64 request from provided blob1 fields and payload (no filesystem access).
   * Mirrors the logic used in execute().
   */
  /**
   * Build a single request as Base64 from header fields (blob1) and a JS payload.
   *
   * @param input.blob1 Header fields in hex (prefix, session_id, udid_raw or udid_canonical, response_key, auth_key). Optional framing hint.
   * @param input.payload Arbitrary payload value; Buffers can be provided via `fromJsonFriendly` encoding.
   * @param input.DETERMINISTIC_ENC_SECRET ASCII secret used to derive the 32-byte AES-256 key (SHA-256).
   * @returns An object containing the Base64-encoded request buffer as `requestB64`.
   * @throws If mandatory fields are missing or have invalid sizes (e.g., session_id != 16B, response_key != 32B).
   */
  buildFromParts(input: {
    blob1: {
      prefix_hex: string;
      session_id_hex: string;
      udid_canonical?: string;
      udid_raw_hex?: string;
      response_key_hex: string;
      auth_key_hex: string;
      framing?: 'length-prefixed' | 'kv-stream';
    };
    payload: unknown;
    DETERMINISTIC_ENC_SECRET: string;
  }): {
    requestB64: string;
  } {
    const { blob1, payload, DETERMINISTIC_ENC_SECRET } = input;
    // Resolve UDID string
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

    // Build plaintext
    const hintFraming = blob1.framing ?? 'length-prefixed';
    const framing: 'length-prefixed' | 'kv-stream' =
      hintFraming === 'kv-stream' ? 'kv-stream' : 'length-prefixed';
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

    // Encrypt
    const keyHash = createHash('sha256');
    keyHash.update(DETERMINISTIC_ENC_SECRET, 'utf8');
    const encryptionKey = keyHash.digest();
    const padded = pkcs7Pad(plaintext, 16);
    const ciphertext = encryptAes256Cbc(padded, encryptionKey, iv);

    // Build request
    const newBlob1 = Buffer.concat([
      Buffer.from(blob1.prefix_hex, 'hex'),
      sessionId,
      Buffer.from(blob1.udid_raw_hex ?? udidString.replace(/-/g, ''), 'hex'),
      responseKey,
      authKey,
    ]);
    const full = Buffer.concat([
      Buffer.alloc(4),
      newBlob1,
      Buffer.concat([ciphertext, encryptionKey]),
    ]);
    full.writeUInt32LE(newBlob1.length, 0);
    return {
      requestB64: full.toString('base64'),
    };
  }
}
