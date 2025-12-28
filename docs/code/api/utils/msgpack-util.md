# api/utils/msgpack.util

## Functions

### heuristicDecode()

> **heuristicDecode**\<`T`\>(`data`): `T`

Defined in:
[api/utils/msgpack.util.ts:48](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/utils/msgpack.util.ts#L48)

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
[api/utils/msgpack.util.ts:27](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/utils/msgpack.util.ts#L27)

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
[api/utils/msgpack.util.ts:11](https://github.com/davinidae/umazing-musumengine/blob/f24ccabc8ff8469c9450c4a9272c4cd9c6be182a/src/api/utils/msgpack.util.ts#L11)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### data

`Uint8Array`

#### Returns

`T`
