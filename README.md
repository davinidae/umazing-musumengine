# Umazing Musumengine

[![CI](https://github.com/davinidae/umazing-musumengine/actions/workflows/ci.yml/badge.svg)](https://github.com/davinidae/umazing-musumengine/actions/workflows/ci.yml)
[![Coverage](https://codecov.io/gh/davinidae/umazing-musumengine/branch/main/graph/badge.svg)](https://app.codecov.io/gh/davinidae/umazing-musumengine)

Docs:

- [Usage (CLI + library)](./docs/usage.md)
- [Publishing (npm + GitHub Actions)](./docs/publishing.md)
- [API reference (generated)](./docs/code/)

## :warning::warning: Before you continue :warning::warning:

This repository was not made to cause harm to [Cygames](https://www.cygames.co.jp/en/), their
products or their players. I love [Uma Musume](https://umamusume.com/) !!

If you or someone you know is affected by these tools, please write me a ticket so i will privatize
it.

Thanks to user [racsonaht](https://www.unknowncheats.me/forum/members/7040191.html) at
[UnknownCheats](https://www.unknowncheats.me/forum/4473299-post1.html) for their initial work from
which this tool started. Their original post is copied at
[docs/umamusume_api_info](./docs/umamusume_api_info/ORIGINAL.md)

## What this repository is about

Tools to decrypt and build game requests/responses (AES-256-CBC, msgpack) with a modular structure.
This repository is now fully TypeScript-based and ships as both an npm library and a CLI.

See CONTRIBUTING.md for style guidelines (multi-line control flow, concise comments) and project
conventions.

## Features

- Decrypt request/response Base64 blobs from packs on disk
- Build requests from `decoded.json` inputs with a deterministic AES-256 key
- Clean TypeScript ESM codebase (Node 18+), bundled with esbuild for distribution
- Commander-based CLI with `decrypt`, `encrypt`, and `runtime` subcommands
- Split test suites (Vitest): unit and integration, with coverage and thresholds
- Linting (ESLint flat config) and formatting (Prettier)

## Structure

- `src/`
  - `index.ts`: library entrypoint exports
  - `lib/`: core crypto, encoding/decoding, and shared utilities
    - `runtime-client.ts`: programmatic API to encode requests and decode responses in-process
    - `decrypt/`, `encrypt/`, `models/`, `utils/`: internal helpers and types
  - `cli/index.ts`: CLI entrypoint (`umazing`)
  - `constants/`: shared constants, including `DETERMINISTIC_ENC_SECRET`
- `tests/`
  - `unit-tests/**`: focused unit specs for helpers
  - `integration-tests/**`: end-to-end flows: decrypt run(), encrypt build, skip cases, roundtrip
- Config
  - `vite.config.unit.ts` and `vite.config.integration.ts`: split configs/coverage
  - `tsconfig.base.json`, `tsconfig.build.types.json`, `tsconfig.json`: base, build-types, repo
    configs
  - `eslint.config.js`, `prettier` config via package.json

## Requirements

Node.js 18+ and npm.

## Quick start

Install and use as a library:

```powershell
npm install umazing-musumengine
```

Run the CLI without installing:

```powershell
npx umazing-musumengine --help
```

Or install globally to get the `umazing` command:

```powershell
npm install -g umazing-musumengine
umazing --help
```

Development (run TypeScript sources in this repo):

```powershell
npm run cli -- --help
npm run cli -- decrypt all
npm run cli -- encrypt build
```

The double dash `--` ensures npm forwards arguments to the CLI script.

Built CLI (after `npm run build`):

```powershell
node dist/cli.js --help
```

Seed example fixtures (optional):

```powershell
# Generate decrypt/input/example/{request.txt,response.txt}
npm run seed:example

# Then run integration tests, including decrypt example tests
npm run test:integration
```

## Documentation

- Usage (CLI + library): see `docs/usage.md`
- Publishing (manual + GitHub Actions): see `docs/publishing.md`
- API reference (generated): see `docs/code/`

## CLI (installed)

```powershell
umazing --help
umazing decrypt all
umazing encrypt build
```

## Library (example)

```ts
import { RuntimeClient } from 'umazing-musumengine';

const client = new RuntimeClient();
const { requestB64 } = client.encodeRequest({
  blob1: {
    prefix: 'aabbcc',
    udid: '00'.repeat(16),
    session_id: '11'.repeat(16),
    response_key: '22'.repeat(32),
    auth_key: '33'.repeat(48),
  },
  payload: { x: 1 },
});

client.decodeResponse({ requestB64, responseB64: '<base64 response blob>' });
```

## Development

```powershell
npm install
npm run build
npm test
npm run lint
npm run format
npm run docs
```

## Contributing

Please read `CONTRIBUTING.md` for coding style and project conventions.
