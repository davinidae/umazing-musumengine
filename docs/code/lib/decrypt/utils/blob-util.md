# lib/decrypt/utils/blob.util

## Functions

### decryptBlob2()

> **decryptBlob2**(`blob2`, `iv`): `object`

Defined in:
[lib/decrypt/utils/blob.util.ts:7](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/decrypt/utils/blob.util.ts#L7)

Decrypts blob2 using the 32B key appended at its end and the provided IV (AES-256-CBC). Returns the
unpadded plaintext and the key used.

#### Parameters

##### blob2

`Buffer`

##### iv

`Buffer`

#### Returns

`object`

##### keyUsed

> **keyUsed**: `Buffer`

##### plaintext

> **plaintext**: `Buffer`
