# Function: parseHeaderBlob1()

> **parseHeaderBlob1**(`blob1`): `object`

Defined in: [lib/shared/protocol.util.ts:49](https://github.com/davinidae/umazing-musumengine/blob/69d230954e98bd77e6d1fa5d5d78630166c21f43/src/lib/shared/protocol.util.ts#L49)

Parse the blob1 header into its constituent fields.

## Parameters

### blob1

`Buffer`

Blob1 buffer section.

## Returns

`object`

An object with prefix, session_id, udid_raw, response_key, and auth_key.

### auth\_key

> **auth\_key**: `Buffer`

### prefix

> **prefix**: `Buffer`

### response\_key

> **response\_key**: `Buffer`

### session\_id

> **session\_id**: `Buffer`

### udid\_raw

> **udid\_raw**: `Buffer`

## Throws

If blob1 is too short to contain required fields.
