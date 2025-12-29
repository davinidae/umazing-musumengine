# lib/models/decrypt.model

## Classes

### `abstract` UnpackStrategy

Defined in:
[lib/models/decrypt.model.ts:1](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/decrypt.model.ts#L1)

#### Extended by

- [`LengthPrefixedStrategy`](../decrypt/utils/unpacker.util.md#lengthprefixedstrategy)
- [`RawMsgpackStrategy`](../decrypt/utils/unpacker.util.md#rawmsgpackstrategy)
- [`MapHeaderScanStrategy`](../decrypt/utils/unpacker.util.md#mapheaderscanstrategy)
- [`KVStreamStrategy`](../decrypt/utils/unpacker.util.md#kvstreamstrategy)
- [`AnchorDataHeadersStrategy`](../decrypt/utils/unpacker.util.md#anchordataheadersstrategy)
- [`MultiArrayStrategy`](../decrypt/utils/unpacker.util.md#multiarraystrategy)
- [`HeuristicStreamToObjectStrategy`](../decrypt/utils/unpacker.util.md#heuristicstreamtoobjectstrategy)

#### Constructors

##### Constructor

> **new UnpackStrategy**(): [`UnpackStrategy`](#unpackstrategy)

###### Returns

[`UnpackStrategy`](#unpackstrategy)

#### Methods

##### execute()

> `abstract` **execute**(`buf`): `unknown`

Defined in:
[lib/models/decrypt.model.ts:2](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/decrypt.model.ts#L2)

###### Parameters

###### buf

`Buffer`

###### Returns

`unknown`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/0bb596e6e6fa8d19fbe3c8768f8762ae9ecbec4a/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys, wrap the
headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`
