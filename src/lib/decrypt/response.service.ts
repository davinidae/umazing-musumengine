import { toJsonCompatible } from '../utils';
import { decryptBlob2, Unpacker } from './utils';
import { blob1ToJson, decodeRequestContextFromBase64 } from './utils/request-context.util';

/**
 * Decode response Base64 buffers using the matching request for UDID/IV.
 * The request blob1 provides UDID to derive the IV; the response is a raw blob2 buffer in Base64.
 *
 * @public
 */
export class DecryptResponseService {
  /**
   * Decode a single response provided as a Base64 string, using its matching request.
   *
   * @param requestB64 Base64-encoded full request used to extract UDID and derive IV.
   * @param responseB64 Base64-encoded blob2 (ciphertext+key) buffer from the server.
   * @returns `{ blob1, blob2, plaintext }` where `blob1` mirrors the request header (hex strings), `blob2` is JSON-compatible payload, and `plaintext` is decrypted bytes.
   */
  decodeFromBase64(requestB64: string, responseB64: string) {
    const ctx = decodeRequestContextFromBase64(requestB64);
    const respRaw = Buffer.from(responseB64, 'base64');
    const { plaintext, keyUsed } = decryptBlob2(respRaw, ctx.iv);
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
