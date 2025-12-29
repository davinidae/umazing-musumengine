# lib/decrypt/request.service

## Classes

### DecryptRequestService

Defined in:
[lib/decrypt/request.service.ts:11](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/request.service.ts#L11)

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
[lib/decrypt/request.service.ts:18](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/decrypt/request.service.ts#L18)

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

> **blob1**: `Blob1Json`

###### blob2

> **blob2**: `unknown` = `printable`

###### plaintext

> **plaintext**: `Buffer`\<`ArrayBufferLike`\>
