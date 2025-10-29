# Umazing Musumengine

[![CI](https://github.com/davinidae/umazing-musumengine/actions/workflows/ci.yml/badge.svg)](https://github.com/davinidae/umazing-musumengine/actions/workflows/ci.yml)
[![Docs](https://github.com/davinidae/umazing-musumengine/actions/workflows/docs.yml/badge.svg)](https://github.com/davinidae/umazing-musumengine/actions/workflows/docs.yml)
[![Coverage](https://codecov.io/gh/davinidae/umazing-musumengine/branch/main/graph/badge.svg)](https://app.codecov.io/gh/davinidae/umazing-musumengine)

## :warning::warning: Before you continue :warning::warning:

This repository was not made to cause harm to [Cygames](https://www.cygames.co.jp/en/), their products or their players. I love [Uma Musume](https://umamusume.com/)
!!

If you or someone you know is affected by these tools, please write me a ticket so i will privatize it.

Thanks to user [racsonaht](https://www.unknowncheats.me/forum/members/7040191.html)
at [UnknownCheats](https://www.unknowncheats.me/forum/4473299-post1.html)
for their initial work from which this tool started.

## What this repository is about

Tools to decrypt and build game requests/responses (AES-256-CBC, msgpack)
with a modular structure. This repository is now fully TypeScript-based and ships a bundled CLI.

See CONTRIBUTING.md for style guidelines (multi-line control flow, concise comments) and project conventions.

## Features

- Decrypt request/response Base64 blobs from packs on disk
- Build requests from `decoded.json` inputs with a deterministic AES-256 key
- Clean TypeScript ESM codebase (Node 18+), bundled with esbuild for distribution
- Commander-based CLI with `decrypt` and `encrypt` subcommands
- Commander-based CLI with `decrypt`, `encrypt`, and `runtime` subcommands
- Split test suites (Vitest): unit and integration, with coverage and thresholds
- Linting (ESLint flat config)
and formatting (Prettier)

## Structure

- `src/`
  - `common/protocol.ts`: shared helpers for decrypt and encrypt (Base64, blob parsing, UDID/IV)
  - `decrypt/common.ts`: decrypt utilities (AES-CBC decryption, msgpack unpack, JSON conversion)
  - `decrypt/request.ts`: decrypts all packs' `request.txt` under `decrypt/input` (recursive)
  - `decrypt/response.ts`: decrypts all packs' `response.txt` under `decrypt/input` (recursive, uses sibling `request.txt` to derive UDID/IV)
  - `encrypt/build.ts`: builds requests from all `decoded.json` under `encrypt/input` (recursive)
  - `runtime.ts`: programmatic API to encode requests and decode responses in-process
  - `cli.ts`: unified CLI with `decrypt`, `encrypt`, and `runtime` subcommands
  - `variables.ts`: central constants; includes `DETERMINISTIC_ENC_SECRET`
- `tests/`
  - `unit-tests/**`: focused unit specs for helpers
  - `integration-tests/**`: end-to-end flows: decrypt run(), encrypt build, skip cases, roundtrip
- Config
  - `vite.config.unit.ts` and `vite.config.integration.ts`: split configs/coverage
  - `tsconfig.base.json`, `tsconfig.build.json`, `tsconfig.json`: base, build, repo configs
  - `eslint.config.js`, `prettier` config via package.json

## Requirements

Node.js 18+ and npm.

## Quick start

Run the CLI directly via npm scripts (development, TypeScript sources):

```powershell
npm run cli -- --help
npm run cli -- decrypt all
npm run cli -- encrypt build
```

The double dash `--` ensures npm forwards arguments to the CLI script.

Bundled CLI (after build):

```powershell
npm run build
node dist/cli.bundle.js --help
```

Seed example fixtures (optional):

```powershell
# Generate decrypt/input/example/{request.txt,response.txt}
npm run seed:example

# Then run integration tests, including decrypt example tests
npm run test:integration
```

## Install dependencies (Windows PowerShell)

TypeScript CLI:

```powershell
npm install
```

## Usage – Decrypt (packs, batch)

- TypeScript CLI (recommended):

```powershell
# Create subfolders (packs)
under decrypt/input with request.txt and/or response.txt
# Example: decrypt/input/example/request.txt and decrypt/input/example/response.txt

# Decrypt requests of all packs
npm run cli -- decrypt request

# Decrypt responses of all packs (requires a request.txt in the same folder)
npm run cli -- decrypt response

# Or do both in one step
npm run cli -- decrypt all
```

The decrypt commands automatically produce the following files under `decrypt/output/<rel>/<file>/`:

- `decoded.bin` (raw decrypted bytes)
- `decoded.json` (combined JSON with `blob1` and `blob2`)

Where `<rel>` mirrors the pack's subfolder path under `decrypt/input`, and `<file>` is the input filename stem (`request` or `response`). For example, for `decrypt/input/example/request.txt`, outputs go to `decrypt/output/example/request/`.

Notes:

- `request.txt`/`response.txt` should contain the raw Base64 string. Whitespace and missing padding are normalized automatically.
- `response` decryption derives the IV from the UDID present in the sibling `request.txt`.

## Usage – Build requests (encrypt batch)

Place one or more `decoded.json` files under `encrypt/input` (you can copy them from `decrypt/output/<pack>/<file>/decoded.json` and edit `blob2`). Build will process them recursively and mirror the structure under `encrypt/output`.

```powershell
npm run cli -- encrypt build
```

Encryption key note:

- The `encrypt build` command uses a deterministic AES-256 encryption key derived from the ASCII string `co!=Y;(UQCGxJ_n82` (via SHA-256). This value is appended to blob2 and shown in logs, ensuring reproducible builds.
- The secret is defined in `src/variables.ts` as `DETERMINISTIC_ENC_SECRET`. There are no CLI flags to override this.

Required fields inside `blob1` (used to derive IV and rebuild blob1):

- `prefix_hex`
- `udid_raw_hex` (or `udid_canonical`)
- `auth_key_hex`
- `session_id_hex` (16 bytes hex)
- `response_key_hex` (32 bytes hex)

The `decrypt` step already produces `blob1` with all these fields.

Framing selection:

- By default, requests are built as a single length-prefixed msgpack document.
- To build special key/value streams used by some endpoints (like tool/pre_signup and tool/signup), set `blob1.framing` to `"kv-stream"` inside your `decoded.json`. The builder only honors this explicit hint; there is no path-based auto-detection.

Skip behavior: the builder scans `encrypt/input/**/decoded.json` and will skip a file (logging the reason)
if any required field is missing/invalid (e.g., `session_id_hex` not 16 bytes, `response_key_hex` not 32 bytes, missing `prefix_hex`, UDID not present, etc.).

## Common usage (end-to-end)

1. Capture request/response Base64 bodies from the game API (e.g., with Fiddler or a proxy)
and save them as packs under `decrypt/input/<pack>/request.txt` and `decrypt/input/<pack>/response.txt`.

1. Decrypt them (batch):

```powershell
npm run cli -- decrypt all
```

This writes `decrypt/output/<pack>/<file>/{decoded.bin, decoded.json}`. The `decoded.json` contains both `blob1` and the JSON-friendly payload as `blob2`.

1. Edit `decrypt/output/<pack>/<file>/decoded.json` (only `blob2` typically)
to make your changes.

1. Copy edited `decoded.json` files to `encrypt/input/<pack>/` (keep any subfolder layout you prefer)
and rebuild:

```powershell
npm run cli -- encrypt build
```

Now you can send the Base64 from `encrypt/output/**/built.b64` to the API.

Compatibility Python files have been removed. Use the TypeScript CLI and modules instead.

## Notes

- Decrypted binaries include a 4-byte little-endian length prefix for msgpack. The CLIs handle packing/unpacking automatically.
- IV derivation: computed from the canonical UDID string (hex with dashes)
via `deriveIvFromUdidString`.
- Request format on disk: `[4-byte LE blob1_len][blob1][blob2_encrypted || 32B-enc-key]` where `blob2_encrypted` is PKCS#7 padded and AES-256-CBC encrypted; the 32-byte key (SHA-256 of the deterministic secret)
is appended to blob2.
- `blob1` layout: `prefix | session_id(16B)
| udid_raw(16B)
| response_key(32B)
| auth_key(48B)`.
- JSON roundtripping: binary fields in payloads can be represented as strings with `base64:<...>` and are preserved by the builder (`fromJsonFriendly`/`toJsonCompatible`).
- If you need extensions or automation, import `decrypt/common` and `encrypt/build` directly in your own script.

## Testing and coverage

Tests are split for clarity:

- Unit tests: `tests/unit-tests/**`
- Integration tests: `tests/integration-tests/**`

Run tests:

```powershell
# Unit only
npm run test:unit

# Integration only
npm run test:integration

# All tests
npm run test
```

Coverage (v8)
with text and lcov reports:

```powershell
# Unit coverage with targeted thresholds (via vite.config.unit.ts)
npm run test:unit:coverage

# Integration coverage (via vite.config.integration.ts)
npm run test:integration:coverage

# All tests with coverage
npm run test:coverage
```

LCOV output is written to `coverage/lcov.info`.

What’s covered today:

- Unit: protocol helpers, crypto helpers, msgpack packing/unpacking
- Integration: decrypt example pack, decrypt run()
end-to-end (request + response), builder e2e (can decrypt back), builder skip cases, roundtrip from a previously decrypted `decoded.json`

Unit coverage thresholds are enforced via `vite.config.unit.ts`.

## Lint, format, build

```powershell
# Lint / fix
npm run lint
npm run lint:fix

# Format / check
npm run format
npm run format:check

# Typecheck both repo and build configs
npm run typecheck

# Bundle the CLI to dist/ (esbuild ESM bundle)
npm run build

# Lint and format
npm run lint; npm run format

```

## Contributing and style

- Please read `CONTRIBUTING.md` for coding style and project conventions.
  - Highlights: avoid one-liners, keep comments concise, add rationale to heuristic catches, and prefer small named helpers.

## CLI reference

```powershell
umazing [command]

Commands:
  decrypt request   Decrypt all packs' request.txt under decrypt/input (recursive)
  decrypt response  Decrypt all packs' response.txt under decrypt/input (recursive)
  decrypt all       Decrypt packs (request + response)
under decrypt/input (recursive)
  encrypt build     Build Base64 requests from all decoded.json under encrypt/input (recursive).
                    Uses session_id_hex and response_key_hex from blob1; encryption key is deterministic.
  runtime encode-request  Read JSON from stdin { blob1, payload } and write { requestB64 } to stdout
  runtime decode-response Read JSON from stdin { requestB64, responseB64 } and write { payload } to stdout
```

Flags like `--enc-key-hex`, `--sid`, `--session-id-hex`, and `--response-key-hex` are intentionally not supported; the builder reads required values from `blob1` in each `decoded.json`.

```powershell
# Development (TS sources)
npm run cli -- decrypt all

# Distribution (bundled)
node dist/cli.bundle.js decrypt all

# Encode a request via stdin/stdout
{"blob1": {"prefix_hex":"...", "udid_raw_hex":"...", "auth_key_hex":"...", "session_id_hex":"...", "response_key_hex":"...", "framing":"kv-stream"}, "payload": {"k1":"v1"}}
| node dist/cli.bundle.js runtime encode-request
| Set-Content -Path request.b64

# Decode a response via stdin/stdout
#{"requestB64": "<base64>", "responseB64": "<base64>"} | node dist/cli.bundle.js runtime decode-response
```

## Runtime API (programmatic and piping)

When integrating with live API calls, you can either pipe JSON through the CLI or import `runtime.ts` in-process.

- CLI piping (stdin → stdout):
  - `runtime encode-request` expects on stdin:
    - `{ blob1, payload }` where `blob1` includes required hex fields and optional `framing` (`"kv-stream"` or omitted for default).
    - Writes `{ requestB64 }` to stdout.
  - `runtime decode-response` expects on stdin:
    - `{ requestB64, responseB64 }` where `responseB64` is the Base64 body returned by the server.
    - Writes `{ payload }` to stdout (auto-unpacked and normalized).

- Programmatic API:
  - `encodeRequest({ blob1, payload }): string` → returns `requestB64`.
  - `decodeResponse({ requestB64, responseB64 }): any` → returns decoded payload (auto framing detection and normalization for responses).

### RuntimeClient wrapper

For a small OO wrapper, use `RuntimeClient`:

```ts
import { RuntimeClient } from './src/runtime';

const client = new RuntimeClient();

// Encode a request
const { requestB64 } = client.encodeRequest({
  blob1: {
    prefix_hex: 'aabbcc',
    udid_raw_hex: '00'.repeat(16),
    session_id_hex: '11'.repeat(16),
    response_key_hex: '22'.repeat(32),
    auth_key_hex: '33'.repeat(48),
  },
  payload: { x: 1 },
});

// Later, decode a response (Base64 of blob2)
const { payload } = client.decodeResponse({ requestB64, responseB64: '<blob2 base64>' });
```

Response normalization note: For certain responses that arrive as noisy or flattened key/value streams, the decoder reconstructs `{ data_headers, data }` where both are message-packed maps.
