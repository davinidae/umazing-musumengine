# Class: AnchorDataHeadersStrategy

Defined in: [lib/decrypt/shared/unpacker.util.ts:130](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/lib/decrypt/shared/unpacker.util.ts#L130)

Targeted heuristic: anchor on the 'data_headers' key often present in tool responses
and reconstruct a map from the surrounding key/value sequence.

## Methods

### execute()

> **execute**(`buf`): `unknown`

Defined in: [lib/decrypt/shared/unpacker.util.ts:135](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/lib/decrypt/shared/unpacker.util.ts#L135)

#### Parameters

##### buf

`Buffer`

Decrypted plaintext buffer.

#### Returns

`unknown`

Object reconstructed when 'data_headers' anchor is present; otherwise undefined.

#### Overrides

`UnpackStrategy.execute`

***

### normalizeResponseShape()

> **normalizeResponseShape**(`v`): `unknown`

Defined in: [lib/models/decrypt.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/18c3ff3260c8ab431287937bbbd69b2ff72846ba/src/lib/models/decrypt.model.ts#L8)

Normalize common response shape: if an object has data and flattened header-like keys,
wrap the headers under data_headers.

#### Parameters

##### v

`unknown`

#### Returns

`unknown`

#### Inherited from

`UnpackStrategy.normalizeResponseShape`
