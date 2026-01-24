import { build } from 'esbuild';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Externalize all dependencies so the published package uses its declared deps,
 * while still bundling our internal TS files (avoids ESM extension issues).
 */
const pkgJson = JSON.parse(readFileSync(path.join(repoRoot, 'package.json'), 'utf-8'));
const external = [
  ...Object.keys(pkgJson.dependencies ?? {}),
  ...Object.keys(pkgJson.peerDependencies ?? {}),
  ...Object.keys(pkgJson.optionalDependencies ?? {}),
];

const shared = {
  bundle: true,
  platform: 'node',
  target: 'node18',
  sourcemap: true,
  logLevel: 'info',
  packages: 'external',
  external,
};

await build({
  ...shared,
  format: 'esm',
  entryPoints: ['src/index.ts'],
  outfile: 'dist/esm/index.js',
});

await build({
  ...shared,
  format: 'cjs',
  entryPoints: ['src/index.ts'],
  outfile: 'dist/cjs/index.cjs',
});

await build({
  ...shared,
  format: 'esm',
  entryPoints: ['src/cli/index.ts'],
  outfile: 'dist/cli.js',
  banner: {
    js: '#!/usr/bin/env node',
  },
});
