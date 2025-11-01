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
  DecryptRequestService,
  DecryptResponseService,
  RuntimeClient,
  EncryptPayloadService,
} from '../lib';
import { DETERMINISTIC_ENC_SECRET } from '../variables';

const program = new Command();
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

const decrypt = program.command('decrypt').description('Decryption operations');
decrypt
  .command('request')
  .description("Decrypt all packs' request.txt under decrypt/input (recursive)")
  .action(async () => {
    const decReq = new DecryptRequestService();
    process.exitCode = await decReq.execute();
  });
decrypt
  .command('response')
  .description("Decrypt all packs' response.txt under decrypt/input (recursive)")
  .action(async () => {
    const decResp = new DecryptResponseService();
    process.exitCode = await decResp.execute();
  });
decrypt
  .command('all')
  .description('Decrypt packs (request + response) under decrypt/input (recursive)')
  .action(async () => {
    const decReq = new DecryptRequestService();
    const r1 = await decReq.execute();
    const decResp = new DecryptResponseService();
    const r2 = await decResp.execute();
    process.exitCode = r1 === 0 && r2 === 0 ? 0 : 1;
  });

const encrypt = program.command('encrypt').description('Build/encrypt operations');
encrypt
  .command('build')
  .description(
    'Build Base64 requests from all decoded.json under encrypt/input (recursive). Uses session_id_hex and response_key_hex from blob1; encryption key is deterministic.',
  )
  .action(async () => {
    const encBuild = new EncryptPayloadService();
    process.exitCode = await encBuild.execute();
  });

/**
 * Read all data from stdin (used by runtime subcommands).
 * @returns Promise that resolves with the full UTF-8 string from stdin.
 */
async function readAllStdin(): Promise<string> {
  const chunks: Buffer[] = [];
  return await new Promise((resolve, reject) => {
    process.stdin.on('data', (chunk) => {
      const buf = Buffer.from(chunk as any);
      chunks.push(buf);
    });
    process.stdin.on('end', () => {
      const all = Buffer.concat(chunks).toString('utf-8').trim();
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

const runtime = program.command('runtime').description('Programmatic helpers via stdin/stdout');
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
      const out = runtimeClient.encodeRequest({ blob1: input.blob1, payload: input.payload });
      process.stdout.write(JSON.stringify(out));
      process.exitCode = 0;
    } catch (e: any) {
      const msg = e && e.message ? e.message : String(e);
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
    } catch (e: any) {
      const msg = e && e.message ? e.message : String(e);
      console.error(msg);
      process.exitCode = 1;
    }
  });

program.parseAsync(process.argv);
