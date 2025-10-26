import argparse
import sys

from decrypt import request as decrypt_request
from decrypt import response as decrypt_response
from encrypt import build as encrypt_build


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser(
        description="Umamusume tools: decrypt and encrypt (AES-256-CBC, msgpack)",
        epilog=(
            "Outputs\n"
            "- decrypt request: scans decrypt/input/**/request.txt and writes decrypt/output/<rel>/request/{decoded.bin, decoded.json}\n"
            "- decrypt response: scans decrypt/input/**/response.txt and writes decrypt/output/<rel>/response/{decoded.bin, decoded.json} (requires matching request.txt in the same folder)\n\n"
            "Notes\n"
            "- <rel> mirrors the pack's subfolder structure under decrypt/input.\n"
            "- encrypt build scans encrypt/input recursively for decoded.json and writes built files under encrypt/output, mirroring folder structure.\n"
        ),
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )
    sub = parser.add_subparsers(dest="command", required=True)

    # Group: decrypt
    p_dec = sub.add_parser("decrypt", help="Decryption operations")
    dec_sub = p_dec.add_subparsers(dest="mode", required=True)

    p_dec_req = dec_sub.add_parser(
        "request", help="Decrypt all packs' request.txt under decrypt/input (recursive)"
    )
    decrypt_request.configure_parser(p_dec_req)
    p_dec_req.set_defaults(handler=decrypt_request.run)

    p_dec_resp = dec_sub.add_parser(
        "response", help="Decrypt all packs' response.txt under decrypt/input (recursive)"
    )
    decrypt_response.configure_parser(p_dec_resp)
    p_dec_resp.set_defaults(handler=decrypt_response.run)

    # Decrypt both request and response in one go
    def _decrypt_all_handler(_args: argparse.Namespace) -> int:
        r1 = int(decrypt_request.run(_args))
        r2 = int(decrypt_response.run(_args))
        return 0 if (r1 == 0 and r2 == 0) else 1

    p_dec_all = dec_sub.add_parser(
        "all", help="Decrypt packs (request + response) under decrypt/input (recursive)"
    )
    # No extra args needed; reuse request/response default behavior
    p_dec_all.set_defaults(handler=_decrypt_all_handler)

    # Group: encrypt
    p_enc = sub.add_parser("encrypt", help="Build/encrypt operations")
    enc_sub = p_enc.add_subparsers(dest="mode", required=True)
    p_enc_build = enc_sub.add_parser(
        "build", help="Build Base64 requests from all decoded.json under encrypt/input (recursive)"
    )
    encrypt_build.configure_parser(p_enc_build)
    p_enc_build.set_defaults(handler=encrypt_build.run)

    # Legacy aliases (compatibility): request, response, build
    legacy_req = sub.add_parser("request", help="[LEGACY] same as: decrypt request")
    decrypt_request.configure_parser(legacy_req)
    legacy_req.set_defaults(handler=decrypt_request.run)

    legacy_resp = sub.add_parser("response", help="[LEGACY] same as: decrypt response")
    decrypt_response.configure_parser(legacy_resp)
    legacy_resp.set_defaults(handler=decrypt_response.run)

    legacy_build = sub.add_parser("build", help="[LEGACY] same as: encrypt build")
    encrypt_build.configure_parser(legacy_build)
    legacy_build.set_defaults(handler=encrypt_build.run)

    args = parser.parse_args(argv)
    handler = getattr(args, "handler", None)
    if handler is None:
        parser.error(
            "You must select a command: decrypt|encrypt or legacy: request|response|build"
        )
    return int(handler(args))


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
