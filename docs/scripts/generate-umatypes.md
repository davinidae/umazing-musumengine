# generate-umatypes

## Functions

### ensureDir()

> **ensureDir**(`p`): `void`

Defined in:
[generate-umatypes.ts:8](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/scripts/generate-umatypes.ts#L8)

Ensures a directory exists, creating any missing parent folders.

#### Parameters

##### p

`string`

Absolute or relative path to the directory

#### Returns

`void`

---

### mapDotNetTypeToTs()

> **mapDotNetTypeToTs**(`type`): `string`

Defined in:
[generate-umatypes.ts:50](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/scripts/generate-umatypes.ts#L50)

Map common .NET types found in metadata to TypeScript types.

#### Parameters

##### type

`string`

Raw .NET type string (e.g., `System.Int32`, `System.String[]`)

#### Returns

`string`

A TypeScript type representation

---

### mirrorTxtToTypes()

> **mirrorTxtToTypes**(): `void`

Defined in:
[generate-umatypes.ts:172](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/scripts/generate-umatypes.ts#L172)

Entrypoint: cleans destination and generates a single `src/umatypes/index.d.ts`. Wraps all generated
types inside `declare global { namespace Umatypes { ... } }`.

#### Returns

`void`

---

### readLines()

> **readLines**(`filePath`): `string`[]

Defined in:
[generate-umatypes.ts:35](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/scripts/generate-umatypes.ts#L35)

Read a text file and return non-empty trimmed lines.

#### Parameters

##### filePath

`string`

Path to the text file

#### Returns

`string`[]

---

### toTypeName()

> **toTypeName**(`fileName`): `string`

Defined in:
[generate-umatypes.ts:19](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/scripts/generate-umatypes.ts#L19)

Convert a `_metadata.txt` filename into a PascalCase type name.

#### Parameters

##### fileName

`string`

Source metadata filename

#### Returns

`string`

PascalCase type name (falls back to `Unnamed`)

---

### walk()

> **walk**(`abs`, `typeBlocks`): `string`[]

Defined in:
[generate-umatypes.ts:132](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/scripts/generate-umatypes.ts#L132)

Recursively walk the docs tree, collecting type alias blocks.

Skips `method_dumps` and only processes `*_metadata.txt` files.

#### Parameters

##### abs

`string`

Absolute path of the directory to walk

##### typeBlocks

`string`[] = `[]`

Accumulator array for type strings

#### Returns

`string`[]

The accumulator with collected type blocks

---

### writeTypeAliasFromMetadataToString()

> **writeTypeAliasFromMetadataToString**(`typeName`, `lines`): `string` \| `null`

Defined in:
[generate-umatypes.ts:82](https://github.com/davinidae/umazing-musumengine/blob/2fd0a7ae5bcd71fb665112d795849ae0ada2b9de/scripts/generate-umatypes.ts#L82)

Build a TypeScript type alias from `_metadata.txt` contents.

Extracts `Field:` and `Type:` pairs; skips generation for empty types.

#### Parameters

##### typeName

`string`

Target type alias name

##### lines

`string`[]

Metadata file lines

#### Returns

`string` \| `null`

Type alias string or null when empty
