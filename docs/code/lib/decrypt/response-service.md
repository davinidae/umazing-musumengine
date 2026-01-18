# lib/decrypt/response.service

## Classes

### DecryptResponseService

Defined in:
[src/lib/decrypt/response.service.ts:14](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/decrypt/response.service.ts#L14)

DecryptResponseService.

#### Constructors

##### Constructor

> **new DecryptResponseService**(): [`DecryptResponseService`](#decryptresponseservice)

###### Returns

[`DecryptResponseService`](#decryptresponseservice)

#### Methods

##### decodeFromBase64()

> **decodeFromBase64**(`requestB64`, `responseB64`): `object`

Defined in:
[src/lib/decrypt/response.service.ts:28](https://github.com/davinidae/umazing-musumengine/blob/bfc4a80e82b79071340aa57781e33eb50ffad709/src/lib/decrypt/response.service.ts#L28)

decodeFromBase64.

###### Parameters

###### requestB64

`string`

Type: `string`.

###### responseB64

`string`

Type: `string`.

###### Returns

`object`

Type: `{ blob1: Blob1Json; blob2: unknown; plaintext: Buffer<ArrayBufferLike>; }`.

###### blob1

> **blob1**: `Blob1Json`

###### blob2

> **blob2**: `unknown` = `printable`

###### plaintext

> **plaintext**: `Buffer`\<`ArrayBufferLike`\>
