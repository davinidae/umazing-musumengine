# lib/decrypt/utils/blob.util

## Functions

### decryptBlob2()

> **decryptBlob2**(`blob2`, `iv`): `object`

Defined in:
[src/lib/decrypt/utils/blob.util.ts:13](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/lib/decrypt/utils/blob.util.ts#L13)

decryptBlob2.

#### Parameters

##### blob2

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

##### iv

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

#### Returns

`object`

Type: `{ plaintext: Buffer<ArrayBufferLike>; keyUsed: Buffer<ArrayBufferLike>; }`.

##### keyUsed

> **keyUsed**: `Buffer`

##### plaintext

> **plaintext**: `Buffer`
