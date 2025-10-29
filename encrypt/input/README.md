# encrypt/input

Place here files you want to use for building Base64 requests (batch).

- `decoded.json` (required): output from decrypt, with shape `{ blob1: {
...}, blob2: <payload> }`. The builder uses `blob2` as the payload and may take defaults from `blob1` (`session_id_hex`, `response_key_hex`)
when flags are not provided.
  You can place multiple `decoded.json` files in a nested folder structure; the builder will process them recursively.

Framing:

- By default, the builder emits a single length-prefixed msgpack document.
- For endpoints that use a key/value msgpack stream, add `"framing": "kv-stream"` inside `blob1` in your `decoded.json`. This is the only switch the builder uses; there is no path-based detection.

Example `decoded.json` (excerpt):

```json
{
  "blob1": {
    "prefix_hex": "...",
    "udid_raw_hex": "...",
    "auth_key_hex": "...",
    "session_id_hex": "...",
    "response_key_hex": "...",
    "framing": "kv-stream" // optional; omit for default length-prefixed
  },
  "blob2": {
    "k1": "v1",
    "k2": 123
  }
}
```

Example

```powershell
# process all decoded.json under encrypt/input and mirror results under encrypt/output
npx tsx src/cli.ts encrypt build
```

Notes

- This folder is ignored by git, except for this README.
