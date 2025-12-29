# generate-docs

## Type Aliases

### Node

> **Node** = `object`

Defined in:
[generate-docs.ts:21](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L21)

Tree node representing a file or directory under `docs/`.

#### Properties

##### children?

> `optional` **children**: [`Node`](#node)[]

Defined in:
[generate-docs.ts:25](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L25)

##### dir

> **dir**: `boolean`

Defined in:
[generate-docs.ts:24](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L24)

##### name

> **name**: `string`

Defined in:
[generate-docs.ts:22](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L22)

##### rel

> **rel**: `string`

Defined in:
[generate-docs.ts:23](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L23)

## Variables

### DOCS_ROOT

> `const` **DOCS_ROOT**: `string`

Defined in:
[generate-docs.ts:5](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L5)

---

### HOME_PATH

> `const` **HOME_PATH**: `string`

Defined in:
[generate-docs.ts:7](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L7)

---

### SIDEBAR_PATH

> `const` **SIDEBAR_PATH**: `string`

Defined in:
[generate-docs.ts:6](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L6)

## Functions

### generate()

> **generate**(): `void`

Defined in:
[generate-docs.ts:167](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L167)

Entrypoint: generates `docs/_Sidebar.md` from the contents of `docs/`.

#### Returns

`void`

---

### isHidden()

> **isHidden**(`name`): `boolean`

Defined in:
[generate-docs.ts:14](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L14)

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
[generate-docs.ts:75](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L75)

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

> **read**(`dirAbs`, `relBase`): [`Node`](#node)[]

Defined in:
[generate-docs.ts:34](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L34)

Recursively reads the docs directory into a tree of nodes.

#### Parameters

##### dirAbs

`string`

Absolute path to the directory to read

##### relBase

`string` = `''`

Relative path base used to compute links

#### Returns

[`Node`](#node)[]

---

### render()

> **render**(`nodes`, `depth`): `string`[]

Defined in:
[generate-docs.ts:87](https://github.com/davinidae/umazing-musumengine/blob/80d3c8cc1b6a4bb7394b4c2aa6642f2fb6343d3b/scripts/generate-docs.ts#L87)

Render the sidebar tree into Markdown with collapsible sections.

#### Parameters

##### nodes

[`Node`](#node)[]

Tree nodes to render

##### depth

`number` = `0`

Current recursion depth (top-level opens by default)

#### Returns

`string`[]
