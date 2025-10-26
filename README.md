# umazing-musumengine

Thanks to user racsonaht at [unknowncheats](https://www.unknowncheats.me/forum/4473299-post1.html) for their initial work from which this tool started.

Tools to decrypt and build game requests/responses (AES-256-CBC, msgpack) with a modular structure.

## Structure

- `common/`
  - `protocol.py`: shared helpers for decrypt and encrypt (Base64, blob parsing, UDID/IV)
- `decrypt/`
  - `common.py`: decrypt-specific utilities (AES-CBC decryption, msgpack unpack, JSON compatibility)
  - `request.py`: CLI to decrypt all packs' `request.txt` under `decrypt/input` (recursive)
  - `response.py`: CLI to decrypt all packs' `response.txt` under `decrypt/input` (recursive, uses sibling `request.txt` to derive UDID/IV)
- `encrypt/`
  - `build.py`: CLI to build requests from all `decoded.json` under `encrypt/input` (recursive)
- `umamusume_cli.py`: unified CLI with `decrypt` and `encrypt` subcommands (with legacy aliases)

Requirements: Python 3.10+ and the dependencies in `requirements.txt`.

## Install dependencies (Windows PowerShell)

It's recommended to use the project's virtual environment if present:

```powershell
# Activate the project's interpreter
\.venv\Scripts\Activate.ps1

# Install dependencies
python -m pip install --upgrade pip setuptools wheel
python -m pip install -r requirements.txt
```

## Usage – Decrypt (packs, batch)

- Unified CLI (recommended):

```powershell
# Create subfolders (packs) under decrypt/input with request.txt and/or response.txt
# Example: decrypt/input/example/request.txt and decrypt/input/example/response.txt

# Decrypt requests of all packs
python umamusume_cli.py decrypt request

# Decrypt responses of all packs (requires a request.txt in the same folder)
python umamusume_cli.py decrypt response

# Or do both in one step
python umamusume_cli.py decrypt all
```

- Direct modules:

```powershell
python -m decrypt.request
python -m decrypt.response
```

The decrypt commands automatically produce the following files under `decrypt/output/<rel>/<file>/`:

- `decoded.bin` (raw decrypted bytes)
- `decoded.json` (combined JSON with `blob1` and `blob2`)

Where `<rel>` mirrors the pack's subfolder path under `decrypt/input`, and `<file>` is the input filename stem (`request` or `response`). For example, for `decrypt/input/example/request.txt`, outputs go to `decrypt/output/example/request/`.


## Usage – Build requests (encrypt batch)

Place one or more `decoded.json` files under `encrypt/input` (you can copy them from `decrypt/output/<stem>/decoded.json` and edit `blob2`). Build will process them recursively and mirror the structure under `encrypt/output`.

```powershell
# Unified CLI
python umamusume_cli.py encrypt build

# Alternative: module
python -m encrypt.build
```

Relevant parameters:

- `--response-key-hex` (32 bytes hex). If omitted, a random one is generated (also accepted from blob1.response_key_hex when present).
- `--sid` (32 hex chars) or `--session-id-hex` (16 bytes hex) to set the session; otherwise takes `blob1.session_id_hex` from the payload.
- `--enc-key-hex` (32 bytes hex) encryption key for `blob2`; if omitted, a random one is generated.

Required fields inside `blob1` (used to derive IV and rebuild blob1): `prefix_hex`, `udid_raw_hex` (or `udid_canonical`), and `auth_key_hex`.

The `decrypt` step already produces `blob1` with all these fields.

## Common usage (end-to-end)

1. Capture request/response Base64 bodies from the game API (e.g., with Fiddler or a proxy) and save them as packs under `decrypt/input/<pack>/request.txt` and `decrypt/input/<pack>/response.txt`.

1. Decrypt them (batch):

```powershell
python umamusume_cli.py decrypt all
```

This writes `decrypt/output/<pack>/<file>/{decoded.bin, decoded.json}`. The `decoded.json` contains both `blob1` and the JSON-friendly payload as `blob2`.

1. Edit `decrypt/output/<pack>/<file>/decoded.json` (only `blob2` typically) to make your changes.

1. Copy edited `decoded.json` files to `encrypt/input/<pack>/` (keep any subfolder layout you prefer) and rebuild:

```powershell
python umamusume_cli.py encrypt build
```

Now you can send the Base64 from `encrypt/output/**/built.b64` to the API.

Compatibility files in the project root (e.g., `build_umamusume.py`, `decrypt_request.py`, `decrypt_response.py`, `umamusume_common.py`) have been removed. Use package modules or the unified CLI instead.

## Notes

- Decrypted binaries include a 4-byte length prefix for msgpack. The CLIs handle packing/unpacking automatically.
- If you need extensions or automation, consider importing `decrypt.common` and `encrypt.build` directly from your own script.
