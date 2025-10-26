# encrypt/input

Place here files you want to use for building Base64 requests (batch).

- `decoded.json` (required): output from decrypt, with shape `{ blob1: {...}, blob2: <payload> }`. The builder uses `blob2` as the payload and may take defaults from `blob1` (`session_id_hex`, `response_key_hex`) when flags are not provided.
  You can place multiple `decoded.json` files in a nested folder structure; the builder will process them recursively.

Example

```powershell
# process all decoded.json under encrypt/input and mirror results under encrypt/output
python umamusume_cli.py encrypt build
```

Notes

- This folder is ignored by git, except for this README.
