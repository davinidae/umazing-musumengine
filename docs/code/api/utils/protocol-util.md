# api/utils/protocol.util

## Classes

### AuthKey

Defined in:
[api/utils/protocol.util.ts:98](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L98)

#### Constructors

##### Constructor

> **new AuthKey**(`bytes`): [`AuthKey`](#authkey)

Defined in:
[api/utils/protocol.util.ts:99](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L99)

###### Parameters

###### bytes

`Uint8Array`

###### Returns

[`AuthKey`](#authkey)

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[api/utils/protocol.util.ts:99](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L99)

---

### SessionId

Defined in:
[api/utils/protocol.util.ts:67](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L67)

#### Constructors

##### Constructor

> **new SessionId**(`bytes`): [`SessionId`](#sessionid)

Defined in:
[api/utils/protocol.util.ts:68](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L68)

###### Parameters

###### bytes

`Uint8Array`

###### Returns

[`SessionId`](#sessionid)

#### Properties

##### bytes

> `readonly` **bytes**: `Uint8Array`

Defined in:
[api/utils/protocol.util.ts:68](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L68)

#### Methods

##### asHex()

> **asHex**(): `string`

Defined in:
[api/utils/protocol.util.ts:74](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L74)

###### Returns

`string`

---

### Udid

Defined in:
[api/utils/protocol.util.ts:79](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L79)

#### Constructors

##### Constructor

> **new Udid**(`uuid`): [`Udid`](#udid)

Defined in:
[api/utils/protocol.util.ts:80](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L80)

###### Parameters

###### uuid

`string`

###### Returns

[`Udid`](#udid)

#### Properties

##### uuid

> `readonly` **uuid**: `string`

Defined in:
[api/utils/protocol.util.ts:80](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L80)

#### Methods

##### ivRepresentation()

> **ivRepresentation**(): `Uint8Array`

Defined in:
[api/utils/protocol.util.ts:90](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L90)

###### Returns

`Uint8Array`

##### rawBytes()

> **rawBytes**(): `Uint8Array`

Defined in:
[api/utils/protocol.util.ts:86](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L86)

###### Returns

`Uint8Array`

##### simpleRepresentation()

> **simpleRepresentation**(): `string`

Defined in:
[api/utils/protocol.util.ts:82](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L82)

###### Returns

`string`

---

### UmaReqBody

Defined in:
[api/utils/protocol.util.ts:146](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L146)

#### Constructors

##### Constructor

> **new UmaReqBody**(`data`, `key`): [`UmaReqBody`](#umareqbody)

Defined in:
[api/utils/protocol.util.ts:147](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L147)

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
[api/utils/protocol.util.ts:148](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L148)

##### key

> `readonly` **key**: `Uint8Array`

Defined in:
[api/utils/protocol.util.ts:149](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L149)

#### Methods

##### encrypt()

> **encrypt**(`iv`): `Uint8Array`

Defined in:
[api/utils/protocol.util.ts:156](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L156)

###### Parameters

###### iv

[`Udid`](#udid)

###### Returns

`Uint8Array`

---

### UmaReqHeader

Defined in:
[api/utils/protocol.util.ts:108](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L108)

#### Constructors

##### Constructor

> **new UmaReqHeader**(`sessionId`, `udid`, `authKey?`): [`UmaReqHeader`](#umareqheader)

Defined in:
[api/utils/protocol.util.ts:112](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L112)

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
[api/utils/protocol.util.ts:115](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L115)

##### commonHeader

> **commonHeader**: `Uint8Array` = `COMMON_HEADER`

Defined in:
[api/utils/protocol.util.ts:109](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L109)

##### randomBytes

> **randomBytes**: `Uint8Array`

Defined in:
[api/utils/protocol.util.ts:110](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L110)

##### sessionId

> **sessionId**: [`SessionId`](#sessionid)

Defined in:
[api/utils/protocol.util.ts:113](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L113)

##### udid

> **udid**: [`Udid`](#udid)

Defined in:
[api/utils/protocol.util.ts:114](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L114)

#### Methods

##### encode()

> **encode**(): `Uint8Array`

Defined in:
[api/utils/protocol.util.ts:128](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L128)

###### Returns

`Uint8Array`

##### encodedSize()

> **encodedSize**(): `number`

Defined in:
[api/utils/protocol.util.ts:124](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L124)

###### Returns

`number`

##### rerandomize()

> **rerandomize**(): `void`

Defined in:
[api/utils/protocol.util.ts:120](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L120)

###### Returns

`void`

---

### UmaRequest

Defined in:
[api/utils/protocol.util.ts:169](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L169)

#### Constructors

##### Constructor

> **new UmaRequest**(`header`, `body`): [`UmaRequest`](#umarequest)

Defined in:
[api/utils/protocol.util.ts:170](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L170)

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
[api/utils/protocol.util.ts:172](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L172)

##### header

> `readonly` **header**: [`UmaReqHeader`](#umareqheader)

Defined in:
[api/utils/protocol.util.ts:171](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L171)

#### Methods

##### encode()

> **encode**(): `string`

Defined in:
[api/utils/protocol.util.ts:175](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L175)

###### Returns

`string`

##### build()

> `static` **build**(`header`, `body`): [`UmaRequest`](#umarequest)

Defined in:
[api/utils/protocol.util.ts:183](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L183)

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
[api/utils/protocol.util.ts:42](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L42)

#### Parameters

##### bytes

`Uint8Array`

#### Returns

`string`

---

### decompressResponse()

> **decompressResponse**(`sourceB64`, `udid`): `Uint8Array`

Defined in:
[api/utils/protocol.util.ts:190](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L190)

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
[api/utils/protocol.util.ts:46](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L46)

#### Returns

`Uint8Array`

---

### hexToBytes()

> **hexToBytes**(`hex`): `Uint8Array`

Defined in:
[api/utils/protocol.util.ts:26](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L26)

#### Parameters

##### hex

`string`

#### Returns

`Uint8Array`

---

### newSessionId()

> **newSessionId**(`udid`, `viewerId`): [`SessionId`](#sessionid)

Defined in:
[api/utils/protocol.util.ts:102](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L102)

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
[api/utils/protocol.util.ts:60](https://github.com/davinidae/umazing-musumengine/blob/cfd3e9ae4e3abb10b26497490639c3570af3d3eb/src/api/utils/protocol.util.ts#L60)

#### Parameters

##### data

`Uint8Array`

#### Returns

`Uint8Array`
