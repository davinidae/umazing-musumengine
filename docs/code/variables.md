# variables

## Variables

### DETERMINISTIC_ENC_SECRET

> `const` **DETERMINISTIC_ENC_SECRET**: `"co!=Y;(UQCGxJ_n82"` = `'co!=Y;(UQCGxJ_n82'`

Defined in:
[variables.ts:10](https://github.com/davinidae/umazing-musumengine/blob/72a445c87666bde51d6843fdd11e9cb9c9204b2b/src/variables.ts#L10)

ASCII secret used to deterministically derive the 32-byte AES-256 key for blob2 during development
and tests. In production, use a secure runtime secret.
