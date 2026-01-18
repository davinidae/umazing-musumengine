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
/**
 * EncryptPayloadService.
 */
export class EncryptPayloadService {
  /**
   * resolveUdid.
   * @param blob1 - Type: `{ viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>`.
   * @returns Type: `{ udidString: string; udidRawHex: string; }`.
   */
  private resolveUdid(blob1: EncodeRequestInput['blob1']): {
    udidString: string;
    udidRawHex: string;
  } {
    if (typeof blob1.udid_raw === 'string') {
      /**
       * udidString.
       * @remarks Type: `string`.
       * @defaultValue `blob1.udid_raw`
       */
      const udidString = blob1.udid_raw;
      /**
       * udidRawHex.
       * @remarks Type: `string`.
       * @defaultValue `udidString.replace(/-/g, '')`
       */
      const udidRawHex = udidString.replace(/-/g, '');
      if (udidRawHex.length !== 32) {
        throw new Error(
          `udid_raw must describe 16 bytes (32 hex chars after stripping '-'), got ${udidRawHex.length}`,
        );
      }
      return {
        udidString,
        udidRawHex,
      };
    }
    if (typeof blob1.udid === 'string') {
      if (blob1.udid.length !== 32) {
        throw new Error(`udid must be 16 bytes (32 hex chars), got ${blob1.udid.length}`);
      }
      /**
       * udidString.
       * @remarks Type: `string`.
       * @defaultValue `udidRawToCanonicalString(Buffer.from(blob1.udid, 'hex'))`
       */
      const udidString = udidRawToCanonicalString(Buffer.from(blob1.udid, 'hex'));
      return {
        udidString,
        udidRawHex: blob1.udid,
      };
    }
    throw new Error('UDID is required (udid_raw or udid)');
  }

  /**
   * sha256Key.
   * @param secret - Type: `string`.
   * @returns Type: `Buffer<ArrayBufferLike>`.
   */
  private sha256Key(secret: string): Buffer {
    /**
     * keyHash.
     * @remarks Type: `Hash`.
     * @defaultValue `createHash('sha256')`
     */
    const keyHash = createHash('sha256');
    keyHash.update(secret, 'utf8');
    return keyHash.digest();
  }

  /**
   * resolveSessionId.
   * @param sessionIdHex - Type: `string | undefined`.
   * @returns Type: `Buffer<ArrayBufferLike>`.
   */
  private resolveSessionId(sessionIdHex: string | undefined): Buffer {
    if (!sessionIdHex) {
      throw new Error('session_id is required');
    }
    /**
     * sessionId.
     * @remarks Type: `Buffer<ArrayBuffer>`.
     * @defaultValue `Buffer.from(sessionIdHex, 'hex')`
     */
    const sessionId = Buffer.from(sessionIdHex, 'hex');
    if (sessionId.length !== 16) {
      throw new Error(`session_id must be 16 bytes, got ${sessionId.length}`);
    }
    return sessionId;
  }

  /**
   * requireResponseKeyHex.
   * @param blob1 - Type: `{ viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>`.
   * @returns Type: `string`.
   */
  private requireResponseKeyHex(blob1: EncodeRequestInput['blob1']): string {
    /**
     * respKeyHex.
     * @remarks Type: `string`.
     * @defaultValue `blob1.response_key`
     */
    const respKeyHex = blob1.response_key;
    if (!respKeyHex) {
      throw new Error('response_key is required');
    }
    return respKeyHex;
  }

  /**
   * resolveResponseKey.
   * @param blob1 - Type: `{ viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>`.
   * @returns Type: `Buffer<ArrayBufferLike>`.
   */
  private resolveResponseKey(blob1: EncodeRequestInput['blob1']): Buffer {
    /**
     * respKeyHex.
     * @remarks Type: `string`.
     * @defaultValue `this.requireResponseKeyHex(blob1)`
     */
    const respKeyHex = this.requireResponseKeyHex(blob1);
    /**
     * responseKey.
     * @remarks Type: `Buffer<ArrayBuffer>`.
     * @defaultValue `Buffer.from(respKeyHex, 'hex')`
     */
    const responseKey = Buffer.from(respKeyHex, 'hex');
    if (responseKey.length !== 32) {
      throw new Error(`response_key must be 32 bytes, got ${responseKey.length}`);
    }
    return responseKey;
  }

  /**
   * resolveAuthKey.
   * @param blob1 - Type: `{ viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>`.
   * @returns Type: `Buffer<ArrayBufferLike>`.
   */
  private resolveAuthKey(blob1: EncodeRequestInput['blob1']): Buffer {
    /**
     * authKey.
     * @remarks Type: `Buffer<ArrayBuffer>`.
     * @defaultValue `blob1.auth_key ? Buffer.from(blob1.auth_key, 'hex') : Buffer.alloc(0)`
     */
    const authKey = blob1.auth_key ? Buffer.from(blob1.auth_key, 'hex') : Buffer.alloc(0);
    if (authKey.length !== 0 && authKey.length !== 48) {
      throw new Error(`auth_key must be 48 bytes when provided, got ${authKey.length}`);
    }
    return authKey;
  }

  /**
   * buildLengthPrefixedRequest.
   * @param input - Type: `{ blob1: { viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>; blob2: unknown; DETERMINISTIC_ENC_SECRET: string; }`.
   * @returns Type: `{ requestB64: string; blob1: { viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>; blob2: unknown; }`.
   */
  private buildLengthPrefixedRequest(input: {
    blob1: EncodeRequestInput['blob1'];
    blob2: EncodeRequestInput['blob2'];
    DETERMINISTIC_ENC_SECRET: string;
  }): {
    requestB64: string;
    blob1: EncodeRequestInput['blob1'];
    blob2: EncodeRequestInput['blob2'];
  } {
    /**
     * { blob1, blob2, DETERMINISTIC_ENC_SECRET }.
     * @remarks Type: `{ blob1: { viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>; blob2: unknown; DETERMINISTIC_ENC_SECRET: string; }`.
     * @defaultValue `input`
     */
    const { blob1, blob2, DETERMINISTIC_ENC_SECRET } = input;

    /**
     * { udidString, udidRawHex }.
     * @remarks Type: `{ udidString: string; udidRawHex: string; }`.
     * @defaultValue `this.resolveUdid(blob1)`
     */
    const { udidString, udidRawHex } = this.resolveUdid(blob1);
    /**
     * iv.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `deriveIvFromUdidString(udidString)`
     */
    const iv = deriveIvFromUdidString(udidString);
    /**
     * sessionId.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `this.resolveSessionId(blob1.session_id)`
     */
    const sessionId = this.resolveSessionId(blob1.session_id);
    /**
     * responseKey.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `this.resolveResponseKey(blob1)`
     */
    const responseKey = this.resolveResponseKey(blob1);
    /**
     * authKey.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `this.resolveAuthKey(blob1)`
     */
    const authKey = this.resolveAuthKey(blob1);

    /**
     * payloadObj.
     * @remarks Type: `unknown`.
     * @defaultValue `fromJsonFriendly(blob2)`
     */
    const payloadObj = fromJsonFriendly(blob2);
    /**
     * packed.
     * @remarks Type: `Uint8Array<ArrayBufferLike>`.
     * @defaultValue `encode(payloadObj)`
     */
    const packed = encode(payloadObj);
    /**
     * plaintext.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `buildLengthPrefixedPayload(packed)`
     */
    const plaintext = buildLengthPrefixedPayload(packed);

    /**
     * encryptionKey.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `this.sha256Key(DETERMINISTIC_ENC_SECRET)`
     */
    const encryptionKey = this.sha256Key(DETERMINISTIC_ENC_SECRET);
    /**
     * padded.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `pkcs7Pad(plaintext, 16)`
     */
    const padded = pkcs7Pad(plaintext, 16);
    /**
     * ciphertext.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `encryptAes256Cbc(padded, encryptionKey, iv)`
     */
    const ciphertext = encryptAes256Cbc(padded, encryptionKey, iv);

    /**
     * newBlob1.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `buildBlob1Buffer({ prefix: Buffer.from(blob1.prefix, 'hex'), sessionId, udidRaw: Buffer.from(udidRawHex, 'hex'), responseKey, authKey, …`
     */
    const newBlob1 = buildBlob1Buffer({
      prefix: Buffer.from(blob1.prefix, 'hex'),
      sessionId,
      udidRaw: Buffer.from(udidRawHex, 'hex'),
      responseKey,
      authKey,
    });
    /**
     * full.
     * @remarks Type: `Buffer<ArrayBuffer>`.
     * @defaultValue `Buffer.concat([ Buffer.alloc(4), newBlob1, Buffer.concat([ciphertext, encryptionKey]), ])`
     */
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
   * buildKvStreamRequest.
   * @param input - Type: `{ blob1: { viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>; blob2: unknown; DETERMINISTIC_ENC_SECRET: string; }`.
   * @returns Type: `{ requestB64: string; blob1: { viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>; blob2: unknown; }`.
   */
  private buildKvStreamRequest(input: {
    blob1: EncodeRequestInput['blob1'];
    blob2: EncodeRequestInput['blob2'];
    DETERMINISTIC_ENC_SECRET: string;
  }): {
    requestB64: string;
    blob1: EncodeRequestInput['blob1'];
    blob2: EncodeRequestInput['blob2'];
  } {
    /**
     * { blob1, blob2, DETERMINISTIC_ENC_SECRET }.
     * @remarks Type: `{ blob1: { viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>; blob2: unknown; DETERMINISTIC_ENC_SECRET: string; }`.
     * @defaultValue `input`
     */
    const { blob1, blob2, DETERMINISTIC_ENC_SECRET } = input;

    /**
     * { udidString, udidRawHex }.
     * @remarks Type: `{ udidString: string; udidRawHex: string; }`.
     * @defaultValue `this.resolveUdid(blob1)`
     */
    const { udidString, udidRawHex } = this.resolveUdid(blob1);
    /**
     * iv.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `deriveIvFromUdidString(udidString)`
     */
    const iv = deriveIvFromUdidString(udidString);
    /**
     * sessionId.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `this.resolveSessionId(blob1.session_id)`
     */
    const sessionId = this.resolveSessionId(blob1.session_id);
    // Preserve previous behavior: require response_key even though kv-stream derives its own response key.
    this.requireResponseKeyHex(blob1);

    /**
     * payloadObj.
     * @remarks Type: `unknown`.
     * @defaultValue `fromJsonFriendly(blob2)`
     */
    const payloadObj = fromJsonFriendly(blob2);
    if (!payloadObj || typeof payloadObj !== 'object' || Array.isArray(payloadObj)) {
      throw new Error('kv-stream framing requires an object payload');
    }

    /**
     * entries.
     * @remarks Type: `[string, any][]`.
     * @defaultValue `Object.entries(payloadObj)`
     */
    const entries = Object.entries(payloadObj);
    /**
     * parts.
     * @remarks Type: `Buffer<ArrayBufferLike>[]`.
     * @defaultValue `[]`
     */
    const parts: Buffer[] = [];
    /**
     * [k, v].
     * @remarks Type: `[string, any]`.
     */
    for (const [k, v] of entries) {
      parts.push(Buffer.from(encode(String(k))));
      parts.push(Buffer.from(encode(v)));
    }
    /**
     * plaintext.
     * @remarks Type: `Buffer<ArrayBuffer>`.
     * @defaultValue `Buffer.concat(parts)`
     */
    const plaintext = Buffer.concat(parts);

    /**
     * encryptionKey.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `this.sha256Key(DETERMINISTIC_ENC_SECRET)`
     */
    const encryptionKey = this.sha256Key(DETERMINISTIC_ENC_SECRET);
    /**
     * padded.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `pkcs7Pad(plaintext, 16)`
     */
    const padded = pkcs7Pad(plaintext, 16);
    /**
     * ciphertext.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `encryptAes256Cbc(padded, encryptionKey, iv)`
     */
    const ciphertext = encryptAes256Cbc(padded, encryptionKey, iv);

    /**
     * derivedResponseKey.
     * @remarks Type: `Buffer<ArrayBuffer>`.
     * @defaultValue `Buffer.from( createHash('sha256') .update('resp:' + udidString, 'utf8') .digest(), )`
     */
    const derivedResponseKey = Buffer.from(
      createHash('sha256')
        .update('resp:' + udidString, 'utf8')
        .digest(),
    );
    /**
     * newBlob1.
     * @remarks Type: `Buffer<ArrayBufferLike>`.
     * @defaultValue `buildBlob1Buffer({ prefix: Buffer.from(blob1.prefix, 'hex'), sessionId, udidRaw: Buffer.from(udidRawHex, 'hex'), responseKey: derivedRe…`
     */
    const newBlob1 = buildBlob1Buffer({
      prefix: Buffer.from(blob1.prefix, 'hex'),
      sessionId,
      udidRaw: Buffer.from(udidRawHex, 'hex'),
      responseKey: derivedResponseKey,
    });
    /**
     * newBlob2.
     * @remarks Type: `Buffer<ArrayBuffer>`.
     * @defaultValue `Buffer.concat([ ciphertext, Buffer.from( createHash('sha256') .update('auth:' + udidString, 'utf8') .digest() .toString('hex'), 'hex', ), ])`
     */
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

    /**
     * full.
     * @remarks Type: `Buffer<ArrayBuffer>`.
     * @defaultValue `Buffer.concat([Buffer.alloc(4), newBlob1, newBlob2])`
     */
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
   * @param input.blob1 Header fields in hex (prefix, session_id, udid_raw or udid_raw, response_key, auth_key). Optional framing hint.
   * @param input.payload Arbitrary payload value; Buffers can be provided via `fromJsonFriendly` encoding.
   * @param input.DETERMINISTIC_ENC_SECRET ASCII secret used to derive the 32-byte AES-256 key (SHA-256).
   * @returns An object containing the Base64-encoded request buffer as `requestB64`.
   * @throws If mandatory fields are missing or have invalid sizes (e.g., session_id != 16B, response_key != 32B).
   */
  /**
   * build.
   * @param input - Type: `{ blob1: { viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>; blob2: unknown; } & Partial<{ framing: FramingMode; }> & { DETERMINISTIC_ENC_SECRET: string; }`.
   * @returns Type: `{ requestB64: string; blob1: { viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>; blob2: unknown; }`.
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
    /**
     * { blob1, blob2, DETERMINISTIC_ENC_SECRET, framing = FramingMode.LengthPrefixed }.
     * @remarks Type: `{ blob1: { viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>; blob2: unknown; } & Partial<{ framing: FramingMode; }> & { DETERMINISTIC_ENC_SECRET: string; }`.
     * @defaultValue `input`
     */
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
