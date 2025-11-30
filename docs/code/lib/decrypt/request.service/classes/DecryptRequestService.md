# Class: DecryptRequestService

Defined in: [lib/decrypt/request.service.ts:11](https://github.com/davinidae/umazing-musumengine/blob/cf87bd67fdf2e5f0d9b1c7ee0046a9e9ec258452/src/lib/decrypt/request.service.ts#L11)

Decode request Base64 buffers into header fields and a printable payload.
No filesystem access; suitable for programmatic use and tests.

## Methods

### decodeFromBase64()

> **decodeFromBase64**(`requestB64`): `object`

Defined in: [lib/decrypt/request.service.ts:18](https://github.com/davinidae/umazing-musumengine/blob/cf87bd67fdf2e5f0d9b1c7ee0046a9e9ec258452/src/lib/decrypt/request.service.ts#L18)

Decode a single request provided as a Base64 string.

#### Parameters

##### requestB64

`string`

Base64-encoded request buffer: [4B LE blob1_len][blob1][blob2].

#### Returns

`object`

`{ blob1, blob2, plaintext }` where `blob1` has hex strings, `blob2` is JSON-compatible, and `plaintext` is the decrypted payload bytes.

##### blob1

> `readonly` **blob1**: `object` = `headerJson`

###### blob1.auth\_key\_hex

> **auth\_key\_hex**: `string`

###### blob1.encryption\_key\_hex

> **encryption\_key\_hex**: `string`

###### blob1.prefix\_hex

> **prefix\_hex**: `string`

###### blob1.prefix\_len

> **prefix\_len**: `number` = `header.prefix.length`

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
