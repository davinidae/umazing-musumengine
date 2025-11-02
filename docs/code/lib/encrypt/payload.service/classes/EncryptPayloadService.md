# Class: EncryptPayloadService

Defined in: [lib/encrypt/payload.service.ts:20](https://github.com/davinidae/umazing-musumengine/blob/ef7abbeb2f0a0bbb0762686b42f68cdafb94656e/src/lib/encrypt/payload.service.ts#L20)

Build Base64 requests from in-memory parts (no filesystem access).

Framing modes:
- Default 'length-prefixed': a single msgpack document with a 4-byte little-endian length prefix.
- 'kv-stream' when blob1.framing === 'kv-stream': concatenated msgpack(key)+msgpack(value) pairs.

## Methods

### buildFromParts()

> **buildFromParts**(`input`): `object`

Defined in: [lib/encrypt/payload.service.ts:34](https://github.com/davinidae/umazing-musumengine/blob/ef7abbeb2f0a0bbb0762686b42f68cdafb94656e/src/lib/encrypt/payload.service.ts#L34)

Build a single request as Base64 from header fields (blob1) and a JS payload.

#### Parameters

##### input

###### blob1

\{ `auth_key_hex`: `string`; `framing?`: `"length-prefixed"` \| `"kv-stream"`; `prefix_hex`: `string`; `response_key_hex`: `string`; `session_id_hex`: `string`; `udid_canonical?`: `string`; `udid_raw_hex?`: `string`; \}

Header fields in hex (prefix, session_id, udid_raw or udid_canonical, response_key, auth_key). Optional framing hint.

###### blob1.auth_key_hex

`string`

###### blob1.framing?

`"length-prefixed"` \| `"kv-stream"`

###### blob1.prefix_hex

`string`

###### blob1.response_key_hex

`string`

###### blob1.session_id_hex

`string`

###### blob1.udid_canonical?

`string`

###### blob1.udid_raw_hex?

`string`

###### DETERMINISTIC_ENC_SECRET

`string`

ASCII secret used to derive the 32-byte AES-256 key (SHA-256).

###### payload

`unknown`

Arbitrary payload value; Buffers can be provided via `fromJsonFriendly` encoding.

#### Returns

`object`

An object containing the Base64-encoded request buffer as `requestB64`.

##### requestB64

> **requestB64**: `string`

#### Throws

If mandatory fields are missing or have invalid sizes (e.g., session_id != 16B, response_key != 32B).
