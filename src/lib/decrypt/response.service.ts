import { udidRawToCanonicalString, deriveIvFromUdidString, toJsonCompatible } from '../shared';
import { decryptBlob2, Unpacker } from './shared';
import { ParsedRequest } from '../models';

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
    const reqRaw = Buffer.from(requestB64, 'base64');
    const parsedReq = ParsedRequest.parse(reqRaw);
    const reqHeader = parsedReq.blob1;
    const udidStr = udidRawToCanonicalString(reqHeader.udid_raw);
    const iv = deriveIvFromUdidString(udidStr);
    const respRaw = Buffer.from(responseB64, 'base64');
    const { plaintext, keyUsed } = decryptBlob2(respRaw, iv);
    const unpacker = new Unpacker();
    const payload = unpacker.execute(plaintext);
    const printable = toJsonCompatible(payload);
    const headerJson = {
      viewer_id: reqHeader.viewer_id,
      prefix_hex: reqHeader.prefix.toString('hex'),
      prefix_len: reqHeader.prefix.length,
      session_id_hex: reqHeader.session_id.toString('hex'),
      udid_raw_hex: reqHeader.udid_raw.toString('hex'),
      udid_canonical: udidStr,
      response_key_hex: reqHeader.response_key.toString('hex'),
      auth_key_hex: reqHeader.auth_key.toString('hex'),
      encryption_key_hex: keyUsed.toString('hex'),
    };
    return {
      blob1: headerJson,
      blob2: printable,
      plaintext,
    };
  }
}
