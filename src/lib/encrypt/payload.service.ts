import { encode } from '@msgpack/msgpack';
import { createHash } from 'crypto';
import {
  deriveIvFromUdidString,
  encryptAes256Cbc,
  udidRawToCanonicalString,
  fromJsonFriendly,
  pkcs7Pad,
} from '../shared';
import { EncodeRequestInput, FramingMode } from '../models';

type BuiltEncryptedPayload = {
  requestB64: string;
  blob1: EncodeRequestInput['blob1'];
  blob2: EncodeRequestInput['blob2'];
};

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
   * Build a single request as Base64 from header fields (blob1) and a JS payload.
   *
   * @param input.blob1 Header fields in hex (prefix, session_id, udid_raw or udid_canonical, response_key, auth_key). Optional framing hint.
   * @param input.payload Arbitrary payload value; Buffers can be provided via `fromJsonFriendly` encoding.
   * @param input.DETERMINISTIC_ENC_SECRET ASCII secret used to derive the 32-byte AES-256 key (SHA-256).
   * @returns An object containing the Base64-encoded request buffer as `requestB64`.
   * @throws If mandatory fields are missing or have invalid sizes (e.g., session_id != 16B, response_key != 32B).
   */
  build(
    input: EncodeRequestInput & {
      DETERMINISTIC_ENC_SECRET: string;
    },
  ): BuiltEncryptedPayload {
    const { blob1, blob2, DETERMINISTIC_ENC_SECRET, framing = FramingMode.LengthPrefixed } = input;
    switch (framing) {
      case FramingMode.LengthPrefixed: {
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
        const authKeyHex = blob1.auth_key_hex;
        const authKey = authKeyHex ? Buffer.from(authKeyHex, 'hex') : Buffer.alloc(0);
        if (authKey.length !== 0 && authKey.length !== 48) {
          throw new Error('auth_key_hex must be 48B when provided');
        }
        // Build plaintext;
        const payloadObj = fromJsonFriendly(blob2);
        let plaintext: Buffer;
        const packed = Buffer.from(encode(payloadObj));
        const prefixed = Buffer.concat([Buffer.alloc(4), packed]);
        prefixed.writeUInt32LE(packed.length, 0);
        plaintext = prefixed;
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
          ...(authKey.length ? [authKey] : []),
        ]);
        const full = Buffer.concat([
          Buffer.alloc(4),
          newBlob1,
          Buffer.concat([ciphertext, encryptionKey]),
        ]);
        full.writeUInt32LE(newBlob1.length, 0);
        return {
          requestB64: full.toString('base64'),
          blob1,
          blob2,
        };
      }
      /**
       * blob1:
       *  blob1 length [4 bytes]
       *  prefix [52 bytes]
       *  session_id [16 bytes]
       *  udid [16 bytes]
       *  random bytes [32 bytes]
       * blob2:
       *  [encrypted message]
       *  key [32 bytes, randomly generated]
       */
      case FramingMode.KvStream: {
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
        // Build plaintext
        const payloadObj = fromJsonFriendly(blob2);
        let plaintext: Buffer;
        if (!payloadObj || typeof payloadObj !== 'object' || Array.isArray(payloadObj)) {
          throw new Error('kv-stream framing requires object payload');
        }
        const parts: Buffer[] = [];
        for (const [k, v] of Object.entries(payloadObj)) {
          parts.push(Buffer.from(encode(String(k))));
          parts.push(Buffer.from(encode(v)));
        }
        plaintext = Buffer.concat(parts);
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
          Buffer.from(
            createHash('sha256')
              .update('resp:' + udidString, 'utf8')
              .digest()
              .toString('hex'),
            'hex',
          ),
        ]);
        const newBlob2 = Buffer.concat([
          ciphertext,
          Buffer.from(
            createHash('sha256')
              .update('auth:' + udidString, 'utf8')
              .digest()
              .toString('hex'),
            'hex',
          ),
        ]);
        const full = Buffer.concat([Buffer.alloc(4), newBlob1, newBlob2]);
        full.writeUInt32LE(newBlob1.length, 0);
        return {
          requestB64: full.toString('base64'),
          blob1,
          blob2,
        };
      }
    }
  }
}
