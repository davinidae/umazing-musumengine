# lib/shared/protocol.util

## Functions

### deriveIvFromUdidString()

> **deriveIvFromUdidString**(`udidString`): `Buffer`

Defined in:
[lib/shared/protocol.util.ts:87](https://github.com/davinidae/umazing-musumengine/blob/e7212aa6a686e4a1fdbfe719e8650490390832a8/src/lib/shared/protocol.util.ts#L87)

Derive a 16-byte IV from a canonical UDID string (first 16 ASCII chars, hyphens stripped).

#### Parameters

##### udidString

`string`

Canonical UDID string with hyphens.

#### Returns

`Buffer`

16-byte IV as a Buffer.

#### Throws

If the UDID does not yield 16 characters after stripping hyphens.

---

### parseHeaderBlob1()

> **parseHeaderBlob1**(`blob1`): `object`

Defined in:
[lib/shared/protocol.util.ts:49](https://github.com/davinidae/umazing-musumengine/blob/e7212aa6a686e4a1fdbfe719e8650490390832a8/src/lib/shared/protocol.util.ts#L49)

Parse the blob1 header into its constituent fields.

#### Parameters

##### blob1

`Buffer`

Blob1 buffer section.

#### Returns

`object`

An object with prefix, session_id, udid_raw, response_key, and auth_key.

##### auth_key

> **auth_key**: `Buffer`

##### prefix

> **prefix**: `Buffer`

##### response_key

> **response_key**: `Buffer`

##### session_id

> **session_id**: `Buffer`

##### udid_raw

> **udid_raw**: `Buffer`

#### Throws

If blob1 is too short to contain required fields.

---

### parseRequest()

> **parseRequest**(`raw`): \[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

Defined in:
[lib/shared/protocol.util.ts:27](https://github.com/davinidae/umazing-musumengine/blob/e7212aa6a686e4a1fdbfe719e8650490390832a8/src/lib/shared/protocol.util.ts#L27)

Parse a request buffer into (blob1, blob2) parts.

#### Parameters

##### raw

`Buffer`

Full request buffer.

#### Returns

\[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

Tuple [blob1, blob2].

#### Throws

If the buffer is too short or sizes are inconsistent.

---

### readBase64File()

> **readBase64File**(`path`): `Buffer`

Defined in:
[lib/shared/protocol.util.ts:11](https://github.com/davinidae/umazing-musumengine/blob/e7212aa6a686e4a1fdbfe719e8650490390832a8/src/lib/shared/protocol.util.ts#L11)

Read a text file containing Base64 (possibly with whitespace) and return its bytes.

#### Parameters

##### path

`string`

Absolute or relative file path.

#### Returns

`Buffer`

Buffer with decoded bytes.

---

### udidRawToCanonicalString()

> **udidRawToCanonicalString**(`udidRaw`): `string`

Defined in:
[lib/shared/protocol.util.ts:73](https://github.com/davinidae/umazing-musumengine/blob/e7212aa6a686e4a1fdbfe719e8650490390832a8/src/lib/shared/protocol.util.ts#L73)

Convert a 16-byte raw UDID into canonical dashed string form.

#### Parameters

##### udidRaw

`Buffer`

Raw UDID bytes.

#### Returns

`string`

Canonical string form (8-4-4-4-12 hex groups).
