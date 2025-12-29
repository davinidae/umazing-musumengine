# lib/utils/protocol.util

## Classes

### AuthKey

Defined in:
[lib/utils/protocol.util.ts:237](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L237)

Auth key wrapper (48 bytes when present).

#### Constructors

##### Constructor

> **new AuthKey**(`bytes`): [`AuthKey`](#authkey)

Defined in:
[lib/utils/protocol.util.ts:238](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L238)

###### Parameters

###### bytes

`Uint8Array`

###### Returns

[`AuthKey`](#authkey)

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:238](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L238)

---

### SessionId

Defined in:
[lib/utils/protocol.util.ts:188](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L188)

A 16-byte session identifier.

#### Constructors

##### Constructor

> **new SessionId**(`bytes`): [`SessionId`](#sessionid)

Defined in:
[lib/utils/protocol.util.ts:189](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L189)

###### Parameters

###### bytes

`Uint8Array`

###### Returns

[`SessionId`](#sessionid)

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:189](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L189)

#### Methods

##### asHex()

> **asHex**(): `string`

Defined in:
[lib/utils/protocol.util.ts:195](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L195)

###### Returns

`string`

---

### Udid

Defined in:
[lib/utils/protocol.util.ts:201](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L201)

Device UDID wrapper with helpers to compute IV inputs and raw bytes.

#### Constructors

##### Constructor

> **new Udid**(`uuid`): [`Udid`](#udid)

Defined in:
[lib/utils/protocol.util.ts:202](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L202)

###### Parameters

###### uuid

`string`

###### Returns

[`Udid`](#udid)

#### Properties

##### uuid

> `readonly` **uuid**: `string`

Defined in:
[lib/utils/protocol.util.ts:202](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L202)

#### Methods

##### ivRepresentation()

> **ivRepresentation**(): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:230](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L230)

###### Returns

`Uint8Array`

##### rawBytes()

> **rawBytes**(): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:208](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L208)

###### Returns

`Uint8Array`

##### simpleRepresentation()

> **simpleRepresentation**(): `string`

Defined in:
[lib/utils/protocol.util.ts:204](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L204)

###### Returns

`string`

---

### UmaReqHeader

Defined in:
[lib/utils/protocol.util.ts:259](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L259)

Request header (blob1) builder. Layout:
[COMMON_HEADER][session_id(16)][udid_raw(16)][response_key(32)][auth_key(0|48)]

#### Constructors

##### Constructor

> **new UmaReqHeader**(`sessionId`, `udid`, `authKey?`): [`UmaReqHeader`](#umareqheader)

Defined in:
[lib/utils/protocol.util.ts:263](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L263)

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
[lib/utils/protocol.util.ts:266](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L266)

##### commonHeader

> **commonHeader**: `Uint8Array` = `COMMON_HEADER`

Defined in:
[lib/utils/protocol.util.ts:260](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L260)

##### randomBytes

> **randomBytes**: `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:261](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L261)

##### sessionId

> **sessionId**: [`SessionId`](#sessionid)

Defined in:
[lib/utils/protocol.util.ts:264](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L264)

##### udid

> **udid**: [`Udid`](#udid)

Defined in:
[lib/utils/protocol.util.ts:265](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L265)

#### Methods

##### encode()

> **encode**(): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:285](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L285)

###### Returns

`Uint8Array`

##### encodedSize()

> **encodedSize**(): `number`

Defined in:
[lib/utils/protocol.util.ts:275](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L275)

###### Returns

`number`

##### rerandomize()

> **rerandomize**(): `void`

Defined in:
[lib/utils/protocol.util.ts:271](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L271)

###### Returns

`void`

## Functions

### buildBlob1Buffer()

> **buildBlob1Buffer**(`input`): `Buffer`

Defined in:
[lib/utils/protocol.util.ts:144](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L144)

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
[lib/utils/protocol.util.ts:364](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L364)

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
[lib/utils/protocol.util.ts:343](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L343)

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
[lib/utils/protocol.util.ts:249](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L249)

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
[lib/utils/protocol.util.ts:78](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L78)

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
[lib/utils/protocol.util.ts:115](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L115)

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
[lib/utils/protocol.util.ts:135](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L135)

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
[lib/utils/protocol.util.ts:180](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/protocol.util.ts#L180)

MD5(data || DETERMINISTIC_ENC_SECRET). Used to derive session identifiers consistent with the
upstream behavior.

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`
