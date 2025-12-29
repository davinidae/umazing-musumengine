# lib/decrypt/utils/blob.util

## Functions

### decryptBlob2()

> **decryptBlob2**(`blob2`, `iv`): `object`

Defined in:
[src/lib/decrypt/utils/blob.util.ts:13](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/decrypt/utils/blob.util.ts#L13)

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
