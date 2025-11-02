[**umazing-musumengine**](../README.md)

***

# Class: HeuristicStreamToObjectStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:222](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/decrypt/shared/unpacker.util.ts#L222)

Last-resort heuristic: decode a short prefix of values and attempt to fold them
into an object starting at the first run of string keys. This is conservative
and only accepts outputs with enough (>=4) key/value pairs.

## Extends

- [`UnpackStrategy`](UnpackStrategy.md)

## Constructors

### Constructor

> **new HeuristicStreamToObjectStrategy**(): `HeuristicStreamToObjectStrategy`

#### Returns

`HeuristicStreamToObjectStrategy`

#### Inherited from

[`UnpackStrategy`](UnpackStrategy.md).[`constructor`](UnpackStrategy.md#constructor)

## Methods

### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:227](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/decrypt/shared/unpacker.util.ts#L227)

#### Parameters

##### buf

`Buffer`

Decrypted plaintext buffer.

#### Returns

`unknown`

Conservatively reconstructed object from a stream, or undefined.

#### Overrides

[`UnpackStrategy`](UnpackStrategy.md).[`execute`](UnpackStrategy.md#execute)

***

### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

#### Parameters

##### v

`unknown`

#### Returns

`unknown`

#### Inherited from

[`UnpackStrategy`](UnpackStrategy.md).[`normalizeResponseShape`](UnpackStrategy.md#normalizeresponseshape)
