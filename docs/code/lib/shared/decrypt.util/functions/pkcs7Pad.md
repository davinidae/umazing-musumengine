# Function: pkcs7Pad()

> **pkcs7Pad**(`data`, `blockSize`): `Buffer`

Defined in: [lib/shared/decrypt.util.ts:7](https://github.com/davinidae/umazing-musumengine/blob/18fb9920f0c1134675a2221f55ba500b4715772f/src/lib/shared/decrypt.util.ts#L7)

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
