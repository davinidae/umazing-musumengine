# lib/decrypt/shared/blob.util

## Functions

### decryptBlob2()

> **decryptBlob2**(`blob2`, `iv`): `object`

Defined in:
[lib/decrypt/shared/blob.util.ts:7](https://github.com/davinidae/umazing-musumengine/blob/793c33ed7f624cc50b8c617e045b6c1c9a8626f2/src/lib/decrypt/shared/blob.util.ts#L7)

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
