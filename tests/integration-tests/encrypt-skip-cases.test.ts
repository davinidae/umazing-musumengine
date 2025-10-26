import { describe, test, expect, beforeEach, afterEach } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { run as buildRun } from '../../src/encrypt/build';

const inRoot = path.join('encrypt', 'input', '__itest__', 'skip');
const outRoot = path.join('encrypt', 'output', '__itest__', 'skip');

function rmrf(p: string) {
  fs.rmSync(p, { recursive: true, force: true });
}

function writeJson(p: string, obj: any) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2), 'utf-8');
}

describe('encrypt build skip cases', () => {
  beforeEach(() => {
    rmrf(path.join('encrypt', 'input', '__itest__'));
    rmrf(path.join('encrypt', 'output', '__itest__'));
  });

  afterEach(() => {
    rmrf(path.join('encrypt', 'input', '__itest__'));
    rmrf(path.join('encrypt', 'output', '__itest__'));
  });

  test('missing required blob1 fields causes skip (no output)', async () => {
    writeJson(path.join(inRoot, 'a', 'decoded.json'), {
      blob1: {
        // missing prefix_hex
        udid_raw_hex: '00'.repeat(16),
        session_id_hex: '11'.repeat(16),
        response_key_hex: '22'.repeat(32),
        auth_key_hex: '33'.repeat(48),
      },
      blob2: { x: 1 },
    });

    await buildRun();

    const outPath = path.join(outRoot, 'a', 'built.b64');
    expect(fs.existsSync(outPath)).toBe(false);
  });

  test('invalid response_key length skips', async () => {
    writeJson(path.join(inRoot, 'b', 'decoded.json'), {
      blob1: {
        prefix_hex: 'aabb',
        udid_raw_hex: '00'.repeat(16),
        session_id_hex: '11'.repeat(16),
        response_key_hex: '22'.repeat(31), // 31 bytes only
        auth_key_hex: '33'.repeat(48),
      },
      blob2: { y: 2 },
    });

    await buildRun();

    const outPath = path.join(outRoot, 'b', 'built.b64');
    expect(fs.existsSync(outPath)).toBe(false);
  });

  test('multiple decoded.json builds only valid ones', async () => {
    // valid
    writeJson(path.join(inRoot, 'ok1', 'decoded.json'), {
      blob1: {
        prefix_hex: 'aabbcc',
        udid_raw_hex: '00'.repeat(16),
        session_id_hex: '11'.repeat(16),
        response_key_hex: '22'.repeat(32),
        auth_key_hex: '33'.repeat(48),
      },
      blob2: { ok: true },
    });
    // invalid: missing session_id
    writeJson(path.join(inRoot, 'bad1', 'decoded.json'), {
      blob1: {
        prefix_hex: 'aabbcc',
        udid_raw_hex: '00'.repeat(16),
        response_key_hex: '22'.repeat(32),
        auth_key_hex: '33'.repeat(48),
      },
      blob2: { ok: false },
    });

    await buildRun();

    expect(fs.existsSync(path.join(outRoot, 'ok1', 'built.b64'))).toBe(true);
    expect(fs.existsSync(path.join(outRoot, 'bad1', 'built.b64'))).toBe(false);
  });
});
