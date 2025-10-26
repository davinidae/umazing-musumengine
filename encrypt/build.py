"""Request builder (encrypt/build).

Responsibilities:
- Build a Base64 request body from a decoded JSON (`{ blob1, blob2 }`).
- Pack payload with MessagePack, prefix with length (4B LE), apply PKCS7, encrypt AES-CBC.
- Derive IV from `blob1.udid_canonical` and append the 32B encryption key at the end of blob2.
- Rebuild blob1 using fields from `blob1` or provided parameters (`--sid/--session-id-hex`, `--response-key-hex`).

Shared helpers:
- Imported from `common.protocol`: `udid_raw_to_canonical_string`, `derive_iv_from_udid_string`.
- Decrypt-specific utilities are not used here; those live in `decrypt.common`.
"""

import argparse
import base64
import json
import os
from pathlib import Path

from Crypto.Cipher import AES  # type: ignore
import msgpack  # type: ignore

from common.protocol import (
    udid_raw_to_canonical_string,
    derive_iv_from_udid_string,
)


def from_json_friendly(value):
    if isinstance(value, dict):
        return {from_json_friendly(k): from_json_friendly(v) for k, v in value.items()}
    if isinstance(value, list):
        return [from_json_friendly(v) for v in value]
    if isinstance(value, str) and value.startswith("base64:"):
        b64 = value[len("base64:"):]
        return base64.b64decode(b64)
    return value


def pkcs7_pad(data: bytes, block_size: int) -> bytes:
    pad_len = block_size - (len(data) % block_size)
    return data + bytes([pad_len]) * pad_len


def configure_parser(p: argparse.ArgumentParser) -> None:
    # No input/output flags: process all decoded.json files under encrypt/input recursively
    p.add_argument("--response-key-hex", dest="response_key_hex", default=None, help="Hex of response_key (32B); if omitted, random")
    p.add_argument("--sid", dest="sid_hex", default=None, help="SID in hex (32 chars) to use as session_id in blob1")
    p.add_argument("--session-id-hex", dest="session_id_hex", default=None, help="session_id hex (16B); if omitted, use blob1's if present")
    p.add_argument("--enc-key-hex", dest="enc_key_hex", default=None, help="Encryption key hex (32B) to append; if omitted, random")


def run(args: argparse.Namespace) -> int:
    # 1) Find all decoded.json files under encrypt/input
    in_root = Path("encrypt/input")
    payload_paths = list(in_root.rglob("decoded.json"))
    if not payload_paths:
        print("No decoded.json files found under encrypt/input")
        return 0

    total = 0
    for payload_path in sorted(payload_paths):
        root = json.loads(Path(payload_path).read_text(encoding="utf-8"))
        if not isinstance(root, dict) or "blob1" not in root or "blob2" not in root:
            print(f"Skip (invalid decoded.json structure): {payload_path}")
            continue
        blob1 = root["blob1"]
        payload_source = root["blob2"]

        # Derive IV from UDID (prefer udid_canonical; fallback to udid_raw_hex)
        if isinstance(blob1, dict) and "udid_canonical" in blob1:
            udid_string = blob1["udid_canonical"]
        elif isinstance(blob1, dict) and "udid_raw_hex" in blob1:
            udid_raw = bytes.fromhex(blob1["udid_raw_hex"])  # 16 bytes
            udid_string = udid_raw_to_canonical_string(udid_raw)
        else:
            print(f"Skip (missing UDID fields in blob1): {payload_path}")
            continue
        iv = derive_iv_from_udid_string(udid_string)

        # Optional: derive defaults from blob1 if flags not provided
        blob1_info = blob1 if isinstance(blob1, dict) else {}
        sid_hex = args.sid_hex or args.session_id_hex or blob1_info.get("session_id_hex")
        resp_key_hex = args.response_key_hex or blob1_info.get("response_key_hex")

        payload_obj = from_json_friendly(payload_source)
        packed: bytes = msgpack.packb(payload_obj, use_bin_type=True)  # type: ignore[assignment]
        prefixed = len(packed).to_bytes(4, "little") + packed

        # 2) Prepare keys and encrypt blob2
        if resp_key_hex is not None:
            response_key = bytes.fromhex(resp_key_hex)
            if len(response_key) != 32:
                print(f"Skip (response_key not 32B): {payload_path}")
                continue
        else:
            response_key = os.urandom(32)

        # Priority: --sid (32 hex) > --session-id-hex (16B) > blob1.session_id_hex
        if args.sid_hex is not None:
            try:
                session_id = bytes.fromhex(args.sid_hex)
            except Exception:
                print(f"Skip (invalid --sid override): {payload_path}")
                continue
            if len(session_id) != 16:
                print(f"Skip (--sid must be 16B): {payload_path}")
                continue
        elif args.session_id_hex is not None:
            session_id = bytes.fromhex(args.session_id_hex)
            if len(session_id) != 16:
                print(f"Skip (--session-id-hex must be 16B): {payload_path}")
                continue
        else:
            if sid_hex is None:
                print(f"Skip (missing session_id in overrides and blob1): {payload_path}")
                continue
            session_id = bytes.fromhex(sid_hex)

        if args.enc_key_hex is not None:
            encryption_key = bytes.fromhex(args.enc_key_hex)
            if len(encryption_key) != 32:
                print(f"Skip (--enc-key-hex must be 32B): {payload_path}")
                continue
        else:
            encryption_key = os.urandom(32)

        cipher = AES.new(encryption_key, AES.MODE_CBC, iv)
        padded = pkcs7_pad(prefixed, AES.block_size)
        ciphertext_with_key = cipher.encrypt(padded) + encryption_key

        # 3) Build new blob1: prefix + session_id + udid_raw + response_key + auth_key
        for req in ("prefix_hex", "udid_raw_hex", "auth_key_hex"):
            if req not in blob1_info:
                print(f"Skip (missing '{req}' in blob1): {payload_path}")
                break
        else:
            new_blob1 = (
                bytes.fromhex(blob1_info["prefix_hex"])  # prefix
                + session_id
                + bytes.fromhex(blob1_info["udid_raw_hex"])  # udid_raw
                + response_key
                + bytes.fromhex(blob1_info["auth_key_hex"])  # auth_key
            )

            full_request = len(new_blob1).to_bytes(4, "little") + new_blob1 + ciphertext_with_key
            out_b64 = base64.b64encode(full_request).decode("ascii")

            rel = payload_path.relative_to(in_root)
            out_dir = Path("encrypt/output") / rel.parent
            out_dir.mkdir(parents=True, exist_ok=True)
            out_path = out_dir / "built.b64"
            Path(out_path).write_text(out_b64, encoding="utf-8")

            print("OK: request built")
            print(f"- From decoded.json: {payload_path}")
            print(f"- UDID: {udid_string}")
            print(f"- prefix_len: {len(bytes.fromhex(blob1_info['prefix_hex']))}")
            print(f"- response_key: {response_key.hex()}")
            print(f"- session_id: {session_id.hex()}")
            print(f"- enc_key (blob2): {encryption_key.hex()}")
            print(f"- OUT: {out_path}")
            total += 1

    if total == 0:
        print("No requests were built (check inputs and parameters)")
    return 0


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description="Build Base64 requests from all decoded.json under encrypt/input (recursive)")
    configure_parser(parser)
    args = parser.parse_args(argv)
    return run(args)


if __name__ == "__main__":
    import sys

    raise SystemExit(main(sys.argv[1:]))
