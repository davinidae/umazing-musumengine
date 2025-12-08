# Function: pkcs7Pad()

> **pkcs7Pad**(`data`, `blockSize`): `Buffer`

Defined in: [lib/shared/decrypt.util.ts:7](https://github.com/davinidae/umazing-musumengine/blob/6df8e3e1b8dfb16b24d04befbfa6d32c969e2756/src/lib/shared/decrypt.util.ts#L7)

Apply PKCS#7 padding to a Buffer to reach a multiple of blockSize.

## Parameters

### data

`Buffer`

Input buffer to pad.

### blockSize

`number`

Block size in bytes (e.g., 16 for AES).

## Returns

`Buffer`

New buffer with padding bytes appended.
