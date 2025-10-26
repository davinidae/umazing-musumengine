"""Decrypt-specific utilities.

- Includes: blob2 decryption (AES-CBC + PKCS7), length-prefixed msgpack unpacking,
    and conversion to JSON-friendly types.
- Does not re-export shared helpers: protocol-level helpers live in
    `common.protocol` and should be imported directly from there.
"""

import base64

from Crypto.Cipher import AES  # type: ignore
from Crypto.Util.Padding import unpad  # type: ignore
import msgpack  # type: ignore


def decrypt_blob2(blob2: bytes, iv: bytes) -> tuple[bytes, bytes]:
    key = blob2[-32:]
    ciphertext = blob2[:-32]
    cipher = AES.new(key, AES.MODE_CBC, iv)
    padded = cipher.decrypt(ciphertext)
    plaintext = unpad(padded, AES.block_size, style="pkcs7")
    return plaintext, key


def unpack_length_prefixed_msgpack(plaintext: bytes):
    if len(plaintext) < 4:
        raise ValueError("Payload descifrado demasiado corto para contener el prefijo de longitud")
    msg_len = int.from_bytes(plaintext[:4], "little")
    if len(plaintext) < 4 + msg_len:
        raise ValueError("Longitud de msgpack inconsistente con los datos")
    mp = plaintext[4 : 4 + msg_len]
    return msgpack.unpackb(mp, raw=False, strict_map_key=False, use_list=True)


def to_json_compatible(value):
    if isinstance(value, dict):
        return {str(to_json_compatible(k)): to_json_compatible(v) for k, v in value.items()}
    if isinstance(value, (list, tuple, set)):
        return [to_json_compatible(v) for v in value]
    if isinstance(value, (bytes, bytearray, memoryview)):
        b = bytes(value)
        try:
            return b.decode("utf-8")
        except Exception:
            return "base64:" + base64.b64encode(b).decode("ascii")
    return value
