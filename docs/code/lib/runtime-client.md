# lib/runtime-client

## Classes

### RuntimeClient

Defined in:
[lib/runtime-client.ts:30](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/src/lib/runtime-client.ts#L30)

#### Constructors

##### Constructor

> **new RuntimeClient**(`opts`): [`RuntimeClient`](#runtimeclient)

Defined in:
[lib/runtime-client.ts:34](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/src/lib/runtime-client.ts#L34)

Thin OO wrapper so consumers can inject options later (e.g., logger).

###### Parameters

###### opts

[`ServiceOptions`](models/client.model.md#serviceoptions) = `...`

Runtime options including the deterministic secret and optional logger.

###### Returns

[`RuntimeClient`](#runtimeclient)

#### Properties

##### opts

> `private` `readonly` **opts**: [`ServiceOptions`](models/client.model.md#serviceoptions)

Defined in:
[lib/runtime-client.ts:35](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/src/lib/runtime-client.ts#L35)

Runtime options including the deterministic secret and optional logger.

#### Accessors

##### logger

###### Get Signature

> **get** `private` **logger**(): [`Logger`](models/client.model.md#logger)

Defined in:
[lib/runtime-client.ts:40](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/src/lib/runtime-client.ts#L40)

###### Returns

[`Logger`](models/client.model.md#logger)

#### Methods

##### decodeResponse()

> **decodeResponse**(`input`):
> [`DecodeResponseOutput`](models/runtime.model.md#decoderesponseoutput)

Defined in:
[lib/runtime-client.ts:75](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/src/lib/runtime-client.ts#L75)

Decode a Base64 response using the matching request for UDID/IV. Extracts UDID from blob1, derives
IV, decrypts blob2, and uses the heuristic Unpacker to parse the plaintext.

###### Parameters

###### input

[`DecodeResponseInput`](models/runtime.model.md#decoderesponseinput)

An object with `requestB64` and `responseB64`.

###### Returns

[`DecodeResponseOutput`](models/runtime.model.md#decoderesponseoutput)

`{ payload }` best-effort parsed and normalized payload.

###### Throws

If the request blob1 is malformed and UDID cannot be extracted.

##### encodeRequest()

> **encodeRequest**(`input`): [`EncodeRequestOutput`](models/runtime.model.md#encoderequestoutput)

Defined in:
[lib/runtime-client.ts:51](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/src/lib/runtime-client.ts#L51)

Encode a request from header fields (blob1) and a JS payload.

###### Parameters

###### input

[`EncodeRequestInput`](models/runtime.model.md#encoderequestinput)

Blob1 header pieces and the payload to serialize.

###### Returns

[`EncodeRequestOutput`](models/runtime.model.md#encoderequestoutput)

`{ requestB64 }` the Base64-encoded request buffer.

###### Throws

If mandatory fields are missing or have invalid sizes.
