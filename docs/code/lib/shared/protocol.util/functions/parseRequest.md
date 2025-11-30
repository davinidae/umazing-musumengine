# Function: parseRequest()

> **parseRequest**(`raw`): \[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

Defined in: [lib/shared/protocol.util.ts:27](https://github.com/davinidae/umazing-musumengine/blob/313d7b3da3bf5cac1cbad23523f6160ad25ffb7e/src/lib/shared/protocol.util.ts#L27)

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
