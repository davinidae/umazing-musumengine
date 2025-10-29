[**umazing-musumengine**](../../README.md)

***

# Function: decryptBlob2()

> **decryptBlob2**(`blob2`, `iv`): `object`

Defined in: [decrypt/shared/blob.util.ts:7](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/decrypt/shared/blob.util.ts#L7)

Decrypts blob2 using the 32B key appended at its end and the provided IV (AES-256-CBC).
Returns the unpadded plaintext and the key used.

## Parameters

### blob2

`Buffer`

### iv

`Buffer`

## Returns

`object`

### keyUsed

> **keyUsed**: `Buffer`

### plaintext

> **plaintext**: `Buffer`
