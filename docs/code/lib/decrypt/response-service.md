# lib/decrypt/response.service

## Classes

### DecryptResponseService

Defined in:
[lib/decrypt/response.service.ts:11](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/decrypt/response.service.ts#L11)

Decode response Base64 buffers using the matching request for UDID/IV. The request blob1 provides
UDID to derive the IV; the response is a raw blob2 buffer in Base64.

#### Constructors

##### Constructor

> **new DecryptResponseService**(): [`DecryptResponseService`](#decryptresponseservice)

###### Returns

[`DecryptResponseService`](#decryptresponseservice)

#### Methods

##### decodeFromBase64()

> **decodeFromBase64**(`requestB64`, `responseB64`): `object`

Defined in:
[lib/decrypt/response.service.ts:19](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/src/lib/decrypt/response.service.ts#L19)

Decode a single response provided as a Base64 string, using its matching request.

###### Parameters

###### requestB64

`string`

Base64-encoded full request used to extract UDID and derive IV.

###### responseB64

`string`

Base64-encoded blob2 (ciphertext+key) buffer from the server.

###### Returns

`object`

`{ blob1, blob2, plaintext }` where `blob1` mirrors the request header (hex strings), `blob2` is
JSON-compatible payload, and `plaintext` is decrypted bytes.

###### blob1

> **blob1**: `Blob1Json`

###### blob2

> **blob2**: `unknown` = `printable`

###### plaintext

> **plaintext**: `Buffer`\<`ArrayBufferLike`\>
