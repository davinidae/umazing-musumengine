# lib/utils/protocol.util

## Classes

### AuthKey

Defined in:
[src/lib/utils/protocol.util.ts:437](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L437)

AuthKey.

#### Constructors

##### Constructor

> **new AuthKey**(`bytes`): [`AuthKey`](#authkey)

Defined in:
[src/lib/utils/protocol.util.ts:443](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L443)

constructor.

###### Parameters

###### bytes

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.

###### Returns

[`AuthKey`](#authkey)

Type: `AuthKey`.

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[src/lib/utils/protocol.util.ts:443](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L443)

Type: `Uint8Array<ArrayBufferLike>`.

---

### SessionId

Defined in:
[src/lib/utils/protocol.util.ts:331](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L331)

SessionId.

#### Constructors

##### Constructor

> **new SessionId**(`bytes`): [`SessionId`](#sessionid)

Defined in:
[src/lib/utils/protocol.util.ts:337](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L337)

constructor.

###### Parameters

###### bytes

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.

###### Returns

[`SessionId`](#sessionid)

Type: `SessionId`.

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[src/lib/utils/protocol.util.ts:337](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L337)

Type: `Uint8Array<ArrayBufferLike>`.

#### Methods

##### asHex()

> **asHex**(): `string`

Defined in:
[src/lib/utils/protocol.util.ts:347](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L347)

asHex.

###### Returns

`string`

Type: `string`.

---

### Udid

Defined in:
[src/lib/utils/protocol.util.ts:356](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L356)

Udid.

#### Constructors

##### Constructor

> **new Udid**(`uuid`): [`Udid`](#udid)

Defined in:
[src/lib/utils/protocol.util.ts:362](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L362)

constructor.

###### Parameters

###### uuid

`string`

Type: `string`.

###### Returns

[`Udid`](#udid)

Type: `Udid`.

#### Properties

##### uuid

> `readonly` **uuid**: `string`

Defined in:
[src/lib/utils/protocol.util.ts:362](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L362)

Type: `string`.

#### Methods

##### ivRepresentation()

> **ivRepresentation**(): `Uint8Array`

Defined in:
[src/lib/utils/protocol.util.ts:427](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L427)

ivRepresentation.

###### Returns

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.

##### rawBytes()

> **rawBytes**(): `Uint8Array`

Defined in:
[src/lib/utils/protocol.util.ts:376](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L376)

rawBytes.

###### Returns

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.

##### simpleRepresentation()

> **simpleRepresentation**(): `string`

Defined in:
[src/lib/utils/protocol.util.ts:368](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L368)

simpleRepresentation.

###### Returns

`string`

Type: `string`.

---

### UmaReqHeader

Defined in:
[src/lib/utils/protocol.util.ts:480](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L480)

UmaReqHeader.

#### Constructors

##### Constructor

> **new UmaReqHeader**(`sessionId`, `udid`, `authKey?`): [`UmaReqHeader`](#umareqheader)

Defined in:
[src/lib/utils/protocol.util.ts:500](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L500)

constructor.

###### Parameters

###### sessionId

[`SessionId`](#sessionid)

Type: `SessionId`.

###### udid

[`Udid`](#udid)

Type: `Udid`.

###### authKey?

[`AuthKey`](#authkey)

Type: `AuthKey | undefined`.

###### Returns

[`UmaReqHeader`](#umareqheader)

Type: `UmaReqHeader`.

#### Properties

##### authKey?

> `optional` **authKey**: [`AuthKey`](#authkey)

Defined in:
[src/lib/utils/protocol.util.ts:503](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L503)

Type: `AuthKey | undefined`.

##### commonHeader

> **commonHeader**: `Uint8Array` = `COMMON_HEADER`

Defined in:
[src/lib/utils/protocol.util.ts:486](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L486)

commonHeader.

###### Remarks

Type: `Uint8Array<ArrayBufferLike>`.

###### Default Value

`COMMON_HEADER`

##### randomBytes

> **randomBytes**: `Uint8Array`

Defined in:
[src/lib/utils/protocol.util.ts:491](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L491)

randomBytes.

###### Remarks

Type: `Uint8Array<ArrayBufferLike>`.

##### sessionId

> **sessionId**: [`SessionId`](#sessionid)

Defined in:
[src/lib/utils/protocol.util.ts:501](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L501)

Type: `SessionId`.

##### udid

> **udid**: [`Udid`](#udid)

Defined in:
[src/lib/utils/protocol.util.ts:502](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L502)

Type: `Udid`.

#### Methods

##### encode()

> **encode**(): `Uint8Array`

Defined in:
[src/lib/utils/protocol.util.ts:533](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L533)

encode.

###### Returns

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.

##### encodedSize()

> **encodedSize**(): `number`

Defined in:
[src/lib/utils/protocol.util.ts:519](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L519)

encodedSize.

###### Returns

`number`

Type: `number`.

##### rerandomize()

> **rerandomize**(): `void`

Defined in:
[src/lib/utils/protocol.util.ts:511](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L511)

rerandomize.

###### Returns

`void`

## Functions

### buildBlob1Buffer()

> **buildBlob1Buffer**(`input`): `Buffer`

Defined in:
[src/lib/utils/protocol.util.ts:264](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L264)

buildBlob1Buffer.

#### Parameters

##### input

Type:
`{ prefix: Buffer<ArrayBufferLike>; sessionId: Buffer<ArrayBufferLike>; udidRaw: Buffer<ArrayBufferLike>; responseKey: Buffer<ArrayBufferLike>; authKey?: Buffer<ArrayBufferLike> | undefined; }`.

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

Type: `Buffer<ArrayBufferLike>`.

---

### decompressResponse()

> **decompressResponse**(`sourceB64`, `udid`): `Uint8Array`

Defined in:
[src/lib/utils/protocol.util.ts:722](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L722)

decompressResponse.

#### Parameters

##### sourceB64

`string`

Type: `string`.

##### udid

[`Udid`](#udid)

Type: `Udid`.

#### Returns

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.

---

### encodeUmaRequestB64()

> **encodeUmaRequestB64**(`header`, `body`): `string`

Defined in:
[src/lib/utils/protocol.util.ts:675](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L675)

encodeUmaRequestB64.

#### Parameters

##### header

[`UmaReqHeader`](#umareqheader)

Type: `UmaReqHeader`.

##### body

`unknown`

Type: `unknown`.

#### Returns

`string`

Type: `string`.

---

### newSessionId()

> **newSessionId**(`udid`, `viewerId`): [`SessionId`](#sessionid)

Defined in:
[src/lib/utils/protocol.util.ts:460](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L460)

newSessionId.

#### Parameters

##### udid

[`Udid`](#udid)

Type: `Udid`.

##### viewerId

`bigint`

Type: `bigint`.

#### Returns

[`SessionId`](#sessionid)

Type: `SessionId`.

---

### parseHeaderBlob1()

> **parseHeaderBlob1**(`blob1`): `Blob1Header`

Defined in:
[src/lib/utils/protocol.util.ts:138](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L138)

parseHeaderBlob1.

#### Parameters

##### blob1

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

#### Returns

`Blob1Header`

Type: `Blob1Header`.

---

### parseParsedRequest()

> **parseParsedRequest**(`raw`): `ParsedRequest`

Defined in:
[src/lib/utils/protocol.util.ts:205](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L205)

parseParsedRequest.

#### Parameters

##### raw

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

#### Returns

`ParsedRequest`

Type: `ParsedRequest`.

---

### parseRequest()

> **parseRequest**(`raw`): \[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

Defined in:
[src/lib/utils/protocol.util.ts:245](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L245)

parseRequest.

#### Parameters

##### raw

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

#### Returns

\[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

Type: `[Buffer<ArrayBufferLike>, Buffer<ArrayBufferLike>]`.

---

### saltedMd5()

> **saltedMd5**(`data`): `Uint8Array`

Defined in:
[src/lib/utils/protocol.util.ts:315](https://github.com/davinidae/umazing-musumengine/blob/c700395cebb260e117f031a8c5db6db9062abc06/src/lib/utils/protocol.util.ts#L315)

saltedMd5.

#### Parameters

##### data

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.

#### Returns

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.
