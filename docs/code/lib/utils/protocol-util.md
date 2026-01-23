# lib/utils/protocol.util

## Classes

### AuthKey

Defined in:
[src/lib/utils/protocol.util.ts:438](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L438)

AuthKey.

#### Constructors

##### Constructor

> **new AuthKey**(`bytes`): [`AuthKey`](#authkey)

Defined in:
[src/lib/utils/protocol.util.ts:444](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L444)

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
[src/lib/utils/protocol.util.ts:444](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L444)

Type: `Uint8Array<ArrayBufferLike>`.

---

### SessionId

Defined in:
[src/lib/utils/protocol.util.ts:332](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L332)

SessionId.

#### Constructors

##### Constructor

> **new SessionId**(`bytes`): [`SessionId`](#sessionid)

Defined in:
[src/lib/utils/protocol.util.ts:338](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L338)

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
[src/lib/utils/protocol.util.ts:338](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L338)

Type: `Uint8Array<ArrayBufferLike>`.

#### Methods

##### asHex()

> **asHex**(): `string`

Defined in:
[src/lib/utils/protocol.util.ts:348](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L348)

asHex.

###### Returns

`string`

Type: `string`.

---

### Udid

Defined in:
[src/lib/utils/protocol.util.ts:357](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L357)

Udid.

#### Constructors

##### Constructor

> **new Udid**(`uuid`): [`Udid`](#udid)

Defined in:
[src/lib/utils/protocol.util.ts:363](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L363)

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
[src/lib/utils/protocol.util.ts:363](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L363)

Type: `string`.

#### Methods

##### ivRepresentation()

> **ivRepresentation**(): `Uint8Array`

Defined in:
[src/lib/utils/protocol.util.ts:428](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L428)

ivRepresentation.

###### Returns

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.

##### rawBytes()

> **rawBytes**(): `Uint8Array`

Defined in:
[src/lib/utils/protocol.util.ts:377](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L377)

rawBytes.

###### Returns

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.

##### simpleRepresentation()

> **simpleRepresentation**(): `string`

Defined in:
[src/lib/utils/protocol.util.ts:369](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L369)

simpleRepresentation.

###### Returns

`string`

Type: `string`.

---

### UmaReqHeader

Defined in:
[src/lib/utils/protocol.util.ts:480](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L480)

UmaReqHeader.

#### Constructors

##### Constructor

> **new UmaReqHeader**(`userSession`): [`UmaReqHeader`](#umareqheader)

Defined in:
[src/lib/utils/protocol.util.ts:504](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L504)

constructor.

###### Parameters

###### userSession

[`UserSession`](../../api/services/user-session.service.md#usersession)

###### Returns

[`UmaReqHeader`](#umareqheader)

Type: `UmaReqHeader`.

#### Properties

##### authKey

> **authKey**: [`AuthKey`](#authkey) \| `undefined`

Defined in:
[src/lib/utils/protocol.util.ts:495](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L495)

##### commonHeader

> **commonHeader**: `Uint8Array` = `COMMON_HEADER`

Defined in:
[src/lib/utils/protocol.util.ts:486](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L486)

commonHeader.

###### Remarks

Type: `Uint8Array<ArrayBufferLike>`.

###### Default Value

`COMMON_HEADER`

##### randomBytes

> **randomBytes**: `Uint8Array`

Defined in:
[src/lib/utils/protocol.util.ts:491](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L491)

randomBytes.

###### Remarks

Type: `Uint8Array<ArrayBufferLike>`.

##### sessionId

> **sessionId**: [`SessionId`](#sessionid)

Defined in:
[src/lib/utils/protocol.util.ts:492](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L492)

##### udid

> **udid**: [`Udid`](#udid)

Defined in:
[src/lib/utils/protocol.util.ts:494](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L494)

##### userSession

> **userSession**: [`UserSession`](../../api/services/user-session.service.md#usersession)

Defined in:
[src/lib/utils/protocol.util.ts:504](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L504)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[src/lib/utils/protocol.util.ts:493](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L493)

#### Methods

##### encode()

> **encode**(): `Uint8Array`

Defined in:
[src/lib/utils/protocol.util.ts:537](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L537)

encode.

###### Returns

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.

##### encodedSize()

> **encodedSize**(): `number`

Defined in:
[src/lib/utils/protocol.util.ts:523](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L523)

encodedSize.

###### Returns

`number`

Type: `number`.

##### rerandomize()

> **rerandomize**(): `void`

Defined in:
[src/lib/utils/protocol.util.ts:515](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L515)

rerandomize.

###### Returns

`void`

## Functions

### buildBlob1Buffer()

> **buildBlob1Buffer**(`input`): `Buffer`

Defined in:
[src/lib/utils/protocol.util.ts:265](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L265)

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
[src/lib/utils/protocol.util.ts:726](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L726)

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
[src/lib/utils/protocol.util.ts:679](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L679)

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
[src/lib/utils/protocol.util.ts:461](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L461)

newSessionId.

#### Parameters

##### udid

[`Udid`](#udid)

Type: `Udid`.

##### viewerId

`number`

Type: `bigint`.

#### Returns

[`SessionId`](#sessionid)

Type: `SessionId`.

---

### parseHeaderBlob1()

> **parseHeaderBlob1**(`blob1`): `Blob1Header`

Defined in:
[src/lib/utils/protocol.util.ts:139](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L139)

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
[src/lib/utils/protocol.util.ts:206](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L206)

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
[src/lib/utils/protocol.util.ts:246](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L246)

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
[src/lib/utils/protocol.util.ts:316](https://github.com/davinidae/umazing-musumengine/blob/76582159e9b470b4b8fcb28abde476e42b4e7b89/src/lib/utils/protocol.util.ts#L316)

saltedMd5.

#### Parameters

##### data

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.

#### Returns

`Uint8Array`

Type: `Uint8Array<ArrayBufferLike>`.
