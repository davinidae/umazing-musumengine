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
    # No input flags for packs: process response.txt files under decrypt/input recursively
    pass


def run(args: argparse.Namespace) -> int:
    in_root = Path("decrypt/input")
    response_files = list(in_root.rglob("response.txt"))
    if not response_files:
        print("No response.txt files found under decrypt/input")
        return 0

    processed = 0
    for path in sorted(response_files):
        # Match request.txt in the same folder
        req_path = path.with_name("request.txt")
        if not req_path.exists():
            print(f"Skip (no matching request.txt in same folder): {path}")
            continue

        try:
            req_raw = read_base64_file(str(req_path))
            h, _ = parse_request(req_raw)
            req_header = parse_header_blob1(h)
        except Exception:
            print(f"Skip (invalid request.txt format): {req_path}")
            continue

        resp_raw = read_base64_file(str(path))
        udid_str = udid_raw_to_canonical_string(req_header["udid_raw"])
        iv = derive_iv_from_udid_string(udid_str)

        decrypted, key_used = decrypt_blob2(resp_raw, iv)
        payload = unpack_length_prefixed_msgpack(decrypted)
        printable = to_json_compatible(payload)

        rel = path.relative_to(in_root)
        out_dir = Path("decrypt/output") / rel.parent / Path(path).stem
        out_dir.mkdir(parents=True, exist_ok=True)

        bin_path = out_dir / "decoded.bin"
        bin_path.write_bytes(decrypted)

        header_json = {
            "prefix_hex": req_header["prefix"].hex(),
            "prefix_len": len(req_header["prefix"]),
            "session_id_hex": req_header["session_id"].hex(),
            "udid_raw_hex": req_header["udid_raw"].hex(),
            "udid_canonical": udid_str,
            "response_key_hex": req_header["response_key"].hex(),
            "auth_key_hex": req_header["auth_key"].hex(),
            "encryption_key_hex": key_used.hex(),
        }

        combined = {"blob1": header_json, "blob2": printable}
        json_path = out_dir / "decoded.json"
        with open(json_path, "w", encoding="utf-8") as f:
            json.dump(combined, f, ensure_ascii=False, indent=2)

        rel_pack = rel.parent if str(rel.parent) != "." else Path("/")
        print(f"OK: response decrypted -> {json_path}")
        print(f"- Pack: {rel_pack} / {Path(path).stem}")
        print(f"- UDID: {udid_str}")
        print(f"- AES key used: {key_used.hex()}")
        print(f"- Decrypted bin: {bin_path}")
        processed += 1

    if processed == 0:
        print("No valid response.txt files detected under decrypt/input")
    return 0


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(description="Decrypt all packs' response.txt under decrypt/input (recursive)")
    configure_parser(parser)
    args = parser.parse_args(argv)
    return run(args)


if __name__ == "__main__":
    import sys

    raise SystemExit(main(sys.argv[1:]))
