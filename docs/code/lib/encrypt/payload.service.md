# lib/encrypt/payload.service

## Classes

### EncryptPayloadService

Defined in:
[lib/encrypt/payload.service.ts:21](https://github.com/davinidae/umazing-musumengine/blob/1ed115c1e87812b3f2579ab1c891c316bbf0b946/src/lib/encrypt/payload.service.ts#L21)

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

> **buildFromParts**(`input`): `object`

Defined in:
[lib/encrypt/payload.service.ts:35](https://github.com/davinidae/umazing-musumengine/blob/1ed115c1e87812b3f2579ab1c891c316bbf0b946/src/lib/encrypt/payload.service.ts#L35)

Build a single request as Base64 from header fields (blob1) and a JS payload.

###### Parameters

###### input

[`EncodeRequestInput`](../models/runtime.model.md#encoderequestinput) & `object`

###### Returns

`object`

An object containing the Base64-encoded request buffer as `requestB64`.

###### requestB64

> **requestB64**: `string`

###### Throws

If mandatory fields are missing or have invalid sizes (e.g., session_id != 16B, response_key !=
32B).
