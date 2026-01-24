# lib/decrypt/request.service

## Classes

### DecryptRequestService

Defined in:
[lib/decrypt/request.service.ts:5](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/decrypt/request.service.ts#L5)

#### Constructors

##### Constructor

> **new DecryptRequestService**(): [`DecryptRequestService`](#decryptrequestservice)

###### Returns

[`DecryptRequestService`](#decryptrequestservice)

#### Methods

##### decodeFromBase64()

> **decodeFromBase64**(`requestB64`): `object`

Defined in:
[lib/decrypt/request.service.ts:6](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/decrypt/request.service.ts#L6)

###### Parameters

###### requestB64

`string`

###### Returns

`object`

###### blob1

> **blob1**: [`Blob1Json`](utils/request-context.util.md#blob1json)

###### blob2

> **blob2**: `unknown` = `printable`

###### plaintext

> **plaintext**: `Buffer`\<`ArrayBufferLike`\>
