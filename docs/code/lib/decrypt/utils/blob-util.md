# lib/decrypt/utils/blob.util

## Functions

### decryptBlob2()

> **decryptBlob2**(`blob2`, `iv`): `object`

Defined in:
[src/lib/decrypt/utils/blob.util.ts:13](https://github.com/davinidae/umazing-musumengine/blob/c3424db7d4c963120848a67fbf3509fbef9995f9/src/lib/decrypt/utils/blob.util.ts#L13)

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
