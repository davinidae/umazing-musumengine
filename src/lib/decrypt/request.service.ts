import { toJsonCompatible } from '../utils';
import { decryptBlob2, Unpacker } from './utils';
import { blob1ToJson, decodeRequestContextFromBase64 } from './utils/request-context.util';

/**
 * Decode request Base64 buffers into header fields and a printable payload.
 * No filesystem access; suitable for programmatic use and tests.
 *
 * @public
 */
/**
 * DecryptRequestService.
 */
export class DecryptRequestService {
  /**
   * Decode a single request provided as a Base64 string.
   *
   * @param requestB64 Base64-encoded request buffer: [4B LE blob1_len][blob1][blob2].
   * @returns `{ blob1, blob2, plaintext }` where `blob1` has hex strings, `blob2` is JSON-compatible, and `plaintext` is the decrypted payload bytes.
   */
  /**
   * decodeFromBase64.
   * @param requestB64 - Type: `string`.
   * @returns Type: `{ blob1: Blob1Json; blob2: unknown; plaintext: Buffer<ArrayBufferLike>; }`.
   */
  decodeFromBase64(requestB64: string) {
    /**
     * ctx.
     * @remarks Type: `RequestContext`.
     * @defaultValue `decodeRequestContextFromBase64(requestB64)`
     */
    const ctx = decodeRequestContextFromBase64(requestB64);
    /**
     * { plaintext, keyUsed }.
     * @remarks Type: `{ plaintext: Buffer<ArrayBufferLike>; keyUsed: Buffer<ArrayBufferLike>; }`.
     * @defaultValue `decryptBlob2(ctx.request.blob2, ctx.iv)`
     */
    const { plaintext, keyUsed } = decryptBlob2(ctx.request.blob2, ctx.iv);
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
      blob1: blob1ToJson(ctx.header, ctx.udidRaw, keyUsed),
      blob2: printable,
      plaintext,
    };
  }
}
