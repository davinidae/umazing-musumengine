# lib/api-protocol/protocol.util

## Classes

### AuthKey

Defined in:
[lib/api-protocol/protocol.util.ts:58](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L58)

#### Constructors

##### Constructor

> **new AuthKey**(`bytes`): [`AuthKey`](#authkey)

Defined in:
[lib/api-protocol/protocol.util.ts:59](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L59)

###### Parameters

###### bytes

`Uint8Array`

###### Returns

[`AuthKey`](#authkey)

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[lib/api-protocol/protocol.util.ts:59](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L59)

---

### SessionId

Defined in:
[lib/api-protocol/protocol.util.ts:16](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L16)

#### Constructors

##### Constructor

> **new SessionId**(`bytes`): [`SessionId`](#sessionid)

Defined in:
[lib/api-protocol/protocol.util.ts:17](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L17)

###### Parameters

###### bytes

`Uint8Array`

###### Returns

[`SessionId`](#sessionid)

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[lib/api-protocol/protocol.util.ts:17](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L17)

#### Methods

##### asHex()

> **asHex**(): `string`

Defined in:
[lib/api-protocol/protocol.util.ts:23](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L23)

###### Returns

`string`

---

### Udid

Defined in:
[lib/api-protocol/protocol.util.ts:28](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L28)

#### Constructors

##### Constructor

> **new Udid**(`uuid`): [`Udid`](#udid)

Defined in:
[lib/api-protocol/protocol.util.ts:29](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L29)

###### Parameters

###### uuid

`string`

###### Returns

[`Udid`](#udid)

#### Properties

##### uuid

> `readonly` **uuid**: `string`

Defined in:
[lib/api-protocol/protocol.util.ts:29](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L29)

#### Methods

##### ivRepresentation()

> **ivRepresentation**(): `Uint8Array`

Defined in:
[lib/api-protocol/protocol.util.ts:52](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L52)

###### Returns

`Uint8Array`

##### rawBytes()

> **rawBytes**(): `Uint8Array`

Defined in:
[lib/api-protocol/protocol.util.ts:35](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L35)

###### Returns

`Uint8Array`

##### simpleRepresentation()

> **simpleRepresentation**(): `string`

Defined in:
[lib/api-protocol/protocol.util.ts:31](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L31)

###### Returns

`string`

---

### UmaReqBody

Defined in:
[lib/api-protocol/protocol.util.ts:103](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L103)

#### Constructors

##### Constructor

> **new UmaReqBody**(`data`, `key`): [`UmaReqBody`](#umareqbody)

Defined in:
[lib/api-protocol/protocol.util.ts:104](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L104)

###### Parameters

###### data

`Uint8Array`

###### key

`Uint8Array`

###### Returns

[`UmaReqBody`](#umareqbody)

#### Properties

##### data

> `readonly` **data**: `Uint8Array`

Defined in:
[lib/api-protocol/protocol.util.ts:105](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L105)

##### key

> `readonly` **key**: `Uint8Array`

Defined in:
[lib/api-protocol/protocol.util.ts:106](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L106)

#### Methods

##### encrypt()

> **encrypt**(`iv`): `Uint8Array`

Defined in:
[lib/api-protocol/protocol.util.ts:113](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L113)

###### Parameters

###### iv

[`Udid`](#udid)

###### Returns

`Uint8Array`

---

### UmaReqHeader

Defined in:
[lib/api-protocol/protocol.util.ts:68](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L68)

#### Constructors

##### Constructor

> **new UmaReqHeader**(`sessionId`, `udid`, `authKey?`): [`UmaReqHeader`](#umareqheader)

Defined in:
[lib/api-protocol/protocol.util.ts:72](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L72)

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
[lib/api-protocol/protocol.util.ts:75](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L75)

##### commonHeader

> **commonHeader**: `Uint8Array` = `COMMON_HEADER`

Defined in:
[lib/api-protocol/protocol.util.ts:69](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L69)

##### randomBytes

> **randomBytes**: `Uint8Array`

Defined in:
[lib/api-protocol/protocol.util.ts:70](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L70)

##### sessionId

> **sessionId**: [`SessionId`](#sessionid)

Defined in:
[lib/api-protocol/protocol.util.ts:73](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L73)

##### udid

> **udid**: [`Udid`](#udid)

Defined in:
[lib/api-protocol/protocol.util.ts:74](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L74)

#### Methods

##### encode()

> **encode**(): `Uint8Array`

Defined in:
[lib/api-protocol/protocol.util.ts:88](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L88)

###### Returns

`Uint8Array`

##### encodedSize()

> **encodedSize**(): `number`

Defined in:
[lib/api-protocol/protocol.util.ts:84](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L84)

###### Returns

`number`

##### rerandomize()

> **rerandomize**(): `void`

Defined in:
[lib/api-protocol/protocol.util.ts:80](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L80)

###### Returns

`void`

---

### UmaRequest

Defined in:
[lib/api-protocol/protocol.util.ts:125](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L125)

#### Constructors

##### Constructor

> **new UmaRequest**(`header`, `body`): [`UmaRequest`](#umarequest)

Defined in:
[lib/api-protocol/protocol.util.ts:126](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L126)

###### Parameters

###### header

[`UmaReqHeader`](#umareqheader)

###### body

[`UmaReqBody`](#umareqbody)

###### Returns

[`UmaRequest`](#umarequest)

#### Properties

##### body

> `readonly` **body**: [`UmaReqBody`](#umareqbody)

Defined in:
[lib/api-protocol/protocol.util.ts:128](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L128)

##### header

> `readonly` **header**: [`UmaReqHeader`](#umareqheader)

Defined in:
[lib/api-protocol/protocol.util.ts:127](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L127)

#### Methods

##### encode()

> **encode**(): `string`

Defined in:
[lib/api-protocol/protocol.util.ts:131](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L131)

###### Returns

`string`

## Functions

### buildUmaRequest()

> **buildUmaRequest**(`header`, `body`): [`UmaRequest`](#umarequest)

Defined in:
[lib/api-protocol/protocol.util.ts:165](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L165)

#### Parameters

##### header

[`UmaReqHeader`](#umareqheader)

##### body

`unknown`

#### Returns

[`UmaRequest`](#umarequest)

---

### decompressResponse()

> **decompressResponse**(`sourceB64`, `udid`): `Uint8Array`

Defined in:
[lib/api-protocol/protocol.util.ts:171](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L171)

#### Parameters

##### sourceB64

`string`

##### udid

[`Udid`](#udid)

#### Returns

`Uint8Array`

---

### genUmaRequestKey()

> **genUmaRequestKey**(): `Uint8Array`

Defined in:
[lib/api-protocol/protocol.util.ts:151](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L151)

#### Returns

`Uint8Array`

---

### newSessionId()

> **newSessionId**(`udid`, `viewerId`): [`SessionId`](#sessionid)

Defined in:
[lib/api-protocol/protocol.util.ts:62](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L62)

#### Parameters

##### udid

[`Udid`](#udid)

##### viewerId

`bigint`

#### Returns

[`SessionId`](#sessionid)

---

### saltedMd5()

> **saltedMd5**(`data`): `Uint8Array`

Defined in:
[lib/api-protocol/protocol.util.ts:9](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/api-protocol/protocol.util.ts#L9)

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`
