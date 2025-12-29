import { toJsonCompatible } from '../utils';
import { decryptBlob2, Unpacker } from './utils';
import { blob1ToJson, decodeRequestContextFromBase64 } from './utils/request-context.util';

/**
 * Decode request Base64 buffers into header fields and a printable payload.
 * No filesystem access; suitable for programmatic use and tests.
 *
 * @public
 */
export class DecryptRequestService {
  /**
   * Decode a single request provided as a Base64 string.
   *
   * @param requestB64 Base64-encoded request buffer: [4B LE blob1_len][blob1][blob2].
   * @returns `{ blob1, blob2, plaintext }` where `blob1` has hex strings, `blob2` is JSON-compatible, and `plaintext` is the decrypted payload bytes.
   */
  decodeFromBase64(requestB64: string) {
    const ctx = decodeRequestContextFromBase64(requestB64);
    const { plaintext, keyUsed } = decryptBlob2(ctx.request.blob2, ctx.iv);
    const unpacker = new Unpacker();
    const payload = unpacker.execute(plaintext);
    const printable = toJsonCompatible(payload);
    return {
      blob1: blob1ToJson(ctx.header, ctx.udidCanonical, keyUsed),
      blob2: printable,
      plaintext,
    };
  }
}
