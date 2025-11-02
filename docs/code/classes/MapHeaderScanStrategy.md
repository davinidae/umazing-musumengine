[**umazing-musumengine**](../README.md)

***

# Class: MapHeaderScanStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:56](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/decrypt/shared/unpacker.util.ts#L56)

Heuristic: scan for a plausible map header inside the buffer and decode from there.
Looks for likely keys (viewer_id, device, ...) or sufficient string key density.

## Extends

- [`UnpackStrategy`](UnpackStrategy.md)

## Constructors

### Constructor

> **new MapHeaderScanStrategy**(): `MapHeaderScanStrategy`

#### Returns

`MapHeaderScanStrategy`

#### Inherited from

[`UnpackStrategy`](UnpackStrategy.md).[`constructor`](UnpackStrategy.md#constructor)

## Methods

### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:61](https://github.com/davinidae/umazing-musumengine/blob/4ef7fa4bd68ff11c74b5fbedfdd84a758352a918/src/lib/decrypt/shared/unpacker.util.ts#L61)

#### Parameters

##### buf

`Buffer`

Decrypted plaintext buffer.

#### Returns

`unknown`

Decoded object if a plausible map header is found; otherwise undefined.

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
