# generate-sidebar

## Variables

### DOCS_ROOT

> `const` **DOCS_ROOT**: `string`

Defined in:
[generate-sidebar.ts:4](https://github.com/davinidae/umazing-musumengine/blob/1ed115c1e87812b3f2579ab1c891c316bbf0b946/scripts/generate-sidebar.ts#L4)

---

### SIDEBAR_PATH

> `const` **SIDEBAR_PATH**: `string`

Defined in:
[generate-sidebar.ts:5](https://github.com/davinidae/umazing-musumengine/blob/1ed115c1e87812b3f2579ab1c891c316bbf0b946/scripts/generate-sidebar.ts#L5)

## Functions

### generate()

> **generate**(): `void`

Defined in:
[generate-sidebar.ts:115](https://github.com/davinidae/umazing-musumengine/blob/1ed115c1e87812b3f2579ab1c891c316bbf0b946/scripts/generate-sidebar.ts#L115)

Entrypoint: generates `docs/_Sidebar.md` from the contents of `docs/`.

#### Returns

`void`

---

### isHidden()

> **isHidden**(`name`): `boolean`

Defined in:
[generate-sidebar.ts:12](https://github.com/davinidae/umazing-musumengine/blob/1ed115c1e87812b3f2579ab1c891c316bbf0b946/scripts/generate-sidebar.ts#L12)

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
[generate-sidebar.ts:70](https://github.com/davinidae/umazing-musumengine/blob/1ed115c1e87812b3f2579ab1c891c316bbf0b946/scripts/generate-sidebar.ts#L70)

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
[generate-sidebar.ts:29](https://github.com/davinidae/umazing-musumengine/blob/1ed115c1e87812b3f2579ab1c891c316bbf0b946/scripts/generate-sidebar.ts#L29)

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
[generate-sidebar.ts:87](https://github.com/davinidae/umazing-musumengine/blob/1ed115c1e87812b3f2579ab1c891c316bbf0b946/scripts/generate-sidebar.ts#L87)

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
