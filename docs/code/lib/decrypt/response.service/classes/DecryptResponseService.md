# Class: DecryptResponseService

Defined in: [lib/decrypt/response.service.ts:11](https://github.com/davinidae/umazing-musumengine/blob/313d7b3da3bf5cac1cbad23523f6160ad25ffb7e/src/lib/decrypt/response.service.ts#L11)

Decode response Base64 buffers using the matching request for UDID/IV.
The request blob1 provides UDID to derive the IV; the response is a raw blob2 buffer in Base64.

## Methods

### decodeFromBase64()

> **decodeFromBase64**(`requestB64`, `responseB64`): `object`

Defined in: [lib/decrypt/response.service.ts:19](https://github.com/davinidae/umazing-musumengine/blob/313d7b3da3bf5cac1cbad23523f6160ad25ffb7e/src/lib/decrypt/response.service.ts#L19)

Decode a single response provided as a Base64 string, using its matching request.

#### Parameters

##### requestB64

`string`

Base64-encoded full request used to extract UDID and derive IV.

##### responseB64

`string`

Base64-encoded blob2 (ciphertext+key) buffer from the server.

#### Returns

`object`

`{ blob1, blob2, plaintext }` where `blob1` mirrors the request header (hex strings), `blob2` is JSON-compatible payload, and `plaintext` is decrypted bytes.

##### blob1

> `readonly` **blob1**: `object` = `headerJson`

###### blob1.auth\_key\_hex

> **auth\_key\_hex**: `string`

###### blob1.encryption\_key\_hex

> **encryption\_key\_hex**: `string`

###### blob1.prefix\_hex

> **prefix\_hex**: `string`

###### blob1.prefix\_len

> **prefix\_len**: `number` = `reqHeader.prefix.length`

###### blob1.response\_key\_hex

> **response\_key\_hex**: `string`

###### blob1.session\_id\_hex

> **session\_id\_hex**: `string`

###### blob1.udid\_canonical

> **udid\_canonical**: `string` = `udidStr`

###### blob1.udid\_raw\_hex

> **udid\_raw\_hex**: `string`

##### blob2

> `readonly` **blob2**: `any` = `printable`

##### plaintext

> **plaintext**: `Buffer`\<`ArrayBufferLike`\>
