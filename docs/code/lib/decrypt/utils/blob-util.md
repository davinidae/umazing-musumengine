# lib/decrypt/utils/blob.util

## Functions

### decryptBlob2()

> **decryptBlob2**(`blob2`, `iv`): `object`

Defined in:
[src/lib/decrypt/utils/blob.util.ts:13](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/lib/decrypt/utils/blob.util.ts#L13)

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
