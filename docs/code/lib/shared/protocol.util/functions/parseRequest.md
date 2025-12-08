# Function: parseRequest()

> **parseRequest**(`raw`): \[`Buffer`\<`ArrayBufferLike`\>, `Buffer`\<`ArrayBufferLike`\>\]

Defined in: [lib/shared/protocol.util.ts:27](https://github.com/davinidae/umazing-musumengine/blob/6df8e3e1b8dfb16b24d04befbfa6d32c969e2756/src/lib/shared/protocol.util.ts#L27)

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
