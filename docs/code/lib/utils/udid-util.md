# lib/utils/udid.util

## Functions

### deriveIvFromUdidString()

> **deriveIvFromUdidString**(`udidString`): `Buffer`

Defined in:
[lib/utils/udid.util.ts:19](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/udid.util.ts#L19)

Derive a 16-byte IV from a canonical UDID string (first 16 ASCII chars, hyphens stripped).

#### Parameters

##### udidString

`string`

#### Returns

`Buffer`

---

### udidRawToCanonicalString()

> **udidRawToCanonicalString**(`udidRaw`): `string`

Defined in:
[lib/utils/udid.util.ts:8](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/lib/utils/udid.util.ts#L8)

Convert a 16-byte raw UDID into canonical dashed string form.

#### Parameters

##### udidRaw

`Uint8Array`

#### Returns

`string`
