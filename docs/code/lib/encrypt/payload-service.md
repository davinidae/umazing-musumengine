# lib/encrypt/payload.service

## Classes

### EncryptPayloadService

Defined in:
[lib/encrypt/payload.service.ts:27](https://github.com/davinidae/umazing-musumengine/blob/597f437b525cf870a83f149525066e220aca93bd/src/lib/encrypt/payload.service.ts#L27)

Build Base64 requests from in-memory parts (no filesystem access).

Framing modes:

- Default 'length-prefixed': a single msgpack document with a 4-byte little-endian length prefix.
- 'kv-stream' when blob1.framing === 'kv-stream': concatenated msgpack(key)+msgpack(value) pairs.

#### Constructors

##### Constructor

> **new EncryptPayloadService**(): [`EncryptPayloadService`](#encryptpayloadservice)

###### Returns

[`EncryptPayloadService`](#encryptpayloadservice)

#### Methods

##### buildFromParts()

> **buildFromParts**(`input`): `BuiltEncryptedPayload`

Defined in:
[lib/encrypt/payload.service.ts:135](https://github.com/davinidae/umazing-musumengine/blob/597f437b525cf870a83f149525066e220aca93bd/src/lib/encrypt/payload.service.ts#L135)

Build a single request as Base64 from header fields (blob1) and a JS payload.

###### Parameters

###### input

`object` & `Partial`\<\{ `isSignup`: `boolean`; \}\> & `object`

###### Returns

`BuiltEncryptedPayload`

An object containing the Base64-encoded request buffer as `requestB64`.

###### Throws

If mandatory fields are missing or have invalid sizes (e.g., session_id != 16B, response_key !=
32B).

##### buildSignup()

> **buildSignup**(`input`): `BuiltEncryptedPayload`

Defined in:
[lib/encrypt/payload.service.ts:39](https://github.com/davinidae/umazing-musumengine/blob/597f437b525cf870a83f149525066e220aca93bd/src/lib/encrypt/payload.service.ts#L39)

blob1: blob1 length [4 bytes] prefix [52 bytes] session_id [16 bytes] udid [16 bytes] random bytes
[32 bytes] blob2: [encrypted message] key [32 bytes, randomly generated]

###### Parameters

###### input

`object` & `Partial`\<\{ `isSignup`: `boolean`; \}\> & `object`

###### Returns

`BuiltEncryptedPayload`
