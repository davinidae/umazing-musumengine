[**umazing-musumengine**](../../README.md)

***

# Abstract Class: UnpackStrategy

Defined in: [models/decrypt.model.ts:1](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/models/decrypt.model.ts#L1)

## Extended by

- [`LengthPrefixedStrategy`](LengthPrefixedStrategy.md)
- [`RawMsgpackStrategy`](RawMsgpackStrategy.md)
- [`MapHeaderScanStrategy`](MapHeaderScanStrategy.md)
- [`KVStreamStrategy`](KVStreamStrategy.md)
- [`AnchorDataHeadersStrategy`](AnchorDataHeadersStrategy.md)
- [`MultiArrayStrategy`](MultiArrayStrategy.md)
- [`HeuristicStreamToObjectStrategy`](HeuristicStreamToObjectStrategy.md)

## Constructors

### Constructor

> **new UnpackStrategy**(): `UnpackStrategy`

#### Returns

`UnpackStrategy`

## Methods

### execute()

> `abstract` **execute**(`buf`): `unknown`

Defined in: [models/decrypt.model.ts:2](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/models/decrypt.model.ts#L2)

#### Parameters

##### buf

`Buffer`

#### Returns

`unknown`

***

### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

#### Parameters

##### v

`unknown`

#### Returns

`unknown`
