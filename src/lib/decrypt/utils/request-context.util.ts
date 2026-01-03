import { deriveIvFromUdidString, parseParsedRequest, udidRawToCanonicalString } from '../../utils';
import type { EncodeRequestInput } from '../../models';

type Blob1Header = ReturnType<typeof parseParsedRequest>['blob1'];

export type RequestContext = {
  request: ReturnType<typeof parseParsedRequest>;
  header: Blob1Header;
  udidCanonical: string;
  iv: Buffer;
};

type Blob1Json = EncodeRequestInput['blob1'] & {
  prefix_len: number;
  encryption_key_hex: string;
  encryption_key_b64: string;
};

/**
 * decodeRequestContextFromBase64.
 * @param requestB64 - Type: `string`.
 * @returns Type: `RequestContext`.
 */
export function decodeRequestContextFromBase64(requestB64: string): RequestContext {
  if (!requestB64) {
    throw new Error('requestB64 is required');
  }
  /**
   * raw.
   * @remarks Type: `Buffer<ArrayBuffer>`.
   * @defaultValue `Buffer.from(requestB64, 'base64')`
   */
  const raw = Buffer.from(requestB64, 'base64');
  /**
   * request.
   * @remarks Type: `ParsedRequest`.
   * @defaultValue `parseParsedRequest(raw)`
   */
  const request = parseParsedRequest(raw);
  /**
   * header.
   * @remarks Type: `Blob1Header`.
   * @defaultValue `request.blob1`
   */
  const header = request.blob1;
  /**
   * udidCanonical.
   * @remarks Type: `string`.
   * @defaultValue `udidRawToCanonicalString(header.udid_raw)`
   */
  const udidCanonical = udidRawToCanonicalString(header.udid_raw);
  /**
   * iv.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `deriveIvFromUdidString(udidCanonical)`
   */
  const iv = deriveIvFromUdidString(udidCanonical);
  return {
    request,
    header,
    udidCanonical,
    iv,
  };
}

/**
 * blob1ToJson.
 * @param header - Type: `Blob1Header`.
 * @param udidCanonical - Type: `string`.
 * @param keyUsed - Type: `Buffer<ArrayBufferLike>`.
 * @returns Type: `Blob1Json`.
 */
export function blob1ToJson(
  header: Blob1Header,
  udidCanonical: string,
  keyUsed: Buffer,
): Blob1Json {
  /**
   * out.
   * @remarks Type: `Blob1Json`.
   * @defaultValue `{ viewer_id: header.viewer_id, prefix_hex: header.prefix.toString('hex'), prefix_len: header.prefix.length, session_id_hex: header.session_…`
   */
  const out: Blob1Json = {
    viewer_id: header.viewer_id,
    prefix_hex: header.prefix.toString('hex'),
    prefix_b64: header.prefix.toString('base64'),
    prefix_len: header.prefix.length,
    session_id_hex: header.session_id.toString('hex'),
    session_id_b64: header.session_id.toString('base64'),
    udid_raw: udidCanonical,
    udid_hex: header.udid_raw.toString('hex'),
    udid_b64: header.udid_raw.toString('base64'),
    response_key_hex: header.response_key.toString('hex'),
    response_key_b64: header.response_key.toString('base64'),
    auth_key_hex: header.auth_key.length === 0 ? null : header.auth_key.toString('hex'),
    auth_key_b64: header.auth_key.length === 0 ? null : header.auth_key.toString('base64'),
    encryption_key_hex: keyUsed.toString('hex'),
    encryption_key_b64: keyUsed.toString('base64'),
  };
  return out;
}
