This folder is a direct TypeScript port of the Rust reference in `rust/`.

Constraints:

- No imports from `src/` (standalone module).
- Intended to match Rust behavior byte-for-byte where possible.

Files:

- `msgpack.ts`: `msgpack_len_decode`, `kvstream_decode`, `heuristic_decode`
- `protocol.ts`: request framing + AES-256-CBC encrypt/decrypt + helpers
- `client.ts`: minimal `UmaClient` using `fetch`

Usage example (Node 18+):

```ts
import { UmaClient, Udid, defaultRequestBase } from './index.js';

const base = defaultRequestBase();
const client = UmaClient.create(new Udid(crypto.randomUUID()), undefined, base);
// await client.signup();
```
