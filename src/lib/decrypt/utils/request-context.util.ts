import {
  Blob1Header,
  deriveIvFromUdidString,
  parseParsedRequest,
  udidRawToCanonicalString,
} from '../../utils';
import type { EncodeRequestInput } from '../../models';

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

export function decodeRequestContextFromBase64(requestB64: string): RequestContext {
  if (!requestB64) {
    throw new Error('requestB64 is required');
  }
  const raw = Buffer.from(requestB64, 'base64');
  const request = parseParsedRequest(raw);
  const header = request.blob1;
  const udidRaw = udidRawToCanonicalString(header.udid_raw);
  const iv = deriveIvFromUdidString(udidRaw);
  return {
    request,
    header,
    udidRaw,
    iv,
  };
}

export function blob1ToJson(header: Blob1Header, udidRaw: string, keyUsed: Buffer): Blob1Json {
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
