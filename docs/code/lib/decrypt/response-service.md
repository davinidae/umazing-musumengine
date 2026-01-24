# lib/decrypt/response.service

## Classes

### DecryptResponseService

Defined in:
[lib/decrypt/response.service.ts:5](https://github.com/davinidae/umazing-musumengine/blob/7806b7e4bb02dbafeebca9a5d829610c2bce50e3/src/lib/decrypt/response.service.ts#L5)

#### Constructors

##### Constructor

> **new DecryptResponseService**(): [`DecryptResponseService`](#decryptresponseservice)

###### Returns

[`DecryptResponseService`](#decryptresponseservice)

#### Methods

##### decodeFromBase64()

> **decodeFromBase64**(`requestB64`, `responseB64`): `object`

Defined in:
[lib/decrypt/response.service.ts:6](https://github.com/davinidae/umazing-musumengine/blob/7806b7e4bb02dbafeebca9a5d829610c2bce50e3/src/lib/decrypt/response.service.ts#L6)

###### Parameters

###### requestB64

`string`

###### responseB64

`string`

###### Returns

`object`

###### blob1

> **blob1**: [`Blob1Json`](utils/request-context.util.md#blob1json)

###### blob2

> **blob2**: `unknown` = `printable`

###### plaintext

> **plaintext**: `Buffer`\<`ArrayBufferLike`\>
