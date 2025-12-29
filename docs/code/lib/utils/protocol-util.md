# lib/utils/protocol.util

## Classes

### AuthKey

Defined in:
[lib/utils/protocol.util.ts:215](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L215)

Auth key wrapper (48 bytes when present).

#### Constructors

##### Constructor

> **new AuthKey**(`bytes`): [`AuthKey`](#authkey)

Defined in:
[lib/utils/protocol.util.ts:216](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L216)

###### Parameters

###### bytes

`Uint8Array`

###### Returns

[`AuthKey`](#authkey)

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:216](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L216)

---

### SessionId

Defined in:
[lib/utils/protocol.util.ts:171](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L171)

A 16-byte session identifier.

#### Constructors

##### Constructor

> **new SessionId**(`bytes`): [`SessionId`](#sessionid)

Defined in:
[lib/utils/protocol.util.ts:172](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L172)

###### Parameters

###### bytes

`Uint8Array`

###### Returns

[`SessionId`](#sessionid)

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:172](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L172)

#### Methods

##### asHex()

> **asHex**(): `string`

Defined in:
[lib/utils/protocol.util.ts:178](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L178)

###### Returns

`string`

---

### Udid

Defined in:
[lib/utils/protocol.util.ts:184](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L184)

Device UDID wrapper with helpers to compute IV inputs and raw bytes.

#### Constructors

##### Constructor

> **new Udid**(`uuid`): [`Udid`](#udid)

Defined in:
[lib/utils/protocol.util.ts:185](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L185)

###### Parameters

###### uuid

`string`

###### Returns

[`Udid`](#udid)

#### Properties

##### uuid

> `readonly` **uuid**: `string`

Defined in:
[lib/utils/protocol.util.ts:185](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L185)

#### Methods

##### ivRepresentation()

> **ivRepresentation**(): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:208](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L208)

###### Returns

`Uint8Array`

##### rawBytes()

> **rawBytes**(): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:191](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L191)

###### Returns

`Uint8Array`

##### simpleRepresentation()

> **simpleRepresentation**(): `string`

Defined in:
[lib/utils/protocol.util.ts:187](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L187)

###### Returns

`string`

---

### UmaReqHeader

Defined in:
[lib/utils/protocol.util.ts:233](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L233)

Request header (blob1) builder. Layout:
[COMMON_HEADER][session_id(16)][udid_raw(16)][response_key(32)][auth_key(0|48)]

#### Constructors

##### Constructor

> **new UmaReqHeader**(`sessionId`, `udid`, `authKey?`): [`UmaReqHeader`](#umareqheader)

Defined in:
[lib/utils/protocol.util.ts:237](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L237)

###### Parameters

###### sessionId

[`SessionId`](#sessionid)

###### udid

[`Udid`](#udid)

###### authKey?

[`AuthKey`](#authkey)

###### Returns

[`UmaReqHeader`](#umareqheader)

#### Properties

##### authKey?

> `optional` **authKey**: [`AuthKey`](#authkey)

Defined in:
[lib/utils/protocol.util.ts:240](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L240)

##### commonHeader

> **commonHeader**: `Uint8Array` = `COMMON_HEADER`

Defined in:
[lib/utils/protocol.util.ts:234](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L234)

##### randomBytes

> **randomBytes**: `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:235](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L235)

##### sessionId

> **sessionId**: [`SessionId`](#sessionid)

Defined in:
[lib/utils/protocol.util.ts:238](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L238)

##### udid

> **udid**: [`Udid`](#udid)

Defined in:
[lib/utils/protocol.util.ts:239](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L239)

#### Methods

##### encode()

> **encode**(): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:253](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L253)

###### Returns

`Uint8Array`

##### encodedSize()

> **encodedSize**(): `number`

Defined in:
[lib/utils/protocol.util.ts:249](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L249)

###### Returns

`number`

##### rerandomize()

> **rerandomize**(): `void`

Defined in:
[lib/utils/protocol.util.ts:245](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L245)

###### Returns

`void`

## Functions

### buildBlob1Buffer()

> **buildBlob1Buffer**(`input`): `Buffer`

Defined in:
[lib/utils/protocol.util.ts:127](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L127)

Build a blob1 buffer with the canonical layout:
[prefix][session_id(16)][udid_raw(16)][response_key(32)][auth_key(0|48)].

#### Parameters

##### input

###### authKey?

`Buffer`\<`ArrayBufferLike`\>

###### prefix

`Buffer`

###### responseKey

`Buffer`

###### sessionId

`Buffer`

###### udidRaw

`Buffer`

#### Returns

`Buffer`

---

### decompressResponse()

> **decompressResponse**(`sourceB64`, `udid`): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:312](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L312)

Decrypt and extract the (optionally length-prefixed) msgpack payload from a response body.

#### Parameters

##### sourceB64

`string`

Server response body (Base64-encoded blob2).

##### udid

[`Udid`](#udid)

UDID used to derive the AES IV.

#### Returns

`Uint8Array`

---

### encodeUmaRequestB64()

> **encodeUmaRequestB64**(`header`, `body`): `string`

Defined in:
[lib/utils/protocol.util.ts:286](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L286)

Encode a full request to Base64. Wire format: [4B LE blob1_len][blob1][blob2].

#### Parameters

##### header

[`UmaReqHeader`](#umareqheader)

##### body

`unknown`

#### Returns

`string`

---

### newSessionId()

> **newSessionId**(`udid`, `viewerId`): [`SessionId`](#sessionid)

Defined in:
[lib/utils/protocol.util.ts:223](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L223)

Derive a new session id from UDID and viewer id. Parity with Rust implementation: md5(
"{viewerId}{uuid}" || salt )

#### Parameters

##### udid

[`Udid`](#udid)

##### viewerId

`bigint`

#### Returns

[`SessionId`](#sessionid)

---

### parseHeaderBlob1()

> **parseHeaderBlob1**(`blob1`): `Blob1Header`

Defined in:
[lib/utils/protocol.util.ts:64](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L64)

Parse a blob1 Buffer into a Blob1Header instance.

#### Parameters

##### blob1

`Buffer`

#### Returns

`Blob1Header`

#### Throws

If required field sizes are not present.

---

### parseParsedRequest()

> **parseParsedRequest**(`raw`): `ParsedRequest`

Defined in:
[lib/utils/protocol.util.ts:98](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L98)

Parse a full request buffer into a ParsedRequest.

#### Parameters

##### raw

`Buffer`

#### Returns

`ParsedRequest`

#### Throws

If the buffer is too short or sizes are inconsistent.

---

### parseRequest()

> **parseRequest**(`raw`): \[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

Defined in:
[lib/utils/protocol.util.ts:118](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L118)

Legacy helper: parse a full request buffer into `[blob1, blob2]`. Kept for backwards compatibility
with older tests/consumers.

#### Parameters

##### raw

`Buffer`

#### Returns

\[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

---

### saltedMd5()

> **saltedMd5**(`data`): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:163](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/protocol.util.ts#L163)

MD5(data || DETERMINISTIC_ENC_SECRET). Used to derive session identifiers consistent with the
upstream behavior.

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`
