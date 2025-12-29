import { toJsonCompatible } from '../utils';
import { decryptBlob2, Unpacker } from './utils';
import { blob1ToJson, decodeRequestContextFromBase64 } from './utils/request-context.util';

/**
 * Decode response Base64 buffers using the matching request for UDID/IV.
 * The request blob1 provides UDID to derive the IV; the response is a raw blob2 buffer in Base64.
 *
 * @public
 */
/**
 * DecryptResponseService.
 */
export class DecryptResponseService {
  /**
   * Decode a single response provided as a Base64 string, using its matching request.
   *
   * @param requestB64 Base64-encoded full request used to extract UDID and derive IV.
   * @param responseB64 Base64-encoded blob2 (ciphertext+key) buffer from the server.
   * @returns `{ blob1, blob2, plaintext }` where `blob1` mirrors the request header (hex strings), `blob2` is JSON-compatible payload, and `plaintext` is decrypted bytes.
   */
  /**
   * decodeFromBase64.
   * @param requestB64 - Type: `string`.
   * @param responseB64 - Type: `string`.
   * @returns Type: `{ blob1: Blob1Json; blob2: unknown; plaintext: Buffer<ArrayBufferLike>; }`.
   */
  decodeFromBase64(requestB64: string, responseB64: string) {
    /**
     * ctx.
     * @remarks Type: `RequestContext`.
     * @defaultValue `decodeRequestContextFromBase64(requestB64)`
     */
    const ctx = decodeRequestContextFromBase64(requestB64);
    /**
     * respRaw.
     * @remarks Type: `Buffer<ArrayBuffer>`.
     * @defaultValue `Buffer.from(responseB64, 'base64')`
     */
    const respRaw = Buffer.from(responseB64, 'base64');
    /**
     * { plaintext, keyUsed }.
     * @remarks Type: `{ plaintext: Buffer<ArrayBufferLike>; keyUsed: Buffer<ArrayBufferLike>; }`.
     * @defaultValue `decryptBlob2(respRaw, ctx.iv)`
     */
    const { plaintext, keyUsed } = decryptBlob2(respRaw, ctx.iv);
    /**
     * unpacker.
     * @remarks Type: `Unpacker`.
     * @defaultValue `new Unpacker()`
     */
    const unpacker = new Unpacker();
    /**
     * payload.
     * @remarks Type: `unknown`.
     * @defaultValue `unpacker.execute(plaintext)`
     */
    const payload = unpacker.execute(plaintext);
    /**
     * printable.
     * @remarks Type: `unknown`.
     * @defaultValue `toJsonCompatible(payload)`
     */
    const printable = toJsonCompatible(payload);
    return {
      blob1: blob1ToJson(ctx.header, ctx.udidCanonical, keyUsed),
      blob2: printable,
      plaintext,
    };
  }
}
