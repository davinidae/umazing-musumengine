# which-strategy

## Variables

### strategies

> `const` **strategies**: (`LengthPrefixedStrategy` \| `RawMsgpackStrategy` \|
> `MapHeaderScanStrategy` \| `KVStreamStrategy` \| `AnchorDataHeadersStrategy` \|
> `MultiArrayStrategy` \| `HeuristicStreamToObjectStrategy`)[]

Defined in:
[which-strategy.ts:35](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/scripts/which-strategy.ts#L35)

Candidate unpacking strategies applied to the response plaintext.

## Functions

### readB64()

> **readB64**(`p`): `Buffer`

Defined in:
[which-strategy.ts:24](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/scripts/which-strategy.ts#L24)

Read a base64 text file and return its raw bytes. Handles missing padding and whitespace.

#### Parameters

##### p

`string`

Path to the base64 file

#### Returns

`Buffer`

---

### whichStrategyForPack()

> **whichStrategyForPack**(`packDir`): `string`

Defined in:
[which-strategy.ts:51](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/scripts/which-strategy.ts#L51)

Determine which unpacking strategy accepts the pack's response.

#### Parameters

##### packDir

`string`

Directory containing `request.txt` and `response.txt`

#### Returns

`string`

Strategy class name or a sentinel value
