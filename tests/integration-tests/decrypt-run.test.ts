import { describe, test, expect, beforeAll, afterAll } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import * as decReq from '../../src/decrypt/request';
import * as decResp from '../../src/decrypt/response';

const outRoot = path.join('decrypt', 'output', 'example');

function rmrf(p: string) {
  fs.rmSync(p, { recursive: true, force: true });
}

describe('decrypt run() end-to-end', () => {
  beforeAll(() => {
    // Clean outputs for deterministic assertions
    rmrf(outRoot);
  });

  afterAll(() => {
    // leave outputs for inspection on failure runs
  });

  test('request.run processes example pack and writes outputs', async () => {
    const code = await decReq.run();
    expect(code).toBe(0);

    const reqOut = path.join(outRoot, 'request');
    const binPath = path.join(reqOut, 'decoded.bin');
    const jsonPath = path.join(reqOut, 'decoded.json');

    expect(fs.existsSync(binPath)).toBe(true);
    expect(fs.existsSync(jsonPath)).toBe(true);

    const parsed = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')) as any;
    // Has blob1 & blob2
    expect(parsed).toHaveProperty('blob1');
    expect(parsed).toHaveProperty('blob2');

    // Ensure essential header fields exist and look sane
    expect(typeof parsed.blob1.prefix_hex).toBe('string');
    expect(parsed.blob1.session_id_hex).toMatch(/^[0-9a-f]{32}$/);
    expect(parsed.blob1.udid_canonical).toMatch(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
    );
    expect(parsed.blob1.response_key_hex).toMatch(/^[0-9a-f]{64}$/);
    expect(parsed.blob1.auth_key_hex).toMatch(/^[0-9a-f]+$/);
    expect(parsed.blob1.encryption_key_hex).toMatch(/^[0-9a-f]{64}$/);

    // blob2 should be an object with several keys
    expect(typeof parsed.blob2).toBe('object');
    expect(Object.keys(parsed.blob2).length).toBeGreaterThan(1);
  });

  test('response.run uses sibling request.txt and writes outputs', async () => {
    const code = await decResp.run();
    expect(code).toBe(0);

    const respOut = path.join(outRoot, 'response');
    const binPath = path.join(respOut, 'decoded.bin');
    const jsonPath = path.join(respOut, 'decoded.json');

    expect(fs.existsSync(binPath)).toBe(true);
    expect(fs.existsSync(jsonPath)).toBe(true);

    const parsed = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')) as any;
    expect(parsed).toHaveProperty('blob1');
    expect(parsed).toHaveProperty('blob2');

    // Ensure header derived from request, not response
    expect(parsed.blob1.udid_canonical).toMatch(/^[0-9a-f-]{36}$/);
    expect(parsed.blob1.encryption_key_hex).toMatch(/^[0-9a-f]{64}$/);

    // Response blob2 should also be an object
    expect(typeof parsed.blob2).toBe('object');
  });
});
