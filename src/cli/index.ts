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
import { DETERMINISTIC_ENC_SECRET } from '../constants';
import type { DecodeResponseInput, EncodeRequestInput } from '../lib';

type DecodedArtifacts = {
  plaintext: Buffer;
  blob1: unknown;
  blob2: unknown;
};

/**
 * ensureDir.
 * @param dirPath - Type: `string`.
 */
function ensureDir(dirPath: string): void {
  fs.mkdirSync(dirPath, {
    recursive: true,
  });
}

/**
 * readTextFileTrimmed.
 * @param filePath - Type: `string`.
 * @returns Type: `string`.
 */
function readTextFileTrimmed(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8').trim();
}

/**
 * errorMessage.
 * @param e - Type: `unknown`.
 * @returns Type: `string`.
 */
function errorMessage(e: unknown): string {
  if (e instanceof Error && typeof e.message === 'string' && e.message.length > 0) {
    return e.message;
  }
  if (e && typeof e === 'object' && 'message' in e) {
    /**
     * maybeMessage.
     * @remarks Type: `unknown`.
     * @defaultValue `(e as { message?: unknown }).message`
     */
    const maybeMessage = (e as { message?: unknown }).message;
    if (typeof maybeMessage === 'string' && maybeMessage.length > 0) {
      return maybeMessage;
    }
  }
  return String(e);
}

/**
 * isRecord.
 * @param value - Type: `unknown`.
 * @returns Type: `boolean`.
 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

/**
 * writeDecodedArtifacts.
 * @param outDir - Type: `string`.
 * @param out - Type: `DecodedArtifacts`.
 */
function writeDecodedArtifacts(outDir: string, out: DecodedArtifacts): void {
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, 'decoded.bin'), out.plaintext);
  /**
   * combined.
   * @remarks Type: `{ blob1: unknown; blob2: unknown; }`.
   * @defaultValue `{ blob1: out.blob1, blob2: out.blob2, }`
   */
  const combined = {
    blob1: out.blob1,
    blob2: out.blob2,
  };
  fs.writeFileSync(path.join(outDir, 'decoded.json'), JSON.stringify(combined, null, 2), 'utf-8');
}

/**
 * findInputEntries (async).
 * @param inRoot - Type: `string`.
 * @param pattern - Type: `string`.
 * @returns Type: `Promise<string[]>`.
 */
async function findInputEntries(inRoot: string, pattern: string): Promise<string[]> {
  return await fastGlob(pattern, {
    cwd: inRoot,
    dot: false,
  });
}

/**
 * outDirForDecodedArtifact.
 * @param relPath - Type: `string`.
 * @returns Type: `string`.
 */
function outDirForDecodedArtifact(relPath: string): string {
  return path.join('decrypt/output', path.dirname(relPath), path.parse(relPath).name);
}

/**
 * requestTxtPathForResponseTxt.
 * @param fullResponsePath - Type: `string`.
 * @returns Type: `string`.
 */
function requestTxtPathForResponseTxt(fullResponsePath: string): string {
  return path.join(path.dirname(fullResponsePath), 'request.txt');
}

/**
 * isDecodedJsonRoot.
 * @param value - Type: `unknown`.
 * @returns Type: `boolean`.
 */
function isDecodedJsonRoot(value: unknown): value is { blob1: unknown; blob2: unknown } {
  return isRecord(value) && 'blob1' in value && 'blob2' in value;
}

/**
 * buildRuntimeClient.
 * @returns Type: `RuntimeClient`.
 */
function buildRuntimeClient(): RuntimeClient {
  return new RuntimeClient({
    DETERMINISTIC_ENC_SECRET,
  });
}

/**
 * decodeRequestEntry.
 * @param reqSvc - Type: `DecryptRequestService`.
 * @param inRoot - Type: `string`.
 * @param relPath - Type: `string`.
 * @returns Type: `{ ok: true; } | { ok: false; message: string; fullPath: string; }`.
 */
function decodeRequestEntry(
  reqSvc: DecryptRequestService,
  inRoot: string,
  relPath: string,
): { ok: true } | { ok: false; message: string; fullPath: string } {
  /**
   * fullPath.
   * @remarks Type: `string`.
   * @defaultValue `path.join(inRoot, relPath)`
   */
  const fullPath = path.join(inRoot, relPath);
  try {
    /**
     * requestB64.
     * @remarks Type: `string`.
     * @defaultValue `readTextFileTrimmed(fullPath)`
     */
    const requestB64 = readTextFileTrimmed(fullPath);
    /**
     * out.
     * @remarks Type: `{ blob1: Blob1Json; blob2: unknown; plaintext: Buffer<ArrayBufferLike>; }`.
     * @defaultValue `reqSvc.decodeFromBase64(requestB64)`
     */
    const out = reqSvc.decodeFromBase64(requestB64);
    writeDecodedArtifacts(outDirForDecodedArtifact(relPath), out);
    return {
      ok: true,
    };
  } catch (e: unknown) {
    /**
     * catch (e).
     * @remarks Type: `unknown`.
     */
    return {
      ok: false,
      message: errorMessage(e),
      fullPath,
    };
  }
}

/**
 * decodeResponseEntry.
 * @param respSvc - Type: `DecryptResponseService`.
 * @param inRoot - Type: `string`.
 * @param relPath - Type: `string`.
 * @returns Type: `{ ok: true; } | { ok: false; kind: "missing-request"; fullPath: string; } | { ok: false; kind: "invalid"; fullPath: string; message: string; }`.
 */
function decodeResponseEntry(
  respSvc: DecryptResponseService,
  inRoot: string,
  relPath: string,
):
  | { ok: true }
  | { ok: false; kind: 'missing-request'; fullPath: string }
  | { ok: false; kind: 'invalid'; fullPath: string; message: string } {
  /**
   * fullPath.
   * @remarks Type: `string`.
   * @defaultValue `path.join(inRoot, relPath)`
   */
  const fullPath = path.join(inRoot, relPath);
  /**
   * reqPath.
   * @remarks Type: `string`.
   * @defaultValue `requestTxtPathForResponseTxt(fullPath)`
   */
  const reqPath = requestTxtPathForResponseTxt(fullPath);
  if (!fs.existsSync(reqPath)) {
    return {
      ok: false,
      kind: 'missing-request',
      fullPath,
    };
  }
  try {
    /**
     * requestB64.
     * @remarks Type: `string`.
     * @defaultValue `readTextFileTrimmed(reqPath)`
     */
    const requestB64 = readTextFileTrimmed(reqPath);
    /**
     * responseB64.
     * @remarks Type: `string`.
     * @defaultValue `readTextFileTrimmed(fullPath)`
     */
    const responseB64 = readTextFileTrimmed(fullPath);
    /**
     * out.
     * @remarks Type: `{ blob1: Blob1Json; blob2: unknown; plaintext: Buffer<ArrayBufferLike>; }`.
     * @defaultValue `respSvc.decodeFromBase64(requestB64, responseB64)`
     */
    const out = respSvc.decodeFromBase64(requestB64, responseB64);
    writeDecodedArtifacts(outDirForDecodedArtifact(relPath), out);
    return {
      ok: true,
    };
  } catch (e: unknown) {
    /**
     * catch (e).
     * @remarks Type: `unknown`.
     */
    return {
      ok: false,
      kind: 'invalid',
      fullPath,
      message: errorMessage(e),
    };
  }
}

/**
 * buildEncryptEntry.
 * @param encSvc - Type: `EncryptPayloadService`.
 * @param inRoot - Type: `string`.
 * @param relPath - Type: `string`.
 * @returns Type: `{ ok: true; } | { ok: false; kind: "invalid-structure"; fullPath: string; } | { ok: false; kind: "error"; fullPath: string; message: string; }`.
 */
function buildEncryptEntry(
  encSvc: EncryptPayloadService,
  inRoot: string,
  relPath: string,
):
  | { ok: true }
  | { ok: false; kind: 'invalid-structure'; fullPath: string }
  | { ok: false; kind: 'error'; fullPath: string; message: string } {
  /**
   * fullPath.
   * @remarks Type: `string`.
   * @defaultValue `path.join(inRoot, relPath)`
   */
  const fullPath = path.join(inRoot, relPath);
  try {
    /**
     * root.
     * @remarks Type: `unknown`.
     * @defaultValue `JSON.parse(fs.readFileSync(fullPath, 'utf-8'))`
     */
    const root: unknown = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));
    if (!isDecodedJsonRoot(root)) {
      return {
        ok: false,
        kind: 'invalid-structure',
        fullPath,
      };
    }
    /**
     * { requestB64 }.
     * @remarks Type: `{ requestB64: string; blob1: { viewer_id: number; prefix: string; session_id: string; response_key: string; auth_key: string | null; } & Partial<{ udid: string; udid_raw: string; }>; blob2: unknown; }`.
     * @defaultValue `encSvc.build({ blob1: root.blob1 as EncodeRequestInput['blob1'], blob2: root.blob2, DETERMINISTIC_ENC_SECRET, })`
     */
    const { requestB64 } = encSvc.build({
      blob1: root.blob1 as EncodeRequestInput['blob1'],
      blob2: root.blob2,
      DETERMINISTIC_ENC_SECRET,
    });
    /**
     * outDir.
     * @remarks Type: `string`.
     * @defaultValue `path.join('encrypt/output', path.dirname(relPath))`
     */
    const outDir = path.join('encrypt/output', path.dirname(relPath));
    ensureDir(outDir);
    fs.writeFileSync(path.join(outDir, 'built.b64'), requestB64, 'utf-8');
    return {
      ok: true,
    };
  } catch (e: unknown) {
    /**
     * catch (e).
     * @remarks Type: `unknown`.
     */
    return {
      ok: false,
      kind: 'error',
      fullPath,
      message: errorMessage(e),
    };
  }
}

/**
 * program.
 * @remarks Type: `Command`.
 * @defaultValue `new Command()`
 */
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

/**
 * decrypt.
 * @remarks Type: `Command`.
 * @defaultValue `program.command('decrypt').description('Decryption operations')`
 */
const decrypt = program.command('decrypt').description('Decryption operations');
decrypt
  .command('request')
  .description("Decrypt all packs' request.txt under decrypt/input (recursive)")
  .action(async () => {
    /**
     * inRoot.
     * @remarks Type: `"decrypt/input"`.
     * @defaultValue `'decrypt/input'`
     */
    const inRoot = 'decrypt/input';
    /**
     * entries.
     * @remarks Type: `string[]`.
     * @defaultValue `await findInputEntries(inRoot, '**\\/request.txt')`
     */
    const entries = await findInputEntries(inRoot, '**/request.txt');
    if (entries.length === 0) {
      console.log('No request.txt files found under decrypt/input');
      process.exitCode = 0;
      return;
    }
    /**
     * processed.
     * @remarks Type: `number`.
     * @defaultValue `0`
     */
    let processed = 0;
    /**
     * reqSvc.
     * @remarks Type: `DecryptRequestService`.
     * @defaultValue `new DecryptRequestService()`
     */
    const reqSvc = new DecryptRequestService();
    /**
     * relPath.
     * @remarks Type: `string`.
     */
    for (const relPath of entries.sort()) {
      /**
       * res.
       * @remarks Type: `{ ok: true; } | { ok: false; message: string; fullPath: string; }`.
       * @defaultValue `decodeRequestEntry(reqSvc, inRoot, relPath)`
       */
      const res = decodeRequestEntry(reqSvc, inRoot, relPath);
      if (res.ok) {
        processed += 1;
        continue;
      }
      console.log(`Skip (invalid request format): ${res.fullPath} -> ${res.message}`);
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
    /**
     * inRoot.
     * @remarks Type: `"decrypt/input"`.
     * @defaultValue `'decrypt/input'`
     */
    const inRoot = 'decrypt/input';
    /**
     * entries.
     * @remarks Type: `string[]`.
     * @defaultValue `await findInputEntries(inRoot, '**\\/response.txt')`
     */
    const entries = await findInputEntries(inRoot, '**/response.txt');
    if (entries.length === 0) {
      console.log('No response.txt files found under decrypt/input');
      process.exitCode = 0;
      return;
    }
    /**
     * processed.
     * @remarks Type: `number`.
     * @defaultValue `0`
     */
    let processed = 0;
    /**
     * respSvc.
     * @remarks Type: `DecryptResponseService`.
     * @defaultValue `new DecryptResponseService()`
     */
    const respSvc = new DecryptResponseService();
    /**
     * relPath.
     * @remarks Type: `string`.
     */
    for (const relPath of entries.sort()) {
      /**
       * res.
       * @remarks Type: `{ ok: true; } | { ok: false; kind: "missing-request"; fullPath: string; } | { ok: false; kind: "invalid"; fullPath: string; message: string; }`.
       * @defaultValue `decodeResponseEntry(respSvc, inRoot, relPath)`
       */
      const res = decodeResponseEntry(respSvc, inRoot, relPath);
      if (res.ok) {
        processed += 1;
        continue;
      }
      if (res.kind === 'missing-request') {
        console.log(`Skip (no matching request.txt in same folder): ${res.fullPath}`);
        continue;
      }
      console.log(`Skip (invalid response format): ${res.fullPath} -> ${res.message}`);
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

/**
 * encrypt.
 * @remarks Type: `Command`.
 * @defaultValue `program.command('encrypt').description('Build/encrypt operations')`
 */
const encrypt = program.command('encrypt').description('Build/encrypt operations');
encrypt
  .command('build')
  .description(
    'Build Base64 requests from all decoded.json under encrypt/input (recursive). Uses session_id and response_key from blob1; encryption key is deterministic.',
  )
  .action(async () => {
    /**
     * inRoot.
     * @remarks Type: `"encrypt/input"`.
     * @defaultValue `'encrypt/input'`
     */
    const inRoot = 'encrypt/input';
    /**
     * entries.
     * @remarks Type: `string[]`.
     * @defaultValue `await findInputEntries(inRoot, '**\\/decoded.json')`
     */
    const entries = await findInputEntries(inRoot, '**/decoded.json');
    if (entries.length === 0) {
      console.log('No decoded.json files found under encrypt/input');
      process.exitCode = 0;
      return;
    }
    /**
     * total.
     * @remarks Type: `number`.
     * @defaultValue `0`
     */
    let total = 0;
    /**
     * encSvc.
     * @remarks Type: `EncryptPayloadService`.
     * @defaultValue `new EncryptPayloadService()`
     */
    const encSvc = new EncryptPayloadService();
    /**
     * rel.
     * @remarks Type: `string`.
     */
    for (const rel of entries.sort()) {
      /**
       * res.
       * @remarks Type: `{ ok: true; } | { ok: false; kind: "invalid-structure"; fullPath: string; } | { ok: false; kind: "error"; fullPath: string; message: string; }`.
       * @defaultValue `buildEncryptEntry(encSvc, inRoot, rel)`
       */
      const res = buildEncryptEntry(encSvc, inRoot, rel);
      if (res.ok) {
        total += 1;
        continue;
      }
      if (res.kind === 'invalid-structure') {
        console.log(`Skip (invalid decoded.json structure): ${res.fullPath}`);
        continue;
      }
      console.log(`Skip (error processing encryption): ${res.fullPath} -> ${res.message}`);
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
/**
 * readAllStdin (async).
 * @returns Type: `Promise<string>`.
 */
async function readAllStdin(): Promise<string> {
  /**
   * chunks.
   * @remarks Type: `Buffer<ArrayBufferLike>[]`.
   * @defaultValue `[]`
   */
  const chunks: Buffer[] = [];
  return await new Promise((resolve, reject) => {
    process.stdin.on('data', (chunk) => {
      /**
       * buf.
       * @remarks Type: `Buffer<ArrayBuffer>`.
       * @defaultValue `Buffer.from(chunk)`
       */
      const buf = Buffer.from(chunk);
      chunks.push(buf);
    });
    process.stdin.on('end', () => {
      /**
       * allBuf.
       * @remarks Type: `Buffer<ArrayBuffer>`.
       * @defaultValue `Buffer.concat(chunks)`
       */
      const allBuf = Buffer.concat(chunks);
      /**
       * allStr.
       * @remarks Type: `string`.
       * @defaultValue `allBuf.toString('utf-8')`
       */
      const allStr = allBuf.toString('utf-8');
      /**
       * all.
       * @remarks Type: `string`.
       * @defaultValue `allStr.trim()`
       */
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

/**
 * runtime.
 * @remarks Type: `Command`.
 * @defaultValue `program.command('runtime').description('Programmatic helpers via stdin/stdout')`
 */
const runtime = program.command('runtime').description('Programmatic helpers via stdin/stdout');
runtime
  .command('encode-request')
  .description('Read { blob1, payload } JSON from stdin and print { requestB64 }')
  .action(async () => {
    try {
      /**
       * text.
       * @remarks Type: `string`.
       * @defaultValue `await readAllStdin()`
       */
      const text = await readAllStdin();
      /**
       * input.
       * @remarks Type: `unknown`.
       * @defaultValue `JSON.parse(text || '{}')`
       */
      const input: unknown = JSON.parse(text || '{}');
      /**
       * runtimeClient.
       * @remarks Type: `RuntimeClient`.
       * @defaultValue `buildRuntimeClient()`
       */
      const runtimeClient = buildRuntimeClient();
      /**
       * out.
       * @remarks Type: `EncodeRequestOutput`.
       * @defaultValue `runtimeClient.encodeRequest(input as EncodeRequestInput)`
       */
      const out = runtimeClient.encodeRequest(input as EncodeRequestInput);
      process.stdout.write(JSON.stringify(out));
      process.exitCode = 0;
    } catch (e: unknown) {
      /**
       * catch (e).
       * @remarks Type: `unknown`.
       */
      /**
       * msg.
       * @remarks Type: `string`.
       * @defaultValue `errorMessage(e)`
       */
      const msg = errorMessage(e);
      console.error(msg);
      process.exitCode = 1;
    }
  });
runtime
  .command('decode-response')
  .description('Read { requestB64, responseB64 } JSON from stdin and print { payload }')
  .action(async () => {
    try {
      /**
       * text.
       * @remarks Type: `string`.
       * @defaultValue `await readAllStdin()`
       */
      const text = await readAllStdin();
      /**
       * input.
       * @remarks Type: `unknown`.
       * @defaultValue `JSON.parse(text || '{}')`
       */
      const input: unknown = JSON.parse(text || '{}');
      /**
       * obj.
       * @remarks Type: `Record<string, unknown>`.
       * @defaultValue `isRecord(input) ? input : {}`
       */
      const obj: Record<string, unknown> = isRecord(input) ? input : {};
      /**
       * runtimeClient.
       * @remarks Type: `RuntimeClient`.
       * @defaultValue `buildRuntimeClient()`
       */
      const runtimeClient = buildRuntimeClient();
      /**
       * out.
       * @remarks Type: `DecodeResponseOutput`.
       * @defaultValue `runtimeClient.decodeResponse(obj as DecodeResponseInput)`
       */
      const out = runtimeClient.decodeResponse(obj as DecodeResponseInput);
      process.stdout.write(JSON.stringify(out));
      process.exitCode = 0;
    } catch (e: unknown) {
      /**
       * catch (e).
       * @remarks Type: `unknown`.
       */
      /**
       * msg.
       * @remarks Type: `string`.
       * @defaultValue `errorMessage(e)`
       */
      const msg = errorMessage(e);
      console.error(msg);
      process.exitCode = 1;
    }
  });

program.parseAsync(process.argv);
