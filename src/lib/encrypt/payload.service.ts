import { encode } from '@msgpack/msgpack';
import { createHash } from 'crypto';
import {
  deriveIvFromUdidString,
  encryptAes256Cbc,
  udidRawToCanonicalString,
  fromJsonFriendly,
  pkcs7Pad,
  buildLengthPrefixedPayload,
  buildBlob1Buffer,
} from '../utils';
import { FramingMode } from '../models';
import type { EncodeRequestInput } from '../models';

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
  private resolveUdid(blob1: EncodeRequestInput['blob1']): {
    udidString: string;
    udidRawHex: string;
  } {
    if (typeof blob1.udid_canonical === 'string') {
      const udidString = blob1.udid_canonical;
      const udidRawHex = udidString.replace(/-/g, '');
      if (udidRawHex.length !== 32) {
        throw new Error(
          `udid_canonical must describe 16 bytes (32 hex chars after stripping '-'), got ${udidRawHex.length}`,
        );
      }
      return {
        udidString,
        udidRawHex,
      };
    }
    if (typeof blob1.udid_raw_hex === 'string') {
      if (blob1.udid_raw_hex.length !== 32) {
        throw new Error(
          `udid_raw_hex must be 16 bytes (32 hex chars), got ${blob1.udid_raw_hex.length}`,
        );
      }
      const udidString = udidRawToCanonicalString(Buffer.from(blob1.udid_raw_hex, 'hex'));
      return {
        udidString,
        udidRawHex: blob1.udid_raw_hex,
      };
    }
    throw new Error('UDID is required (udid_canonical or udid_raw_hex)');
  }

  private sha256Key(secret: string): Buffer {
    const keyHash = createHash('sha256');
    keyHash.update(secret, 'utf8');
    return keyHash.digest();
  }

  private resolveSessionId(sessionIdHex: string | undefined): Buffer {
    if (!sessionIdHex) {
      throw new Error('session_id_hex is required');
    }
    const sessionId = Buffer.from(sessionIdHex, 'hex');
    if (sessionId.length !== 16) {
      throw new Error(`session_id_hex must be 16 bytes, got ${sessionId.length}`);
    }
    return sessionId;
  }

  private requireResponseKeyHex(blob1: EncodeRequestInput['blob1']): string {
    const respKeyHex = blob1.response_key_hex;
    if (!respKeyHex) {
      throw new Error('response_key_hex is required');
    }
    return respKeyHex;
  }

  private resolveResponseKey(blob1: EncodeRequestInput['blob1']): Buffer {
    const respKeyHex = this.requireResponseKeyHex(blob1);
    const responseKey = Buffer.from(respKeyHex, 'hex');
    if (responseKey.length !== 32) {
      throw new Error(`response_key_hex must be 32 bytes, got ${responseKey.length}`);
    }
    return responseKey;
  }

  private resolveAuthKey(blob1: EncodeRequestInput['blob1']): Buffer {
    const authKeyHex = blob1.auth_key_hex;
    const authKey = authKeyHex ? Buffer.from(authKeyHex, 'hex') : Buffer.alloc(0);
    if (authKey.length !== 0 && authKey.length !== 48) {
      throw new Error(`auth_key_hex must be 48 bytes when provided, got ${authKey.length}`);
    }
    return authKey;
  }

  private buildLengthPrefixedRequest(input: {
    blob1: EncodeRequestInput['blob1'];
    blob2: EncodeRequestInput['blob2'];
    DETERMINISTIC_ENC_SECRET: string;
  }): {
    requestB64: string;
    blob1: EncodeRequestInput['blob1'];
    blob2: EncodeRequestInput['blob2'];
  } {
    const { blob1, blob2, DETERMINISTIC_ENC_SECRET } = input;

    const { udidString, udidRawHex } = this.resolveUdid(blob1);
    const iv = deriveIvFromUdidString(udidString);
    const sessionId = this.resolveSessionId(blob1.session_id_hex);
    const responseKey = this.resolveResponseKey(blob1);
    const authKey = this.resolveAuthKey(blob1);

    const payloadObj = fromJsonFriendly(blob2);
    const packed = encode(payloadObj);
    const plaintext = buildLengthPrefixedPayload(packed);

    const encryptionKey = this.sha256Key(DETERMINISTIC_ENC_SECRET);
    const padded = pkcs7Pad(plaintext, 16);
    const ciphertext = encryptAes256Cbc(padded, encryptionKey, iv);

    const newBlob1 = buildBlob1Buffer({
      prefix: Buffer.from(blob1.prefix_hex, 'hex'),
      sessionId,
      udidRaw: Buffer.from(udidRawHex, 'hex'),
      responseKey,
      authKey,
    });
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

  private buildKvStreamRequest(input: {
    blob1: EncodeRequestInput['blob1'];
    blob2: EncodeRequestInput['blob2'];
    DETERMINISTIC_ENC_SECRET: string;
  }): {
    requestB64: string;
    blob1: EncodeRequestInput['blob1'];
    blob2: EncodeRequestInput['blob2'];
  } {
    const { blob1, blob2, DETERMINISTIC_ENC_SECRET } = input;

    const { udidString, udidRawHex } = this.resolveUdid(blob1);
    const iv = deriveIvFromUdidString(udidString);
    const sessionId = this.resolveSessionId(blob1.session_id_hex);
    // Preserve previous behavior: require response_key_hex even though kv-stream derives its own response key.
    this.requireResponseKeyHex(blob1);

    const payloadObj = fromJsonFriendly(blob2);
    if (!payloadObj || typeof payloadObj !== 'object' || Array.isArray(payloadObj)) {
      throw new Error('kv-stream framing requires an object payload');
    }

    const entries = Object.entries(payloadObj);
    const parts: Buffer[] = [];
    for (const [k, v] of entries) {
      parts.push(Buffer.from(encode(String(k))));
      parts.push(Buffer.from(encode(v)));
    }
    const plaintext = Buffer.concat(parts);

    const encryptionKey = this.sha256Key(DETERMINISTIC_ENC_SECRET);
    const padded = pkcs7Pad(plaintext, 16);
    const ciphertext = encryptAes256Cbc(padded, encryptionKey, iv);

    const derivedResponseKey = Buffer.from(
      createHash('sha256')
        .update('resp:' + udidString, 'utf8')
        .digest(),
    );
    const newBlob1 = buildBlob1Buffer({
      prefix: Buffer.from(blob1.prefix_hex, 'hex'),
      sessionId,
      udidRaw: Buffer.from(udidRawHex, 'hex'),
      responseKey: derivedResponseKey,
    });
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
  ): {
    requestB64: string;
    blob1: EncodeRequestInput['blob1'];
    blob2: EncodeRequestInput['blob2'];
  } {
    const { blob1, blob2, DETERMINISTIC_ENC_SECRET, framing = FramingMode.LengthPrefixed } = input;
    switch (framing) {
      case FramingMode.LengthPrefixed: {
        return this.buildLengthPrefixedRequest({
          blob1,
          blob2,
          DETERMINISTIC_ENC_SECRET,
        });
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
        return this.buildKvStreamRequest({
          blob1,
          blob2,
          DETERMINISTIC_ENC_SECRET,
        });
      }
    }
  }
}
