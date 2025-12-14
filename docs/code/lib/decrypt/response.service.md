# lib/decrypt/response.service

## Classes

### DecryptResponseService

Defined in:
[lib/decrypt/response.service.ts:11](https://github.com/davinidae/umazing-musumengine/blob/126524ae090ffc71880c35ff08f17d4361e00acd/src/lib/decrypt/response.service.ts#L11)

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
[lib/decrypt/response.service.ts:19](https://github.com/davinidae/umazing-musumengine/blob/126524ae090ffc71880c35ff08f17d4361e00acd/src/lib/decrypt/response.service.ts#L19)

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

> **blob1**: `object` = `headerJson`

###### blob1.auth_key_hex

> **auth_key_hex**: `string`

###### blob1.encryption_key_hex

> **encryption_key_hex**: `string`

###### blob1.prefix_hex

> **prefix_hex**: `string`

###### blob1.prefix_len

> **prefix_len**: `number` = `reqHeader.prefix.length`

###### blob1.response_key_hex

> **response_key_hex**: `string`

###### blob1.session_id_hex

> **session_id_hex**: `string`

###### blob1.udid_canonical

> **udid_canonical**: `string` = `udidStr`

###### blob1.udid_raw_hex

> **udid_raw_hex**: `string`

###### blob2

> **blob2**: `unknown` = `printable`

###### plaintext

> **plaintext**: `Buffer`\<`ArrayBufferLike`\>
