[**umazing-musumengine**](../../README.md)

***

# Class: RuntimeClient

Defined in: [runtime.ts:39](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/runtime.ts#L39)

## Constructors

### Constructor

> **new RuntimeClient**(`opts`): `RuntimeClient`

Defined in: [runtime.ts:41](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/runtime.ts#L41)

Thin OO wrapper so consumers can inject options later (e.g., logger).

#### Parameters

##### opts

[`RuntimeClientOptions`](../interfaces/RuntimeClientOptions.md) = `{}`

#### Returns

`RuntimeClient`

## Methods

### decodeResponse()

> **decodeResponse**(`input`): [`DecodeResponseOutput`](../interfaces/DecodeResponseOutput.md)

Defined in: [runtime.ts:140](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/runtime.ts#L140)

Decode a Base64 response using the matching request for UDID/IV.
Extracts UDID from blob1, derives IV, decrypts blob2, and uses
the heuristic Unpacker to parse the plaintext.

#### Parameters

##### input

[`DecodeResponseInput`](../interfaces/DecodeResponseInput.md)

An object with requestB64 and responseB64.

#### Returns

[`DecodeResponseOutput`](../interfaces/DecodeResponseOutput.md)

The parsed payload best-effort as { payload }.

#### Throws

If the request blob1 is malformed and UDID cannot be extracted.

***

### encodeRequest()

> **encodeRequest**(`input`): [`EncodeRequestOutput`](../interfaces/EncodeRequestOutput.md)

Defined in: [runtime.ts:53](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/runtime.ts#L53)

Encode a request from header fields (blob1) and a JS payload.

#### Parameters

##### input

[`EncodeRequestInput`](../interfaces/EncodeRequestInput.md)

Blob1 header pieces and the payload to serialize.

#### Returns

[`EncodeRequestOutput`](../interfaces/EncodeRequestOutput.md)

An object containing the Base64-encoded request buffer.

#### Throws

If mandatory fields are missing or have invalid sizes.
