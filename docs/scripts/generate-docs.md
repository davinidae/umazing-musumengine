# generate-docs

## Variables

### DOCS_ROOT

> `const` **DOCS_ROOT**: `string`

Defined in:
[generate-docs.ts:5](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/scripts/generate-docs.ts#L5)

---

### HOME_PATH

> `const` **HOME_PATH**: `string`

Defined in:
[generate-docs.ts:7](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/scripts/generate-docs.ts#L7)

---

### SIDEBAR_PATH

> `const` **SIDEBAR_PATH**: `string`

Defined in:
[generate-docs.ts:6](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/scripts/generate-docs.ts#L6)

## Functions

### generate()

> **generate**(): `void`

Defined in:
[generate-docs.ts:164](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/scripts/generate-docs.ts#L164)

Entrypoint: generates `docs/_Sidebar.md` from the contents of `docs/`.

#### Returns

`void`

---

### isHidden()

> **isHidden**(`name`): `boolean`

Defined in:
[generate-docs.ts:14](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/scripts/generate-docs.ts#L14)

Returns whether a docs entry should be hidden from the sidebar.

#### Parameters

##### name

`string`

Filename or directory name

#### Returns

`boolean`

---

### link()

> **link**(`rel`, `name`): `string`

Defined in:
[generate-docs.ts:72](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/scripts/generate-docs.ts#L72)

Create a GitHub Wiki compatible Markdown link for a file.

- For Markdown: strip extension and replace spaces with hyphens
- For others: URL-encode reserved characters

#### Parameters

##### rel

`string`

Relative path from docs root

##### name

`string`

Display name

#### Returns

`string`

---

### read()

> **read**(`dirAbs`, `relBase`): `Node`[]

Defined in:
[generate-docs.ts:31](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/scripts/generate-docs.ts#L31)

Recursively reads the docs directory into a tree of nodes.

#### Parameters

##### dirAbs

`string`

Absolute path to the directory to read

##### relBase

`string` = `''`

Relative path base used to compute links

#### Returns

`Node`[]

---

### render()

> **render**(`nodes`, `depth`): `string`[]

Defined in:
[generate-docs.ts:90](https://github.com/davinidae/umazing-musumengine/blob/b7f77ffa9f6e848316c4394a9c270b27863fc360/scripts/generate-docs.ts#L90)

Render the sidebar tree into Markdown with collapsible sections.

#### Parameters

##### nodes

`Node`[]

Tree nodes to render

##### depth

`number` = `0`

Current recursion depth (top-level opens by default)

#### Returns

`string`[]
