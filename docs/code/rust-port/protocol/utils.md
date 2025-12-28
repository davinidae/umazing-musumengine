# rust-port/protocol/utils

## Classes

### AuthKey

Defined in:
[rust-port/protocol/utils.ts:97](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L97)

#### Constructors

##### Constructor

> **new AuthKey**(`bytes`): [`AuthKey`](#authkey)

Defined in:
[rust-port/protocol/utils.ts:98](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L98)

###### Parameters

###### bytes

`Uint8Array`

###### Returns

[`AuthKey`](#authkey)

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[rust-port/protocol/utils.ts:98](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L98)

---

### SessionId

Defined in:
[rust-port/protocol/utils.ts:66](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L66)

#### Constructors

##### Constructor

> **new SessionId**(`bytes`): [`SessionId`](#sessionid)

Defined in:
[rust-port/protocol/utils.ts:67](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L67)

###### Parameters

###### bytes

`Uint8Array`

###### Returns

[`SessionId`](#sessionid)

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[rust-port/protocol/utils.ts:67](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L67)

#### Methods

##### asHex()

> **asHex**(): `string`

Defined in:
[rust-port/protocol/utils.ts:73](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L73)

###### Returns

`string`

---

### Udid

Defined in:
[rust-port/protocol/utils.ts:78](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L78)

#### Constructors

##### Constructor

> **new Udid**(`uuid`): [`Udid`](#udid)

Defined in:
[rust-port/protocol/utils.ts:79](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L79)

###### Parameters

###### uuid

`string`

###### Returns

[`Udid`](#udid)

#### Properties

##### uuid

> `readonly` **uuid**: `string`

Defined in:
[rust-port/protocol/utils.ts:79](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L79)

#### Methods

##### ivRepresentation()

> **ivRepresentation**(): `Uint8Array`

Defined in:
[rust-port/protocol/utils.ts:89](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L89)

###### Returns

`Uint8Array`

##### rawBytes()

> **rawBytes**(): `Uint8Array`

Defined in:
[rust-port/protocol/utils.ts:85](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L85)

###### Returns

`Uint8Array`

##### simpleRepresentation()

> **simpleRepresentation**(): `string`

Defined in:
[rust-port/protocol/utils.ts:81](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L81)

###### Returns

`string`

---

### UmaReqBody

Defined in:
[rust-port/protocol/utils.ts:145](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L145)

#### Constructors

##### Constructor

> **new UmaReqBody**(`data`, `key`): [`UmaReqBody`](#umareqbody)

Defined in:
[rust-port/protocol/utils.ts:146](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L146)

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
[rust-port/protocol/utils.ts:147](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L147)

##### key

> `readonly` **key**: `Uint8Array`

Defined in:
[rust-port/protocol/utils.ts:148](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L148)

#### Methods

##### encrypt()

> **encrypt**(`iv`): `Uint8Array`

Defined in:
[rust-port/protocol/utils.ts:155](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L155)

###### Parameters

###### iv

[`Udid`](#udid)

###### Returns

`Uint8Array`

---

### UmaReqHeader

Defined in:
[rust-port/protocol/utils.ts:107](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L107)

#### Constructors

##### Constructor

> **new UmaReqHeader**(`sessionId`, `udid`, `authKey?`): [`UmaReqHeader`](#umareqheader)

Defined in:
[rust-port/protocol/utils.ts:111](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L111)

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
[rust-port/protocol/utils.ts:114](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L114)

##### commonHeader

> **commonHeader**: `Uint8Array` = `COMMON_HEADER`

Defined in:
[rust-port/protocol/utils.ts:108](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L108)

##### randomBytes

> **randomBytes**: `Uint8Array`

Defined in:
[rust-port/protocol/utils.ts:109](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L109)

##### sessionId

> **sessionId**: [`SessionId`](#sessionid)

Defined in:
[rust-port/protocol/utils.ts:112](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L112)

##### udid

> **udid**: [`Udid`](#udid)

Defined in:
[rust-port/protocol/utils.ts:113](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L113)

#### Methods

##### encode()

> **encode**(): `Uint8Array`

Defined in:
[rust-port/protocol/utils.ts:127](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L127)

###### Returns

`Uint8Array`

##### encodedSize()

> **encodedSize**(): `number`

Defined in:
[rust-port/protocol/utils.ts:123](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L123)

###### Returns

`number`

##### rerandomize()

> **rerandomize**(): `void`

Defined in:
[rust-port/protocol/utils.ts:119](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L119)

###### Returns

`void`

---

### UmaRequest

Defined in:
[rust-port/protocol/utils.ts:168](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L168)

#### Constructors

##### Constructor

> **new UmaRequest**(`header`, `body`): [`UmaRequest`](#umarequest)

Defined in:
[rust-port/protocol/utils.ts:169](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L169)

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
[rust-port/protocol/utils.ts:171](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L171)

##### header

> `readonly` **header**: [`UmaReqHeader`](#umareqheader)

Defined in:
[rust-port/protocol/utils.ts:170](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L170)

#### Methods

##### encode()

> **encode**(): `string`

Defined in:
[rust-port/protocol/utils.ts:174](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L174)

###### Returns

`string`

##### build()

> `static` **build**(`header`, `body`): [`UmaRequest`](#umarequest)

Defined in:
[rust-port/protocol/utils.ts:182](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L182)

###### Parameters

###### header

[`UmaReqHeader`](#umareqheader)

###### body

`unknown`

###### Returns

[`UmaRequest`](#umarequest)

## Functions

### bytesToHex()

> **bytesToHex**(`bytes`): `string`

Defined in:
[rust-port/protocol/utils.ts:41](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L41)

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`string`

---

### decompressResponse()

> **decompressResponse**(`sourceB64`, `udid`): `Uint8Array`

Defined in:
[rust-port/protocol/utils.ts:189](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L189)

#### Parameters

##### sourceB64

`string`

##### udid

[`Udid`](#udid)

#### Returns

`Uint8Array`

---

### genKey()

> **genKey**(): `Uint8Array`

Defined in:
[rust-port/protocol/utils.ts:45](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L45)

#### Returns

`Uint8Array`

---

### hexToBytes()

> **hexToBytes**(`hex`): `Uint8Array`

Defined in:
[rust-port/protocol/utils.ts:25](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L25)

#### Parameters

##### hex

`string`

#### Returns

`Uint8Array`

---

### newSessionId()

> **newSessionId**(`udid`, `viewerId`): [`SessionId`](#sessionid)

Defined in:
[rust-port/protocol/utils.ts:101](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L101)

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
[rust-port/protocol/utils.ts:59](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/protocol/utils.ts#L59)

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`
