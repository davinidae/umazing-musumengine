import { describe, test, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import {
  readBase64File,
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
  decryptBlob2,
  LengthPrefixedStrategy,
} from '../../src';

const strategy = new LengthPrefixedStrategy();

const inRoot = path.join(process.cwd(), 'decrypt', 'input', 'example');

describe('decrypt example pack', () => {
  const reqPath = path.join(inRoot, 'request.txt');
  const respPath = path.join(inRoot, 'response.txt');
  test.runIf(fs.existsSync(reqPath))('request.txt decodes and decrypts', () => {
    const raw = readBase64File(reqPath);
    const [blob1, blob2] = parseRequest(raw);
    const header = parseHeaderBlob1(blob1);
    const udid = udidRawToCanonicalString(header.udid_raw);
    const iv = deriveIvFromUdidString(udid);
    const { plaintext } = decryptBlob2(blob2, iv);
    const payload = strategy.execute(plaintext);
    expect(typeof payload).toBe('object');
  });

  test.runIf(fs.existsSync(reqPath) && fs.existsSync(respPath))(
    'response.txt decodes and decrypts using sibling UDID',
    () => {
      const reqRaw = readBase64File(reqPath);
      const [reqBlob1] = parseRequest(reqRaw);
      const reqHeader = parseHeaderBlob1(reqBlob1);
      const udid = udidRawToCanonicalString(reqHeader.udid_raw);
      const iv = deriveIvFromUdidString(udid);
      const respRaw = readBase64File(respPath);
      const { plaintext } = decryptBlob2(respRaw, iv);
      const payload = strategy.execute(plaintext);
      expect(typeof payload).toBe('object');
    },
  );
});
