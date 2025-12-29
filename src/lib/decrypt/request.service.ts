import { udidRawToCanonicalString, deriveIvFromUdidString, toJsonCompatible } from '../utils';
import { decryptBlob2, Unpacker } from './utils';
import { parseParsedRequest } from '../models';

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
    const raw = Buffer.from(requestB64, 'base64');
    const parsed = parseParsedRequest(raw);
    const header = parsed.blob1;
    const blob2 = parsed.blob2;
    const udidStr = udidRawToCanonicalString(header.udid_raw);
    const iv = deriveIvFromUdidString(udidStr);
    const { plaintext, keyUsed } = decryptBlob2(blob2, iv);
    const unpacker = new Unpacker();
    const payload = unpacker.execute(plaintext);
    const printable = toJsonCompatible(payload);
    const headerJson = {
      prefix_hex: header.prefix.toString('hex'),
      prefix_len: header.prefix.length,
      session_id_hex: header.session_id.toString('hex'),
      udid_raw_hex: header.udid_raw.toString('hex'),
      udid_canonical: udidStr,
      response_key_hex: header.response_key.toString('hex'),
      auth_key_hex: header.auth_key.toString('hex'),
      encryption_key_hex: keyUsed.toString('hex'),
    };
    return {
      blob1: headerJson,
      blob2: printable,
      plaintext,
    };
  }
}
