#!/usr/bin/env node
import { Command } from 'commander';
import * as decReq from './decrypt/request';
import * as decResp from './decrypt/response';
import * as encBuild from './encrypt/build';

const program = new Command();
program
  .name('umazing')
  .description('Umamusume tools in TypeScript: decrypt and encrypt (AES-256-CBC, msgpack)')
  .addHelpText(
    'after',
    `\nOutputs\n` +
      `- decrypt request: scans decrypt/input/**/request.txt and writes decrypt/output/<rel>/request/{decoded.bin, decoded.json}\n` +
      `- decrypt response: scans decrypt/input/**/response.txt and writes decrypt/output/<rel>/response/{decoded.bin, decoded.json} (requires matching request.txt)\n\n` +
      `Notes\n` +
      `- <rel> mirrors the pack's subfolder structure under decrypt/input.\n` +
      `- encrypt build scans encrypt/input recursively for decoded.json and writes built files under encrypt/output, mirroring folder structure.\n`,
  );

const decrypt = program.command('decrypt').description('Decryption operations');
decrypt
  .command('request')
  .description("Decrypt all packs' request.txt under decrypt/input (recursive)")
  .action(async () => {
    process.exitCode = await decReq.run();
  });
decrypt
  .command('response')
  .description("Decrypt all packs' response.txt under decrypt/input (recursive)")
  .action(async () => {
    process.exitCode = await decResp.run();
  });
decrypt
  .command('all')
  .description('Decrypt packs (request + response) under decrypt/input (recursive)')
  .action(async () => {
    const r1 = await decReq.run();
    const r2 = await decResp.run();
    process.exitCode = r1 === 0 && r2 === 0 ? 0 : 1;
  });

const encrypt = program.command('encrypt').description('Build/encrypt operations');
encrypt
  .command('build')
  .description(
    'Build Base64 requests from all decoded.json under encrypt/input (recursive). Uses session_id_hex and response_key_hex from blob1; encryption key is deterministic.',
  )
  .action(async () => {
    process.exitCode = await encBuild.run();
  });

program.parseAsync(process.argv);
