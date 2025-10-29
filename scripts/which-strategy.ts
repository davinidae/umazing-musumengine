import fs from 'node:fs';
import path from 'node:path';
import fg from 'fast-glob';
import {
  parseRequest,
  parseHeaderBlob1,
  udidRawToCanonicalString,
  deriveIvFromUdidString,
} from '../src/shared/protocol.util';
import { decryptBlob2 } from '../src/decrypt/shared/blob.util';
import {
  LengthPrefixedStrategy,
  RawMsgpackStrategy,
  MapHeaderScanStrategy,
  KVStreamStrategy,
  AnchorDataHeadersStrategy,
  MultiArrayStrategy,
  HeuristicStreamToObjectStrategy,
} from '../src/decrypt/shared/unpacker.util';

function readB64(p: string): Buffer {
  const text = fs.readFileSync(p, 'utf-8');
  const compact = text.split(/\s+/).join('');
  const padding = (4 - (compact.length % 4)) % 4;
  const padded = padding ? compact + '='.repeat(padding) : compact;
  return Buffer.from(padded, 'base64');
}

const strategies = [
  new LengthPrefixedStrategy(),
  new RawMsgpackStrategy(),
  new MapHeaderScanStrategy(),
  new KVStreamStrategy(),
  new AnchorDataHeadersStrategy(),
  new MultiArrayStrategy(),
  new HeuristicStreamToObjectStrategy(),
];

function whichStrategyForPack(packDir: string): string {
  const reqPath = path.join(packDir, 'request.txt');
  const respPath = path.join(packDir, 'response.txt');
  if (!fs.existsSync(reqPath) || !fs.existsSync(respPath)) {
    return 'missing-request-or-response';
  }
  const req = readB64(reqPath);
  const [blob1] = parseRequest(req);
  const h = parseHeaderBlob1(blob1);
  const udid = udidRawToCanonicalString(h.udid_raw);
  const iv = deriveIvFromUdidString(udid);
  const resp = readB64(respPath);
  const { plaintext } = decryptBlob2(resp, iv);
  for (const s of strategies) {
    try {
      const v = s.execute(plaintext as any);
      if (v !== undefined) {
        return s.constructor.name;
      }
    } catch {
      // fall through
    }
  }
  return 'none';
}

async function main() {
  const baseDir = process.argv[2] ?? path.join('decrypt', 'input');
  const reqs = await fg('**/request.txt', { cwd: baseDir, dot: false });
  const results: Array<{ rel: string; strategy: string }> = [];
  for (const rel of reqs.sort()) {
    const packDir = path.dirname(path.join(baseDir, rel));
    const relDir = path.relative(baseDir, packDir).replace(/\\/g, '/');
    try {
      const strat = whichStrategyForPack(packDir);
      results.push({ rel: relDir, strategy: strat });
    } catch (_e: any) {
      results.push({ rel: relDir, strategy: 'error' });
    }
  }
  // Map strategy class names to normalized "format" buckets
  const asFormat = (strategy: string): string => {
    if (strategy === 'LengthPrefixedStrategy') {
      return 'length-prefixed';
    }
    if (strategy === 'KVStreamStrategy' || strategy === 'AnchorDataHeadersStrategy') {
      return 'kv-stream';
    }
    // collapse missing/error/others
    return 'other';
  };

  // Group by format and output as JSON: { format: ["file1", "file2", ...], ... }
  const grouped: Record<string, string[]> = {};
  for (const { rel, strategy } of results) {
    const key = asFormat(strategy);
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(rel);
  }
  // Sort arrays for stable output
  for (const k of Object.keys(grouped)) {
    grouped[k].sort();
  }
  console.log(JSON.stringify(grouped, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
