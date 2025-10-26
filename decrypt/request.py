import argparse
import json
from pathlib import Path

from common.protocol import (
    read_base64_file,
    parse_request,
    parse_header_blob1,
    udid_raw_to_canonical_string,
    derive_iv_from_udid_string,
)
from .common import (
    decrypt_blob2,
    unpack_length_prefixed_msgpack,
    to_json_compatible,
)


def configure_parser(p: argparse.ArgumentParser) -> None:
    # No input flags: process all files under decrypt/input recursively
    pass


def run(args: argparse.Namespace) -> int:
    in_root = Path("decrypt/input")
    request_files = list(in_root.rglob("request.txt"))
    if not request_files:
        print("No request.txt files found under decrypt/input")
        return 0

    processed = 0
    for path in sorted(request_files):
        try:
            raw = read_base64_file(str(path))
            blob1, blob2 = parse_request(raw)
        except Exception:
            print(f"Skip (invalid request format): {path}")
            continue

        header = parse_header_blob1(blob1)
        udid_str = udid_raw_to_canonical_string(header["udid_raw"])
        iv = derive_iv_from_udid_string(udid_str)

        decrypted, key_used = decrypt_blob2(blob2, iv)
        payload = unpack_length_prefixed_msgpack(decrypted)
        printable = to_json_compatible(payload)

        rel = path.relative_to(in_root)
        out_dir = Path("decrypt/output") / rel.parent / Path(path).stem
        out_dir.mkdir(parents=True, exist_ok=True)

        bin_path = out_dir / "decoded.bin"
        bin_path.write_bytes(decrypted)

        header_json = {
            "prefix_hex": header["prefix"].hex(),
            "prefix_len": len(header["prefix"]),
            "session_id_hex": header["session_id"].hex(),
            "udid_raw_hex": header["udid_raw"].hex(),
            "udid_canonical": udid_str,
            "response_key_hex": header["response_key"].hex(),
            "auth_key_hex": header["auth_key"].hex(),
            "encryption_key_hex": key_used.hex(),
        }

        combined = {"blob1": header_json, "blob2": printable}
        json_path = out_dir / "decoded.json"
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(combined, f, ensure_ascii=False, indent=2)

        print(f"OK: request decrypted -> {json_path}")
        print(f"- Pack: {rel.parent if str(rel.parent) != '.' else '/'} / {Path(path).stem}")
        print(f"- UDID: {udid_str}")
        print(f"- AES key used: {key_used.hex()}")
        print(f"- Decrypted bin: {bin_path}")
        processed += 1

    if processed == 0:
        print("No valid request.txt files detected under decrypt/input")
    return 0


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description="Decrypt all packs' request.txt under decrypt/input (recursive)")
    configure_parser(parser)
    args = parser.parse_args(argv)
    return run(args)


if __name__ == "__main__":
    import sys

    raise SystemExit(main(sys.argv[1:]))
