import { toJsonCompatible } from '../utils';
import { decryptBlob2, Unpacker } from './utils';
import { blob1ToJson, decodeRequestContextFromBase64 } from './utils/request-context.util';

export class DecryptResponseService {
  decodeFromBase64(requestB64: string, responseB64: string) {
    const ctx = decodeRequestContextFromBase64(requestB64);
    const respRaw = Buffer.from(responseB64, 'base64');
    const { plaintext, keyUsed } = decryptBlob2(respRaw, ctx.iv);
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
