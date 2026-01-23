# lib/utils/decrypt.util

## Classes

### `abstract` UnpackStrategy

Defined in:
[src/lib/utils/decrypt.util.ts:29](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/lib/utils/decrypt.util.ts#L29)

UnpackStrategy.

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
[src/lib/utils/decrypt.util.ts:36](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/lib/utils/decrypt.util.ts#L36)

execute.

###### Parameters

###### buf

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

###### Returns

`unknown`

Type: `unknown`.

###### Remarks

Source: `abstract execute(buf: Buffer): unknown | undefined;`.

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[src/lib/utils/decrypt.util.ts:47](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/lib/utils/decrypt.util.ts#L47)

normalizeResponseShape.

###### Parameters

###### v

`unknown`

Type: `unknown`.

###### Returns

`unknown`

Type: `unknown`.

## Functions

### pkcs7Pad()

> **pkcs7Pad**(`data`, `blockSize`): `Buffer`

Defined in:
[src/lib/utils/decrypt.util.ts:13](https://github.com/davinidae/umazing-musumengine/blob/aeab44e843910aee776ca8e80ac77feaac919c49/src/lib/utils/decrypt.util.ts#L13)

pkcs7Pad.

#### Parameters

##### data

`Buffer`

Type: `Buffer<ArrayBufferLike>`.

##### blockSize

`number`

Type: `number`.

#### Returns

`Buffer`

Type: `Buffer<ArrayBufferLike>`.
