import { describe, test, expect } from 'vitest';
import path from 'node:path';
import {
  readBase64File,
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
} from '../../src/common/protocol';
import { decryptBlob2, unpackLengthPrefixedMsgpack } from '../../src/decrypt/common';

const inRoot = path.join(process.cwd(), 'decrypt', 'input', 'example');

describe('decrypt example pack', () => {
  test('request.txt decodes and decrypts', () => {
    const full = path.join(inRoot, 'request.txt');
    const raw = readBase64File(full);
    const [blob1, blob2] = parseRequest(raw);
    const header = parseHeaderBlob1(blob1);
    const udid = udidRawToCanonicalString(header.udid_raw);
    const iv = deriveIvFromUdidString(udid);
    const { plaintext } = decryptBlob2(blob2, iv);
    const payload = unpackLengthPrefixedMsgpack(plaintext);
    expect(typeof payload).toBe('object');
  });

  test('response.txt decodes and decrypts using sibling UDID', () => {
    const reqRaw = readBase64File(path.join(inRoot, 'request.txt'));
    const [reqBlob1] = parseRequest(reqRaw);
    const reqHeader = parseHeaderBlob1(reqBlob1);
    const udid = udidRawToCanonicalString(reqHeader.udid_raw);
    const iv = deriveIvFromUdidString(udid);
    const respRaw = readBase64File(path.join(inRoot, 'response.txt'));
    const { plaintext } = decryptBlob2(respRaw, iv);
    const payload = unpackLengthPrefixedMsgpack(plaintext);
    expect(typeof payload).toBe('object');
  });
});
