[**umazing-musumengine**](../../README.md)

***

# Function: parseRequest()

> **parseRequest**(`raw`): \[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

Defined in: [shared/protocol.util.ts:27](https://github.com/davinidae/umazing-musumengine/blob/51f61211084dfe767110f78265e0aa27a13c00d0/src/shared/protocol.util.ts#L27)

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
