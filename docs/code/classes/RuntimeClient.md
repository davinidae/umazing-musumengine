[**umazing-musumengine**](../README.md)

***

# Class: RuntimeClient

Defined in: [lib/runtime-client.ts:29](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/runtime-client.ts#L29)

## Constructors

### Constructor

> **new RuntimeClient**(`opts`): `RuntimeClient`

Defined in: [lib/runtime-client.ts:33](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/runtime-client.ts#L33)

Thin OO wrapper so consumers can inject options later (e.g., logger).

#### Parameters

##### opts

[`ServiceOptions`](../interfaces/ServiceOptions.md) = `...`

Runtime options including the deterministic secret and optional logger.

#### Returns

`RuntimeClient`

## Methods

### decodeResponse()

> **decodeResponse**(`input`): [`DecodeResponseOutput`](../interfaces/DecodeResponseOutput.md)

Defined in: [lib/runtime-client.ts:69](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/runtime-client.ts#L69)

Decode a Base64 response using the matching request for UDID/IV.
Extracts UDID from blob1, derives IV, decrypts blob2, and uses the heuristic Unpacker to parse the plaintext.

#### Parameters

##### input

[`DecodeResponseInput`](../interfaces/DecodeResponseInput.md)

An object with `requestB64` and `responseB64`.

#### Returns

[`DecodeResponseOutput`](../interfaces/DecodeResponseOutput.md)

`{ payload }` best-effort parsed and normalized payload.

#### Throws

If the request blob1 is malformed and UDID cannot be extracted.

***

### encodeRequest()

> **encodeRequest**(`input`): [`EncodeRequestOutput`](../interfaces/EncodeRequestOutput.md)

Defined in: [lib/runtime-client.ts:50](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/runtime-client.ts#L50)

Encode a request from header fields (blob1) and a JS payload.

#### Parameters

##### input

[`EncodeRequestInput`](../interfaces/EncodeRequestInput.md)

Blob1 header pieces and the payload to serialize.

#### Returns

[`EncodeRequestOutput`](../interfaces/EncodeRequestOutput.md)

`{ requestB64 }` the Base64-encoded request buffer.

#### Throws

If mandatory fields are missing or have invalid sizes.
