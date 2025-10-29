[**umazing-musumengine**](../../README.md)

***

# Class: RawMsgpackStrategy

Defined in: [decrypt/shared/unpacker.util.ts:38](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/decrypt/shared/unpacker.util.ts#L38)

Second try: treat the entire buffer as a single msgpack document.
Useful when the server omits the length prefix for small payloads.

## Extends

- [`UnpackStrategy`](UnpackStrategy.md)

## Constructors

### Constructor

> **new RawMsgpackStrategy**(): `RawMsgpackStrategy`

#### Returns

`RawMsgpackStrategy`

#### Inherited from

[`UnpackStrategy`](UnpackStrategy.md).[`constructor`](UnpackStrategy.md#constructor)

## Methods

### execute()

> **execute**(`buf`): `unknown`

Defined in: [decrypt/shared/unpacker.util.ts:43](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/decrypt/shared/unpacker.util.ts#L43)

#### Parameters

##### buf

`Buffer`

Decrypted plaintext buffer.

#### Returns

`unknown`

Decoded single msgpack value, or undefined if not decodable.

#### Overrides

[`UnpackStrategy`](UnpackStrategy.md).[`execute`](UnpackStrategy.md#execute)

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

#### Inherited from

[`UnpackStrategy`](UnpackStrategy.md).[`normalizeResponseShape`](UnpackStrategy.md#normalizeresponseshape)
