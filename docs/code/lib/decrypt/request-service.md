# lib/decrypt/request.service

## Classes

### DecryptRequestService

Defined in:
[src/lib/decrypt/request.service.ts:14](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/lib/decrypt/request.service.ts#L14)

DecryptRequestService.

#### Constructors

##### Constructor

> **new DecryptRequestService**(): [`DecryptRequestService`](#decryptrequestservice)

###### Returns

[`DecryptRequestService`](#decryptrequestservice)

#### Methods

##### decodeFromBase64()

> **decodeFromBase64**(`requestB64`): `object`

Defined in:
[src/lib/decrypt/request.service.ts:26](https://github.com/davinidae/umazing-musumengine/blob/b3f1e8e392a0fc341ec0633657c0dde131d6df19/src/lib/decrypt/request.service.ts#L26)

decodeFromBase64.

###### Parameters

###### requestB64

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
