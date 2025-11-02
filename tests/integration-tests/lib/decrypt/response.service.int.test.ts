import { describe, test, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { DecryptResponseService } from '../../../../src';

describe('Decrypt example response (integration)', () => {
  const reqPath = path.join('decrypt', 'input', 'example', 'request.txt');
  const respPath = path.join('decrypt', 'input', 'example', 'response.txt');

  test.runIf(fs.existsSync(reqPath) && fs.existsSync(respPath))(
    'decodes example response.txt using request.txt',
    () => {
      const requestB64 = fs.readFileSync(reqPath, 'utf-8').trim();
      const responseB64 = fs.readFileSync(respPath, 'utf-8').trim();
      const out = new DecryptResponseService().decodeFromBase64(requestB64, responseB64);
      expect(out).toHaveProperty('blob1');
      expect(out).toHaveProperty('blob2');
    },
  );
});
