[**umazing-musumengine**](../../README.md)

***

# Function: parseHeaderBlob1()

> **parseHeaderBlob1**(`blob1`): `object`

Defined in: [shared/protocol.util.ts:49](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/shared/protocol.util.ts#L49)

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
