[**umazing-musumengine**](../../README.md)

***

# Function: parseRequest()

> **parseRequest**(`raw`): \[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

Defined in: [shared/protocol.util.ts:27](https://github.com/davinidae/umazing-musumengine/blob/e099ae72d04c46726039e2dd238802d266be3d5f/src/shared/protocol.util.ts#L27)

Parse a request buffer into (blob1, blob2) parts.

## Parameters

### raw

`Buffer`

Full request buffer.

## Returns

\[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

Tuple [blob1, blob2].

## Throws

If the buffer is too short or sizes are inconsistent.
