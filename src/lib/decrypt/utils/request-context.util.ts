import { deriveIvFromUdidString, parseParsedRequest, udidRawToCanonicalString } from '../../utils';
import type { EncodeRequestInput } from '../../models';

type Blob1Header = ReturnType<typeof parseParsedRequest>['blob1'];

export type RequestContext = {
  request: ReturnType<typeof parseParsedRequest>;
  header: Blob1Header;
  udidRaw: string;
  iv: Buffer;
};

export type Blob1Json = EncodeRequestInput['blob1'] & {
  prefix_len: number;
  encryption_key: string;
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
   * udidRaw.
   * @remarks Type: `string`.
   * @defaultValue `udidRawToCanonicalString(header.udid_raw)`
   */
  const udidRaw = udidRawToCanonicalString(header.udid_raw);
  /**
   * iv.
   * @remarks Type: `Buffer<ArrayBufferLike>`.
   * @defaultValue `deriveIvFromUdidString(udidRaw)`
   */
  const iv = deriveIvFromUdidString(udidRaw);
  return {
    request,
    header,
    udidRaw,
    iv,
  };
}

/**
 * blob1ToJson.
 * @param header - Type: `Blob1Header`.
 * @param udidRaw - Type: `string`.
 * @param keyUsed - Type: `Buffer<ArrayBufferLike>`.
 * @returns Type: `Blob1Json`.
 */
export function blob1ToJson(header: Blob1Header, udidRaw: string, keyUsed: Buffer): Blob1Json {
  /**
   * out.
   * @remarks Type: `Blob1Json`.
   * @defaultValue `{ viewer_id: header.viewer_id, prefix: header.prefix.toString('hex'), prefix_len: header.prefix.length, session_id: header.session_…`
   */
  const out: Blob1Json = {
    viewer_id: header.viewer_id,
    prefix: header.prefix.toString('hex'),
    prefix_len: header.prefix.length,
    session_id: header.session_id.toString('hex'),
    udid_raw: udidRaw,
    udid: header.udid_raw.toString('hex'),
    response_key: header.response_key.toString('hex'),
    auth_key: header.auth_key.length === 0 ? null : header.auth_key.toString('hex'),
    encryption_key: keyUsed.toString('hex'),
  };
  return out;
}
