# lib/utils/decrypt.util

## Classes

### `abstract` UnpackStrategy

Defined in:
[lib/utils/decrypt.util.ts:12](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/decrypt.util.ts#L12)

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
[lib/utils/decrypt.util.ts:13](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/decrypt.util.ts#L13)

###### Parameters

###### buf

`Buffer`

###### Returns

`unknown`

##### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in:
[lib/utils/decrypt.util.ts:19](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/decrypt.util.ts#L19)

Normalize common response shape: if an object has data and flattened header-like keys, wrap the
headers under data_headers.

###### Parameters

###### v

`unknown`

###### Returns

`unknown`

## Functions

### pkcs7Pad()

> **pkcs7Pad**(`data`, `blockSize`): `Buffer`

Defined in:
[lib/utils/decrypt.util.ts:7](https://github.com/davinidae/umazing-musumengine/blob/23b121617aef679f48a8d2fac9ca051b023fc6da/src/lib/utils/decrypt.util.ts#L7)

Apply PKCS#7 padding to a Buffer to reach a multiple of blockSize.

#### Parameters

##### data

`Buffer`

Input buffer to pad.

##### blockSize

`number`

Block size in bytes (e.g., 16 for AES).

#### Returns

`Buffer`

New buffer with padding bytes appended.
