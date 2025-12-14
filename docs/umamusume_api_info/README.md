# API notes and documentation

This folder is a living reference for the UmaMusume API as understood from captured traffic and
reverse engineering. It complements the tools under `src/` that decrypt and (re)build requests.

Use this as a central place to document:

- Endpoints (path, method, purpose)
- Request/response shapes (decoded `blob2`), required headers/keys
- Sequences and flows (login → bootstrap → follow-up calls)
- Behavior and invariants (required fields, counters, timestamps)
- Error codes and meanings
- Sanitized examples (Base64 bodies and decoded JSON)

> Important: Always redact or replace personal data, device IDs, tokens, or secrets before
> committing examples.

## Wire format (on the network)

Requests and responses are Base64 strings representing the following binary format:

1. 4‑byte little‑endian unsigned integer: the length of `blob1`
2. `blob1` bytes
3. `blob2_encrypted` bytes
4. 32 bytes appended at the end: the encryption key actually used for `blob2` (AES‑256 key)

`blob2_encrypted` is PKCS#7 padded and encrypted with AES‑256‑CBC.

### blob1 layout (header)

```text
prefix | session_id(16B)
| udid_raw(16B)
| response_key(32B)
| auth_key(48B)
```

When decrypted by the CLI, `blob1` appears in JSON as:

- `prefix_hex` (hex string, variable length)
- `prefix_len` (bytes)
- `session_id_hex` (32 hex chars → 16 bytes)
- `udid_raw_hex` (32 hex chars → 16 bytes)
- `udid_canonical` (UUID-like string derived from `udid_raw_hex`)
- `response_key_hex` (64 hex chars → 32 bytes)
- `auth_key_hex` (hex, 96 chars → 48 bytes)
- `encryption_key_hex` (64 hex chars → 32 bytes, copied from the end of `blob2`)

### IV derivation (for AES‑CBC)

The IV is derived from `udid_canonical` (the hyphenated form of `udid_raw_hex`) via the helper
`deriveIvFromUdidString`. The decrypt tools compute this automatically.

## Builder behavior (tools in this repo)

The `encrypt build` command expects a `decoded.json` with `blob1` and `blob2` fields. It rebuilds a
Base64 request as described above.

Required fields in `blob1`:

- `prefix_hex`
- `udid_raw_hex` (or `udid_canonical`)
- `auth_key_hex`
- `session_id_hex` (16 bytes)
- `response_key_hex` (32 bytes)

Skip behavior: if any required field is missing/invalid (wrong lengths, malformed hex, etc.), the
builder will skip that file and log the reason.

Deterministic encryption: For reproducibility within this repository, the builder uses a
deterministic AES‑256 key derived as SHA‑256 of the ASCII string `co!=Y;(UQCGxJ_n82` (see
`src/variables.ts`). That derived key is appended to `blob2` and visible in decrypted outputs. There
are no CLI flags to override this.

## Documenting endpoints

Use the following template to add endpoint documentation in `api/endpoints/{area}/{name}.md` (create
folders as needed):

### {Endpoint name}

- Path: `/{path}`
- Method: `GET` | `POST`
- Purpose: { short description}

## Request (decoded blob2)

- Fields:
  - field_name: type – meaning/notes
  - ...

Example (sanitized):

```json
{
  "command_type": 1,
  "command_id": 101,
  "device": 4,
  "device_id": "<redacted>",
  "locale": "JPN"
}
```

## Response (decoded blob2)

- Fields:
  - field_name: type – meaning/notes

Example (sanitized):

```json
{
  "status": 0,
  "data": {
    "...": "..."
  }
}
```

## Sequence / prerequisites

- Must be called after the previous endpoint (e.g., `login`)
- Requires valid `session_id_hex` and `response_key_hex` in `blob1`

## Error codes

- 0: OK
- 1001: Invalid session
- ...

## How to produce examples

1. Capture Base64 bodies from the game (e.g., with a proxy) and save as packs:
   - `decrypt/input/<pack>/request.txt`
   - `decrypt/input/<pack>/response.txt`
2. Run the decrypt tools:

   ```powershell
   npm run cli -- decrypt all
   ```

   Outputs are written to `decrypt/output/<pack>/<file>/{decoded.bin, decoded.json}`.

3. Sanitize `decoded.json` (remove or replace personal/secret data).
4. Copy sanitized examples into `api/examples/{area}/{endpoint}/`:
   - `request.decoded.json`
   - `response.decoded.json`
   - Optionally the original Base64 (redacted) as `request.txt`/`response.txt`

## Tips and conventions

- Use lowercase hex without `0x` and ensure even length.
- All lengths in this repo are bytes unless noted.
- The msgpack payload starts after a 4‑byte little‑endian length prefix; CLIs handle
  packing/unpacking.
- Binary payload fields can be represented in JSON as `"base64:<...>"` strings when needed.
- Keep examples minimal while preserving the structure that matters for the endpoint.
