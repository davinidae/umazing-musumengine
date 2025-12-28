import { describe, test, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import { DecryptRequestService } from '../../../../src';

describe('Decrypt example request (integration)', () => {
  const reqPath = path.join('decrypt', 'input', 'example', 'request.txt');

  test.runIf(fs.existsSync(reqPath))('decodes example request.txt', () => {
    const requestB64 = fs.readFileSync(reqPath, 'utf-8').trim();
    const out = new DecryptRequestService().decodeFromBase64(requestB64);
    expect(out).toHaveProperty('blob1');
    expect(out).toHaveProperty('blob2');
  });
});
