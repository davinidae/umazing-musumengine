# constants/salt.constant

## Variables

### DETERMINISTIC_ENC_SECRET

> `const` **DETERMINISTIC_ENC_SECRET**: `"co!=Y;(UQCGxJ_n82"` = `'co!=Y;(UQCGxJ_n82'`

Defined in:
[constants/salt.constant.ts:11](https://github.com/davinidae/umazing-musumengine/blob/214adb783384a11b15b86407e00e671feb1ec440/src/constants/salt.constant.ts#L11)

ASCII secret used to deterministically derive the 32-byte AES-256 key for blob2 during development
and tests. In production, use a secure runtime secret. Also known as SALT
