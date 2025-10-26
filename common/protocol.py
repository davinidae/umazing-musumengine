import base64


def read_base64_file(path: str) -> bytes:
    with open(path, "r", encoding="utf-8", errors="ignore") as f:
        text = f.read()
    compact = "".join(text.split())
    padding = (-len(compact)) % 4
    if padding:
        compact += "=" * padding
    return base64.b64decode(compact)


def parse_request(raw: bytes) -> tuple[bytes, bytes]:
    if len(raw) < 4:
        raise ValueError("File too short: missing 4-byte length prefix for blob1")
    header_len = int.from_bytes(raw[:4], "little")
    if len(raw) < 4 + header_len:
        raise ValueError("blob1 length in header is inconsistent with actual size")
    blob1 = raw[4 : 4 + header_len]
    blob2 = raw[4 + header_len :]
    if len(blob2) < 32:
        raise ValueError("blob2 too short: missing 32-byte AES key appended at the end")
    return blob1, blob2


def parse_header_blob1(blob1: bytes) -> dict:
    if len(blob1) < 112:
        raise ValueError("blob1 too short to contain the required 112 fixed bytes")
    return {
        "prefix": blob1[:-112],
        "session_id": blob1[-112:-96],
        "udid_raw": blob1[-96:-80],
        "response_key": blob1[-80:-48],
        "auth_key": blob1[-48:],
    }


def udid_raw_to_canonical_string(udid_raw: bytes) -> str:
    hx = udid_raw.hex()
    return f"{hx[0:8]}-{hx[8:12]}-{hx[12:16]}-{hx[16:20]}-{hx[20:32]}"


def derive_iv_from_udid_string(udid_string: str) -> bytes:
    udid_no_hyphens = udid_string.replace("-", "")
    iv_ascii_16 = udid_no_hyphens[:16]
    if len(iv_ascii_16) != 16:
        raise ValueError("Unexpected UDID: could not derive 16-byte IV")
    return iv_ascii_16.encode("utf-8")
