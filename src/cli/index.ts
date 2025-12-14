#!/usr/bin/env node
/**
 * CLI entrypoint.
 *
 * Commands
 * - decrypt: scans decrypt/input and writes decoded artifacts under decrypt/output.
 * - encrypt: scans encrypt/input for decoded.json and writes built requests under encrypt/output.
 * - runtime: small helpers that read/write JSON via stdin/stdout for piping use-cases.
 *
 * Notes
 * - This file is the executable entry. It is not exported from the library index
 *   to avoid Commander parsing argv during unit tests when consumers import from src.
 */
import { Command } from 'commander';
import {
  RuntimeClient,
  DecryptRequestService,
  DecryptResponseService,
  EncryptPayloadService,
} from '../lib';
import path from 'node:path';
import fs from 'node:fs';
import fastGlob from 'fast-glob';
import { DETERMINISTIC_ENC_SECRET } from '../variables';

export const program = new Command();
program
  .name('umazing')
  .description('Umamusume tools in TypeScript: decrypt and encrypt (AES-256-CBC, msgpack)')
  .addHelpText(
    'after',
    `\nOutputs\n` +
      `- decrypt request: scans decrypt/input/**/request.txt and writes decrypt/output/<rel>/request/{decoded.bin, decoded.json}\n` +
      `- decrypt response: scans decrypt/input/**/response.txt and writes decrypt/output/<rel>/response/{decoded.bin, decoded.json} (requires matching request.txt)\n\n` +
      `- runtime encode-request: reads JSON from stdin { blob1, payload } and prints { requestB64 }\n` +
      `- runtime decode-response: reads JSON from stdin { requestB64, responseB64 } and prints { payload }\n\n` +
      `Notes\n` +
      `- <rel> mirrors the pack's subfolder structure under decrypt/input.\n` +
      `- encrypt build scans encrypt/input recursively for decoded.json and writes built files under encrypt/output, mirroring folder structure.\n`,
  );

export const decrypt = program.command('decrypt').description('Decryption operations');
decrypt
  .command('request')
  .description("Decrypt all packs' request.txt under decrypt/input (recursive)")
  .action(async () => {
    const inRoot = 'decrypt/input';
    const entries = await fastGlob('**/request.txt', {
      cwd: inRoot,
      dot: false,
    });
    if (entries.length === 0) {
      console.log('No request.txt files found under decrypt/input');
      process.exitCode = 0;
      return;
    }
    let processed = 0;
    const reqSvc = new DecryptRequestService();
    for (const relPath of entries.sort()) {
      const fullPath = path.join(inRoot, relPath);
      try {
        const requestB64 = fs.readFileSync(fullPath, 'utf-8').trim();
        const out = reqSvc.decodeFromBase64(requestB64);
        const outDir = path.join(
          'decrypt/output',
          path.dirname(relPath),
          path.parse(fullPath).name,
        );
        fs.mkdirSync(outDir, {
          recursive: true,
        });
        fs.writeFileSync(path.join(outDir, 'decoded.bin'), out.plaintext);
        const combined = {
          blob1: out.blob1,
          blob2: out.blob2,
        };
        fs.writeFileSync(
          path.join(outDir, 'decoded.json'),
          JSON.stringify(combined, null, 2),
          'utf-8',
        );
        processed += 1;
      } catch (e: unknown) {
        const msg = (e as Error).message || String(e);
        console.log(`Skip (invalid request format): ${fullPath} -> ${msg}`);
      }
    }
    if (processed === 0) {
      console.log('No valid request.txt files detected under decrypt/input');
    }
    process.exitCode = 0;
  });
decrypt
  .command('response')
  .description("Decrypt all packs' response.txt under decrypt/input (recursive)")
  .action(async () => {
    const inRoot = 'decrypt/input';
    const entries = await fastGlob('**/response.txt', {
      cwd: inRoot,
      dot: false,
    });
    if (entries.length === 0) {
      console.log('No response.txt files found under decrypt/input');
      process.exitCode = 0;
      return;
    }
    let processed = 0;
    const respSvc = new DecryptResponseService();
    for (const relPath of entries.sort()) {
      const fullPath = path.join(inRoot, relPath);
      const reqPath = path.join(path.dirname(fullPath), 'request.txt');
      if (!fs.existsSync(reqPath)) {
        console.log(`Skip (no matching request.txt in same folder): ${fullPath}`);
        continue;
      }
      try {
        const requestB64 = fs.readFileSync(reqPath, 'utf-8').trim();
        const responseB64 = fs.readFileSync(fullPath, 'utf-8').trim();
        const out = respSvc.decodeFromBase64(requestB64, responseB64);
        const outDir = path.join(
          'decrypt/output',
          path.dirname(relPath),
          path.parse(fullPath).name,
        );
        fs.mkdirSync(outDir, {
          recursive: true,
        });
        fs.writeFileSync(path.join(outDir, 'decoded.bin'), out.plaintext);
        const combined = {
          blob1: out.blob1,
          blob2: out.blob2,
        };
        fs.writeFileSync(
          path.join(outDir, 'decoded.json'),
          JSON.stringify(combined, null, 2),
          'utf-8',
        );
        processed += 1;
      } catch (e: unknown) {
        const msg = (e as Error).message || String(e);
        console.log(`Skip (invalid response format): ${fullPath} -> ${msg}`);
      }
    }
    if (processed === 0) {
      console.log('No valid response.txt files detected under decrypt/input');
    }
    process.exitCode = 0;
  });
decrypt
  .command('all')
  .description('Decrypt packs (request + response) under decrypt/input (recursive)')
  .action(async () => {
    await program.parseAsync(['node', 'umazing', 'decrypt', 'request']);
    await program.parseAsync(['node', 'umazing', 'decrypt', 'response']);
    process.exitCode = 0;
  });

export const encrypt = program.command('encrypt').description('Build/encrypt operations');
encrypt
  .command('build')
  .description(
    'Build Base64 requests from all decoded.json under encrypt/input (recursive). Uses session_id_hex and response_key_hex from blob1; encryption key is deterministic.',
  )
  .action(async () => {
    const inRoot = 'encrypt/input';
    const entries = await fastGlob('**/decoded.json', {
      cwd: inRoot,
      dot: false,
    });
    if (entries.length === 0) {
      console.log('No decoded.json files found under encrypt/input');
      process.exitCode = 0;
      return;
    }
    let total = 0;
    const encSvc = new EncryptPayloadService();
    for (const rel of entries.sort()) {
      const full = path.join(inRoot, rel);
      try {
        const root = JSON.parse(fs.readFileSync(full, 'utf-8'));
        if (!root || typeof root !== 'object' || !('blob1' in root) || !('blob2' in root)) {
          console.log(`Skip (invalid decoded.json structure): ${full}`);
          continue;
        }
        const { requestB64 } = encSvc.buildFromParts({
          blob1: root.blob1,
          payload: root.blob2,
          DETERMINISTIC_ENC_SECRET,
        });
        const outDir = path.join('encrypt/output', path.dirname(rel));
        fs.mkdirSync(outDir, {
          recursive: true,
        });
        const outPath = path.join(outDir, 'built.b64');
        fs.writeFileSync(outPath, requestB64, 'utf-8');
        total += 1;
      } catch (e: unknown) {
        const msg = (e as Error).message || String(e);
        console.log(`Skip (error processing encryption): ${full} -> ${msg}`);
      }
    }
    if (total === 0) {
      console.log('No requests were built (check inputs and parameters)');
    }
    process.exitCode = 0;
  });

/**
 * Read all data from stdin (used by runtime subcommands).
 * @returns Promise that resolves with the full UTF-8 string from stdin.
 */
async function readAllStdin(): Promise<string> {
  const chunks: Buffer[] = [];
  return await new Promise((resolve, reject) => {
    process.stdin.on('data', (chunk) => {
      const buf = Buffer.from(chunk);
      chunks.push(buf);
    });
    process.stdin.on('end', () => {
      const allBuf = Buffer.concat(chunks);
      const allStr = allBuf.toString('utf-8');
      const all = allStr.trim();
      resolve(all);
    });
    process.stdin.on('error', (err) => {
      reject(err);
    });
    // In case nothing is piped, end immediately on next tick
    if (process.stdin.readableEnded) {
      resolve('');
      return;
    }
    process.stdin.resume();
  });
}

export const runtime = program
  .command('runtime')
  .description('Programmatic helpers via stdin/stdout');
runtime
  .command('encode-request')
  .description('Read { blob1, payload } JSON from stdin and print { requestB64 }')
  .action(async () => {
    try {
      const text = await readAllStdin();
      const input = JSON.parse(text || '{}');
      const runtimeClient = new RuntimeClient({
        DETERMINISTIC_ENC_SECRET,
      });
      const out = runtimeClient.encodeRequest({
        blob1: input.blob1,
        payload: input.payload,
      });
      process.stdout.write(JSON.stringify(out));
      process.exitCode = 0;
    } catch (e: unknown) {
      const msg = (e as Error).message || String(e);
      console.error(msg);
      process.exitCode = 1;
    }
  });
runtime
  .command('decode-response')
  .description('Read { requestB64, responseB64 } JSON from stdin and print { payload }')
  .action(async () => {
    try {
      const text = await readAllStdin();
      const input = JSON.parse(text || '{}');
      const runtimeClient = new RuntimeClient({
        DETERMINISTIC_ENC_SECRET,
      });
      const out = runtimeClient.decodeResponse({
        requestB64: input.requestB64,
        responseB64: input.responseB64,
      });
      process.stdout.write(JSON.stringify(out));
      process.exitCode = 0;
    } catch (e: unknown) {
      const msg = (e as Error).message || String(e);
      console.error(msg);
      process.exitCode = 1;
    }
  });

program.parseAsync(process.argv);
