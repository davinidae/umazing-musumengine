# lib/decrypt/request.service

## Classes

### DecryptRequestService

Defined in:
[lib/decrypt/request.service.ts:11](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/decrypt/request.service.ts#L11)

Decode request Base64 buffers into header fields and a printable payload. No filesystem access;
suitable for programmatic use and tests.

#### Constructors

##### Constructor

> **new DecryptRequestService**(): [`DecryptRequestService`](#decryptrequestservice)

###### Returns

[`DecryptRequestService`](#decryptrequestservice)

#### Methods

##### decodeFromBase64()

> **decodeFromBase64**(`requestB64`): `object`

Defined in:
[lib/decrypt/request.service.ts:18](https://github.com/davinidae/umazing-musumengine/blob/47f9b56140c43967809e5f0bc8aed0e51605223f/src/lib/decrypt/request.service.ts#L18)

Decode a single request provided as a Base64 string.

###### Parameters

###### requestB64

`string`

Base64-encoded request buffer: [4B LE blob1_len][blob1][blob2].

###### Returns

`object`

`{ blob1, blob2, plaintext }` where `blob1` has hex strings, `blob2` is JSON-compatible, and
`plaintext` is the decrypted payload bytes.

###### blob1

> **blob1**: `object` = `headerJson`

###### blob1.auth_key_hex

> **auth_key_hex**: `string`

###### blob1.encryption_key_hex

> **encryption_key_hex**: `string`

###### blob1.prefix_hex

> **prefix_hex**: `string`

###### blob1.prefix_len

> **prefix_len**: `number` = `header.prefix.length`

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
