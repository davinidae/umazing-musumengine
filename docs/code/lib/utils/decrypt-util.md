# lib/utils/decrypt.util

## Classes

### `abstract` UnpackStrategy

Defined in:
[lib/utils/decrypt.util.ts:9](https://github.com/davinidae/umazing-musumengine/blob/6fb3f73446cda6ddc1de53326482ad75533747b1/src/lib/utils/decrypt.util.ts#L9)

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
[lib/utils/decrypt.util.ts:10](https://github.com/davinidae/umazing-musumengine/blob/6fb3f73446cda6ddc1de53326482ad75533747b1/src/lib/utils/decrypt.util.ts#L10)

###### Parameters

###### buf

`Buffer`

###### Returns

`unknown`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/6fb3f73446cda6ddc1de53326482ad75533747b1/src/lib/utils/decrypt.util.ts#L12)

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

## Functions

### pkcs7Pad()

> **pkcs7Pad**(`data`, `blockSize`): `Buffer`

Defined in:
[lib/utils/decrypt.util.ts:1](https://github.com/davinidae/umazing-musumengine/blob/6fb3f73446cda6ddc1de53326482ad75533747b1/src/lib/utils/decrypt.util.ts#L1)

#### Parameters

##### data

`Buffer`

##### blockSize

`number`

#### Returns

`Buffer`
