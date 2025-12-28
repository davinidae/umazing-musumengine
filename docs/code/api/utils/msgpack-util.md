# api/utils/msgpack.util

## Functions

### heuristicDecode()

> **heuristicDecode**\<`T`\>(`data`): `T`

Defined in:
[api/utils/msgpack.util.ts:48](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/utils/msgpack.util.ts#L48)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### data

`Uint8Array`

#### Returns

`T`

---

### kvstreamDecode()

> **kvstreamDecode**\<`T`\>(`data`): `T`

Defined in:
[api/utils/msgpack.util.ts:27](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/utils/msgpack.util.ts#L27)

Rust parity: scans forward until the first msgpack string marker, then decodes a sequence of
key(string), value(any) pairs until EOF.

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### data

`Uint8Array`

#### Returns

`T`

---

### msgpackLenDecode()

> **msgpackLenDecode**\<`T`\>(`data`): `T`

Defined in:
[api/utils/msgpack.util.ts:11](https://github.com/davinidae/umazing-musumengine/blob/3287c40709f1f448cf5e0c1e301ea35ff5829e19/src/api/utils/msgpack.util.ts#L11)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### data

`Uint8Array`

#### Returns

`T`
