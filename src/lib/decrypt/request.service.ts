import { toJsonCompatible } from '../utils';
import { decryptBlob2, Unpacker } from './utils';
import { blob1ToJson, decodeRequestContextFromBase64 } from './utils/request-context.util';

export class DecryptRequestService {
  decodeFromBase64(requestB64: string) {
    const ctx = decodeRequestContextFromBase64(requestB64);
    const { plaintext, keyUsed } = decryptBlob2(ctx.request.blob2, ctx.iv);
    const unpacker = new Unpacker();
    const payload = unpacker.execute(plaintext);
    const printable = toJsonCompatible(payload);
    return {
      blob1: blob1ToJson(ctx.header, ctx.udidRaw, keyUsed),
      blob2: printable,
      plaintext,
    };
  }
}
