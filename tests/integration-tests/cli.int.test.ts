import { describe, test, expect } from 'vitest';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { encode } from '@msgpack/msgpack';
import {
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
  encryptAes256Cbc,
  pkcs7Pad,
} from '../../src';

function parseJsonFromStdout(stdout: string): any {
  const start = stdout.indexOf('{');
  const end = stdout.lastIndexOf('}');
  if (start === -1 || end === -1 || end < start) {
    throw new SyntaxError('Could not locate JSON payload in stdout');
  }
  const slice = stdout.slice(start, end + 1);
  return JSON.parse(slice);
}

function runCli(
  args: string[],
  stdinText: string,
): Promise<{ code: number; stdout: string; stderr: string }> {
  return new Promise((resolve) => {
    // Use Node with tsx as ESM loader for cross-platform stability
    const nodeBin = process.execPath; // current Node executable
    const child = spawn(
      nodeBin,
      ['--import', 'tsx', path.join('src', 'cli', 'index.ts'), ...args],
      {
        cwd: process.cwd(),
        stdio: 'pipe',
        env: process.env,
      },
    );
    let stdout = '';
    let stderr = '';
    child.stdout.setEncoding('utf-8');
    child.stderr.setEncoding('utf-8');
    child.stdout.on('data', (d) => (stdout += String(d)));
    child.stderr.on('data', (d) => (stderr += String(d)));
    child.on('close', (code) =>
      resolve({ code: code ?? -1, stdout: stdout.trim(), stderr: stderr.trim() }),
    );
    if (stdinText.length > 0) {
      child.stdin.write(stdinText, 'utf-8');
    }
    child.stdin.end();
  });
}

/**
 * Minimal valid blob1 + payload reused across smoke tests.
 */
const baseBlob1 = {
  prefix_hex: 'aabb',
  udid_raw_hex: '00'.repeat(16),
  session_id_hex: '11'.repeat(16),
  response_key_hex: '22'.repeat(32),
  auth_key_hex: '33'.repeat(48),
};

describe('CLI runtime (integration)', () => {
  test('encode-request returns requestB64 and is parseable', async () => {
    const payload = { hello: 'cli', n: 42 };
    const input = JSON.stringify({ blob1: baseBlob1, payload });
    const { code, stdout, stderr } = await runCli(['runtime', 'encode-request'], input);
    if (code !== 0) {
      // Help debugging if locally failing
      throw new Error(`encode-request exited with ${code}. stderr=\n${stderr}`);
    }
    const out = parseJsonFromStdout(stdout || '');
    expect(out).toHaveProperty('requestB64');
    const raw = Buffer.from(out.requestB64, 'base64');
    const [blob1, blob2] = parseRequest(raw);
    expect(blob1.length).toBeGreaterThanOrEqual(112);
    expect(blob2.length).toBeGreaterThan(32);
  });

  test('decode-response parses a length-prefixed msgpack payload encrypted with blob1-derived IV', async () => {
    // 1) Encode a request to obtain the exact blob1 used for IV derivation
    const encIn = JSON.stringify({ blob1: baseBlob1, payload: { seed: 'iv-source' } });
    const encRes = await runCli(['runtime', 'encode-request'], encIn);
    expect(encRes.code).toBe(0);
    const { requestB64 } = parseJsonFromStdout(encRes.stdout);

    // 2) Prepare a synthetic response: length-prefixed msgpack, AES-256-CBC with our own 32B key, IV from UDID
    const reqBuf = Buffer.from(requestB64, 'base64');
    const [b1] = parseRequest(reqBuf);
    const header = parseHeaderBlob1(b1);
    const udidCanon = udidRawToCanonicalString(header.udid_raw);
    const iv = deriveIvFromUdidString(udidCanon);

    const respPayload = { ok: true, count: 3, tag: 'runtime-smoke' };
    const packed = Buffer.from(encode(respPayload));
    const lp = Buffer.concat([Buffer.alloc(4), packed]);
    lp.writeUInt32LE(packed.length, 0);
    const padded = pkcs7Pad(lp, 16);

    // Deterministic 32-byte key for the test
    const key = Buffer.alloc(32, 0x5a); // 0x5a repeated
    const ciphertext = encryptAes256Cbc(padded, key, iv);
    const responseBlob2 = Buffer.concat([ciphertext, key]);
    const responseB64 = responseBlob2.toString('base64');

    // 3) Ask the CLI to decode the response and verify payload roundtrip
    const decIn = JSON.stringify({ requestB64, responseB64 });
    const decRes = await runCli(['runtime', 'decode-response'], decIn);
    if (decRes.code !== 0) {
      throw new Error(`decode-response exited with ${decRes.code}. stderr=\n${decRes.stderr}`);
    }
    const out = parseJsonFromStdout(decRes.stdout || '');
    expect(out).toHaveProperty('payload');
    expect(out.payload).toEqual(respPayload);
  });
});
