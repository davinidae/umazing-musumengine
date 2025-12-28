# rust-port/msgpack/utils

## Functions

### heuristicDecode()

> **heuristicDecode**\<`T`\>(`data`): `T`

Defined in:
[rust-port/msgpack/utils.ts:48](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/msgpack/utils.ts#L48)

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
[rust-port/msgpack/utils.ts:27](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/msgpack/utils.ts#L27)

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
[rust-port/msgpack/utils.ts:11](https://github.com/davinidae/umazing-musumengine/blob/5ab33fb89098eb733cdb60603508023e336b136a/src/rust-port/msgpack/utils.ts#L11)

#### Type Parameters

##### T

`T` = `unknown`

#### Parameters

##### data

`Uint8Array`

#### Returns

`T`
