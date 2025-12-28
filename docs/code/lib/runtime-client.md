# lib/runtime-client

## Classes

### RuntimeClient

Defined in:
[lib/runtime-client.ts:27](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/lib/runtime-client.ts#L27)

#### Constructors

##### Constructor

> **new RuntimeClient**(`opts`): [`RuntimeClient`](#runtimeclient)

Defined in:
[lib/runtime-client.ts:31](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/lib/runtime-client.ts#L31)

Thin OO wrapper so consumers can inject options later.

###### Parameters

###### opts

[`ServiceOptions`](models/client.model.md#serviceoptions) = `...`

Runtime options including the deterministic secret.

###### Returns

[`RuntimeClient`](#runtimeclient)

#### Properties

##### opts

> `private` `readonly` **opts**: [`ServiceOptions`](models/client.model.md#serviceoptions)

Defined in:
[lib/runtime-client.ts:32](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/lib/runtime-client.ts#L32)

Runtime options including the deterministic secret.

#### Methods

##### decodeResponse()

> **decodeResponse**(`input`):
> [`DecodeResponseOutput`](models/runtime.model.md#decoderesponseoutput)

Defined in:
[lib/runtime-client.ts:64](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/lib/runtime-client.ts#L64)

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
[lib/runtime-client.ts:46](https://github.com/davinidae/umazing-musumengine/blob/de45d1d49605fea07b4cf710c5fa2284e2c9d18c/src/lib/runtime-client.ts#L46)

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
