# Function: decryptBlob2()

> **decryptBlob2**(`blob2`, `iv`): `object`

Defined in: [lib/decrypt/shared/blob.util.ts:7](https://github.com/davinidae/umazing-musumengine/blob/44f6e784adc57f5b49586071f4bdcb81060753f5/src/lib/decrypt/shared/blob.util.ts#L7)

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
