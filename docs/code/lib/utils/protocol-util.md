# lib/utils/protocol.util

## Classes

### AuthKey

Defined in:
[lib/utils/protocol.util.ts:226](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L226)

#### Constructors

##### Constructor

> **new AuthKey**(`bytes`): [`AuthKey`](#authkey)

Defined in:
[lib/utils/protocol.util.ts:227](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L227)

###### Parameters

###### bytes

`Uint8Array`

###### Returns

[`AuthKey`](#authkey)

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:227](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L227)

---

### SessionId

Defined in:
[lib/utils/protocol.util.ts:180](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L180)

#### Constructors

##### Constructor

> **new SessionId**(`bytes`): [`SessionId`](#sessionid)

Defined in:
[lib/utils/protocol.util.ts:181](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L181)

###### Parameters

###### bytes

`Uint8Array`

###### Returns

[`SessionId`](#sessionid)

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:181](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L181)

#### Methods

##### asHex()

> **asHex**(): `string`

Defined in:
[lib/utils/protocol.util.ts:187](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L187)

###### Returns

`string`

---

### Udid

Defined in:
[lib/utils/protocol.util.ts:192](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L192)

#### Constructors

##### Constructor

> **new Udid**(`uuid`): [`Udid`](#udid)

Defined in:
[lib/utils/protocol.util.ts:193](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L193)

###### Parameters

###### uuid

`string`

###### Returns

[`Udid`](#udid)

#### Properties

##### uuid

> `readonly` **uuid**: `string`

Defined in:
[lib/utils/protocol.util.ts:193](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L193)

#### Methods

##### ivRepresentation()

> **ivRepresentation**(): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:221](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L221)

###### Returns

`Uint8Array`

##### rawBytes()

> **rawBytes**(): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:199](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L199)

###### Returns

`Uint8Array`

##### simpleRepresentation()

> **simpleRepresentation**(): `string`

Defined in:
[lib/utils/protocol.util.ts:195](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L195)

###### Returns

`string`

## Type Aliases

### Blob1Header

> **Blob1Header** = `object`

Defined in:
[lib/utils/protocol.util.ts:15](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L15)

#### Properties

##### auth_key

> **auth_key**: `Buffer`

Defined in:
[lib/utils/protocol.util.ts:20](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L20)

##### prefix

> **prefix**: `Buffer`

Defined in:
[lib/utils/protocol.util.ts:16](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L16)

##### response_key

> **response_key**: `Buffer`

Defined in:
[lib/utils/protocol.util.ts:19](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L19)

##### session_id

> **session_id**: `Buffer`

Defined in:
[lib/utils/protocol.util.ts:17](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L17)

##### udid_raw

> **udid_raw**: `Buffer`

Defined in:
[lib/utils/protocol.util.ts:18](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L18)

##### viewer_id

> **viewer_id**: `number`

Defined in:
[lib/utils/protocol.util.ts:21](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L21)

---

### ParsedRequest

> **ParsedRequest** = `object`

Defined in:
[lib/utils/protocol.util.ts:24](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L24)

#### Properties

##### blob1

> **blob1**: [`Blob1Header`](#blob1header)

Defined in:
[lib/utils/protocol.util.ts:27](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L27)

##### blob1Buffer

> **blob1Buffer**: `Buffer`

Defined in:
[lib/utils/protocol.util.ts:25](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L25)

##### blob2

> **blob2**: `Buffer`

Defined in:
[lib/utils/protocol.util.ts:26](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L26)

## Variables

### AUTH_KEY_BYTES

> `const` **AUTH_KEY_BYTES**: `48` = `48`

Defined in:
[lib/utils/protocol.util.ts:13](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L13)

---

### RESPONSE_KEY_BYTES

> `const` **RESPONSE_KEY_BYTES**: `32` = `32`

Defined in:
[lib/utils/protocol.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L12)

---

### SESSION_ID_BYTES

> `const` **SESSION_ID_BYTES**: `16` = `16`

Defined in:
[lib/utils/protocol.util.ts:10](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L10)

---

### UDID_RAW_BYTES

> `const` **UDID_RAW_BYTES**: `16` = `16`

Defined in:
[lib/utils/protocol.util.ts:11](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L11)

## Functions

### buildBlob1Buffer()

> **buildBlob1Buffer**(`input`): `Buffer`

Defined in:
[lib/utils/protocol.util.ts:143](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L143)

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

### buildEncryptedBlob2LengthPrefixed()

> **buildEncryptedBlob2LengthPrefixed**(`body`, `udid`, `key`): `Buffer`

Defined in:
[lib/utils/protocol.util.ts:130](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L130)

#### Parameters

##### body

`unknown`

##### udid

[`Udid`](#udid)

##### key

`Uint8Array`

#### Returns

`Buffer`

---

### decompressResponse()

> **decompressResponse**(`sourceB64`, `udid`): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:252](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L252)

#### Parameters

##### sourceB64

`string`

##### udid

[`Udid`](#udid)

#### Returns

`Uint8Array`

---

### extractLengthPrefixedPayload()

> **extractLengthPrefixedPayload**(`decrypted`): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:238](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L238)

#### Parameters

##### decrypted

`Buffer`

#### Returns

`Uint8Array`

---

### genUmaRequestKey()

> **genUmaRequestKey**(): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:118](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L118)

#### Returns

`Uint8Array`

---

### newSessionId()

> **newSessionId**(`udid`, `viewerId`): [`SessionId`](#sessionid)

Defined in:
[lib/utils/protocol.util.ts:234](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L234)

#### Parameters

##### udid

[`Udid`](#udid)

##### viewerId

`number`

#### Returns

[`SessionId`](#sessionid)

---

### parseHeaderBlob1()

> **parseHeaderBlob1**(`blob1`): [`Blob1Header`](#blob1header)

Defined in:
[lib/utils/protocol.util.ts:64](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L64)

#### Parameters

##### blob1

`Buffer`

#### Returns

[`Blob1Header`](#blob1header)

---

### parseParsedRequest()

> **parseParsedRequest**(`raw`): [`ParsedRequest`](#parsedrequest)

Defined in:
[lib/utils/protocol.util.ts:97](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L97)

#### Parameters

##### raw

`Buffer`

#### Returns

[`ParsedRequest`](#parsedrequest)

---

### parseRequest()

> **parseRequest**(`raw`): \[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

Defined in:
[lib/utils/protocol.util.ts:113](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L113)

#### Parameters

##### raw

`Buffer`

#### Returns

\[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

---

### readBlob1LengthPrefix()

> **readBlob1LengthPrefix**(`raw`): `number`

Defined in:
[lib/utils/protocol.util.ts:51](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L51)

#### Parameters

##### raw

`Buffer`

#### Returns

`number`

---

### saltedMd5()

> **saltedMd5**(`data`): `Uint8Array`

Defined in:
[lib/utils/protocol.util.ts:173](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L173)

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`

---

### splitBlob1PrefixAndTail()

> **splitBlob1PrefixAndTail**(`blob1`): `object`

Defined in:
[lib/utils/protocol.util.ts:30](https://github.com/davinidae/umazing-musumengine/blob/50c7494330766ef5897c2de8829bdd3d9d1315de/src/lib/utils/protocol.util.ts#L30)

#### Parameters

##### blob1

`Buffer`

#### Returns

`object`

##### hasAuth

> **hasAuth**: `boolean`

##### prefix

> **prefix**: `Buffer`

##### tail

> **tail**: `Buffer`
