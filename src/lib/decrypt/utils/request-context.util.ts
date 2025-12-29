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
};

export function decodeRequestContextFromBase64(requestB64: string): RequestContext {
  if (!requestB64) {
    throw new Error('requestB64 is required');
  }
  const raw = Buffer.from(requestB64, 'base64');
  const request = parseParsedRequest(raw);
  const header = request.blob1;
  const udidCanonical = udidRawToCanonicalString(header.udid_raw);
  const iv = deriveIvFromUdidString(udidCanonical);
  return {
    request,
    header,
    udidCanonical,
    iv,
  };
}

export function blob1ToJson(
  header: Blob1Header,
  udidCanonical: string,
  keyUsed: Buffer,
): Blob1Json {
  const out: Blob1Json = {
    viewer_id: header.viewer_id,
    prefix_hex: header.prefix.toString('hex'),
    prefix_len: header.prefix.length,
    session_id_hex: header.session_id.toString('hex'),
    udid_raw_hex: header.udid_raw.toString('hex'),
    udid_canonical: udidCanonical,
    response_key_hex: header.response_key.toString('hex'),
    auth_key_hex: header.auth_key.length === 0 ? null : header.auth_key.toString('hex'),
    encryption_key_hex: keyUsed.toString('hex'),
  };
  return out;
}
