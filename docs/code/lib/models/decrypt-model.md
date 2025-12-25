# lib/models/decrypt.model

## Classes

### `abstract` UnpackStrategy

Defined in:
[lib/models/decrypt.model.ts:1](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/lib/models/decrypt.model.ts#L1)

#### Extended by

- [`LengthPrefixedStrategy`](../decrypt/shared/unpacker.util.md#lengthprefixedstrategy)
- [`RawMsgpackStrategy`](../decrypt/shared/unpacker.util.md#rawmsgpackstrategy)
- [`MapHeaderScanStrategy`](../decrypt/shared/unpacker.util.md#mapheaderscanstrategy)
- [`KVStreamStrategy`](../decrypt/shared/unpacker.util.md#kvstreamstrategy)
- [`AnchorDataHeadersStrategy`](../decrypt/shared/unpacker.util.md#anchordataheadersstrategy)
- [`MultiArrayStrategy`](../decrypt/shared/unpacker.util.md#multiarraystrategy)
- [`HeuristicStreamToObjectStrategy`](../decrypt/shared/unpacker.util.md#heuristicstreamtoobjectstrategy)

#### Constructors

##### Constructor

> **new UnpackStrategy**(): [`UnpackStrategy`](#unpackstrategy)

###### Returns

[`UnpackStrategy`](#unpackstrategy)

#### Methods

##### execute()

> `abstract` **execute**(`buf`): `unknown`

Defined in:
[lib/models/decrypt.model.ts:2](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/lib/models/decrypt.model.ts#L2)

###### Parameters

###### buf

`Buffer`

###### Returns

`unknown`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/f7b34d19a41237760d3f0823d1a963b560f03912/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys, wrap the
headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`
