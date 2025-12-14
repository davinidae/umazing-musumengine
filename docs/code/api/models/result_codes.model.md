# api/models/result_codes.model

## Enumerations

### GallopResultCode

Defined in:
[api/models/result_codes.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L7)

Result codes used across pipeline responses. Combines upstream HTTP-like status codes with
domain-specific enums and a few synthetic codes for pipeline control/diagnostics.

#### Enumeration Members

##### ACCESS_ERROR

> **ACCESS_ERROR**: `200`

Defined in:
[api/models/result_codes.model.ts:148](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L148)

##### ACCOUNT_BLOCK_ERROR

> **ACCOUNT_BLOCK_ERROR**: `203`

Defined in:
[api/models/result_codes.model.ts:151](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L151)

##### ACCOUNT_UDID_CONFLICT

> **ACCOUNT_UDID_CONFLICT**: `703`

Defined in:
[api/models/result_codes.model.ts:208](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L208)

##### AUTH_ERROR

> **AUTH_ERROR**: `202`

Defined in:
[api/models/result_codes.model.ts:150](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L150)

##### BOT_ACCESS_ATTACK_ERROR

> **BOT_ACCESS_ATTACK_ERROR**: `212`

Defined in:
[api/models/result_codes.model.ts:160](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L160)

##### CantFindResultCode

> **CantFindResultCode**: `-1`

Defined in:
[api/models/result_codes.model.ts:220](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L220)

##### CARD_MAX_OVER_ERROR

> **CARD_MAX_OVER_ERROR**: `1005`

Defined in:
[api/models/result_codes.model.ts:45](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L45)

##### CHAMPIONS_LEAGUE_CHANGE_END

> **CHAMPIONS_LEAGUE_CHANGE_END**: `8505`

Defined in:
[api/models/result_codes.model.ts:77](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L77)

##### CHAMPIONS_LEAGUE_SELECT_END

> **CHAMPIONS_LEAGUE_SELECT_END**: `8504`

Defined in:
[api/models/result_codes.model.ts:76](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L76)

##### CHAMPIONS_MATCHING_EMPTY

> **CHAMPIONS_MATCHING_EMPTY**: `8501`

Defined in:
[api/models/result_codes.model.ts:84](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L84)

##### CHAMPIONS_RESET_ENTRY_NUM

> **CHAMPIONS_RESET_ENTRY_NUM**: `8502`

Defined in:
[api/models/result_codes.model.ts:74](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L74)

##### CHAMPIONS_SCHEDULE_CHANGED

> **CHAMPIONS_SCHEDULE_CHANGED**: `8503`

Defined in:
[api/models/result_codes.model.ts:75](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L75)

##### CHAMPIONS_SCHEDULE_CHANGED_ENTRY

> **CHAMPIONS_SCHEDULE_CHANGED_ENTRY**: `8506`

Defined in:
[api/models/result_codes.model.ts:78](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L78)

##### CHARACTER_STORY_NOT_CAMPAIGN

> **CHARACTER_STORY_NOT_CAMPAIGN**: `1701`

Defined in:
[api/models/result_codes.model.ts:10](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L10)

##### CIRCLE_ALREADY_JOIN

> **CIRCLE_ALREADY_JOIN**: `5007`

Defined in:
[api/models/result_codes.model.ts:95](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L95)

##### CIRCLE_ALREADY_SCOUT

> **CIRCLE_ALREADY_SCOUT**: `5012`

Defined in:
[api/models/result_codes.model.ts:99](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L99)

##### CIRCLE_CHAT_NO_JOIN_USER

> **CIRCLE_CHAT_NO_JOIN_USER**: `5006`

Defined in:
[api/models/result_codes.model.ts:94](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L94)

##### CIRCLE_DONATE_FAILED

> **CIRCLE_DONATE_FAILED**: `5021`

Defined in:
[api/models/result_codes.model.ts:105](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L105)

##### CIRCLE_ITEM_RECEIVE_ERROR

> **CIRCLE_ITEM_RECEIVE_ERROR**: `5022`

Defined in:
[api/models/result_codes.model.ts:106](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L106)

##### CIRCLE_ITEM_REQUEST_ERROR

> **CIRCLE_ITEM_REQUEST_ERROR**: `5020`

Defined in:
[api/models/result_codes.model.ts:104](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L104)

##### CIRCLE_MEMBER_NUM_ERROR

> **CIRCLE_MEMBER_NUM_ERROR**: `5002`

Defined in:
[api/models/result_codes.model.ts:90](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L90)

##### CIRCLE_NO_ITEM_REQUEST

> **CIRCLE_NO_ITEM_REQUEST**: `5026`

Defined in:
[api/models/result_codes.model.ts:110](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L110)

##### CIRCLE_NO_OPERATION_AUTHORITY

> **CIRCLE_NO_OPERATION_AUTHORITY**: `5023`

Defined in:
[api/models/result_codes.model.ts:107](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L107)

##### CIRCLE_NO_SCOUT_CIRCLE

> **CIRCLE_NO_SCOUT_CIRCLE**: `5025`

Defined in:
[api/models/result_codes.model.ts:109](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L109)

##### CIRCLE_NOT_BELONG

> **CIRCLE_NOT_BELONG**: `5009`

Defined in:
[api/models/result_codes.model.ts:97](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L97)

##### CIRCLE_NOT_EXIST

> **CIRCLE_NOT_EXIST**: `5008`

Defined in:
[api/models/result_codes.model.ts:96](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L96)

##### CIRCLE_NOT_MEMBER

> **CIRCLE_NOT_MEMBER**: `5014`

Defined in:
[api/models/result_codes.model.ts:100](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L100)

##### CIRCLE_NOT_OPERATE_TERM

> **CIRCLE_NOT_OPERATE_TERM**: `5015`

Defined in:
[api/models/result_codes.model.ts:101](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L101)

##### CIRCLE_NOT_REMOVE_TERM

> **CIRCLE_NOT_REMOVE_TERM**: `5016`

Defined in:
[api/models/result_codes.model.ts:102](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L102)

##### CIRCLE_NOT_SCOUT_TERM

> **CIRCLE_NOT_SCOUT_TERM**: `5017`

Defined in:
[api/models/result_codes.model.ts:103](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L103)

##### CIRCLE_PENALTY_ERROR

> **CIRCLE_PENALTY_ERROR**: `5001`

Defined in:
[api/models/result_codes.model.ts:89](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L89)

##### CIRCLE_REQUEST_COUNT_ERROR

> **CIRCLE_REQUEST_COUNT_ERROR**: `5004`

Defined in:
[api/models/result_codes.model.ts:92](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L92)

##### CIRCLE_REQUEST_NOT_PERMITTED

> **CIRCLE_REQUEST_NOT_PERMITTED**: `5011`

Defined in:
[api/models/result_codes.model.ts:98](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L98)

##### CIRCLE_SCOUT_COUNT_ERROR

> **CIRCLE_SCOUT_COUNT_ERROR**: `5005`

Defined in:
[api/models/result_codes.model.ts:93](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L93)

##### CIRCLE_SCOUT_MEMBER_MAX

> **CIRCLE_SCOUT_MEMBER_MAX**: `5024`

Defined in:
[api/models/result_codes.model.ts:108](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L108)

##### CIRCLE_USER_REQUEST_COUNT_ERROR

> **CIRCLE_USER_REQUEST_COUNT_ERROR**: `5003`

Defined in:
[api/models/result_codes.model.ts:91](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L91)

##### CLIENT_OWN_NUM_ERROR

> **CLIENT_OWN_NUM_ERROR**: `213`

Defined in:
[api/models/result_codes.model.ts:161](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L161)

##### COIN_MAX_OVER_ERROR

> **COIN_MAX_OVER_ERROR**: `1003`

Defined in:
[api/models/result_codes.model.ts:43](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L43)

##### CSV_ERROR

> **CSV_ERROR**: `525`

Defined in:
[api/models/result_codes.model.ts:204](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L204)

##### DATA_NOT_FOUND_ERROR

> **DATA_NOT_FOUND_ERROR**: `500`

Defined in:
[api/models/result_codes.model.ts:167](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L167)

##### DATA_REGISTER_ERROR

> **DATA_REGISTER_ERROR**: `522`

Defined in:
[api/models/result_codes.model.ts:201](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L201)

##### DATA_VALIDATION_ERROR

> **DATA_VALIDATION_ERROR**: `501`

Defined in:
[api/models/result_codes.model.ts:194](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L194)

##### DB_CONNECT_ERROR

> **DB_CONNECT_ERROR**: `103`

Defined in:
[api/models/result_codes.model.ts:144](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L144)

##### DB_ERROR

> **DB_ERROR**: `100`

Defined in:
[api/models/result_codes.model.ts:141](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L141)

##### DEVICE_ERROR

> **DEVICE_ERROR**: `210`

Defined in:
[api/models/result_codes.model.ts:158](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L158)

##### DEVICE_NAME_ERROR

> **DEVICE_NAME_ERROR**: `211`

Defined in:
[api/models/result_codes.model.ts:159](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L159)

##### DEVICECHECK_ERROR

> **DEVICECHECK_ERROR**: `8001`

Defined in:
[api/models/result_codes.model.ts:73](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L73)

##### DMM_ONETIME_TOKEN_INVALID

> **DMM_ONETIME_TOKEN_INVALID**: `706`

Defined in:
[api/models/result_codes.model.ts:211](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L211)

##### DOUBLE_CLICK_ERROR

> **DOUBLE_CLICK_ERROR**: `208`

Defined in:
[api/models/result_codes.model.ts:156](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L156)

##### FRIEND_FOLLOW_COUNT_OVER_ERROR

> **FRIEND_FOLLOW_COUNT_OVER_ERROR**: `1451`

Defined in:
[api/models/result_codes.model.ts:54](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L54)

##### FRIEND_FOLLOW_USER_FOLLOW_COUNT_OVER_ERROR

> **FRIEND_FOLLOW_USER_FOLLOW_COUNT_OVER_ERROR**: `1452`

Defined in:
[api/models/result_codes.model.ts:55](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L55)

##### FRIEND_RENTAL_SUCCESSION

> **FRIEND_RENTAL_SUCCESSION**: `1453`

Defined in:
[api/models/result_codes.model.ts:56](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L56)

##### FRIENDPOINT_MAX_OVER_ERROR

> **FRIENDPOINT_MAX_OVER_ERROR**: `1002`

Defined in:
[api/models/result_codes.model.ts:42](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L42)

##### GACHA_DAILY_DRAW_END

> **GACHA_DAILY_DRAW_END**: `1805`

Defined in:
[api/models/result_codes.model.ts:15](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L15)

##### GACHA_FIRST_TIME_ONLY_DRAW_END

> **GACHA_FIRST_TIME_ONLY_DRAW_END**: `1806`

Defined in:
[api/models/result_codes.model.ts:16](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L16)

##### GACHA_FREE_CAMPAIGN_NOT_AVAILABLE

> **GACHA_FREE_CAMPAIGN_NOT_AVAILABLE**: `1807`

Defined in:
[api/models/result_codes.model.ts:17](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L17)

##### GACHA_LIMIT_ITEM_CEILING

> **GACHA_LIMIT_ITEM_CEILING**: `1804`

Defined in:
[api/models/result_codes.model.ts:14](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L14)

##### GACHA_LIMIT_ITEM_NOT_ENOUGH

> **GACHA_LIMIT_ITEM_NOT_ENOUGH**: `1802`

Defined in:
[api/models/result_codes.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L12)

##### GACHA_NOT_IN_TERM

> **GACHA_NOT_IN_TERM**: `1801`

Defined in:
[api/models/result_codes.model.ts:11](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L11)

##### GACHA_UNSELECTABLE_CARD_SELECTED

> **GACHA_UNSELECTABLE_CARD_SELECTED**: `1803`

Defined in:
[api/models/result_codes.model.ts:13](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L13)

##### HASH_ERROR

> **HASH_ERROR**: `209`

Defined in:
[api/models/result_codes.model.ts:157](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L157)

##### INQUIRY_EMPTY_ERROR

> **INQUIRY_EMPTY_ERROR**: `518`

Defined in:
[api/models/result_codes.model.ts:197](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L197)

##### INQUIRY_LENGTH_ERROR

> **INQUIRY_LENGTH_ERROR**: `519`

Defined in:
[api/models/result_codes.model.ts:198](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L198)

##### INVALID_PARAMETER_ERROR

> **INVALID_PARAMETER_ERROR**: `523`

Defined in:
[api/models/result_codes.model.ts:202](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L202)

##### ITEM_EXCHANGE_ITEM_NOT_ENOUGH

> **ITEM_EXCHANGE_ITEM_NOT_ENOUGH**: `1601`

Defined in:
[api/models/result_codes.model.ts:19](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L19)

##### ITEM_EXCHANGE_LIMITED_EXCHANGE_EXPIRED

> **ITEM_EXCHANGE_LIMITED_EXCHANGE_EXPIRED**: `1602`

Defined in:
[api/models/result_codes.model.ts:9](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L9)

##### ITEM_MAX_OVER_ERROR

> **ITEM_MAX_OVER_ERROR**: `1004`

Defined in:
[api/models/result_codes.model.ts:44](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L44)

##### LEGEND_RACE_NOT_RACE_TIME

> **LEGEND_RACE_NOT_RACE_TIME**: `2101`

Defined in:
[api/models/result_codes.model.ts:23](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L23)

##### MAINTENANCE

> **MAINTENANCE**: `101`

Defined in:
[api/models/result_codes.model.ts:142](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L142)

##### MAINTENANCE_TASK_ACCOUNT_CHAIN

> **MAINTENANCE_TASK_ACCOUNT_CHAIN**: `903`

Defined in:
[api/models/result_codes.model.ts:216](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L216)

##### MAINTENANCE_TASK_ACCOUNT_SIGN_UP

> **MAINTENANCE_TASK_ACCOUNT_SIGN_UP**: `900`

Defined in:
[api/models/result_codes.model.ts:213](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L213)

##### MAINTENANCE_TASK_CARD_RARITY_UPGRADE

> **MAINTENANCE_TASK_CARD_RARITY_UPGRADE**: `925`

Defined in:
[api/models/result_codes.model.ts:185](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L185)

##### MAINTENANCE_TASK_CARD_TALENT_STRENGTHEN

> **MAINTENANCE_TASK_CARD_TALENT_STRENGTHEN**: `924`

Defined in:
[api/models/result_codes.model.ts:184](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L184)

##### MAINTENANCE_TASK_CARD_UNLOCK

> **MAINTENANCE_TASK_CARD_UNLOCK**: `926`

Defined in:
[api/models/result_codes.model.ts:186](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L186)

##### MAINTENANCE_TASK_CHARACTER_STORY

> **MAINTENANCE_TASK_CHARACTER_STORY**: `923`

Defined in:
[api/models/result_codes.model.ts:183](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L183)

##### MAINTENANCE_TASK_CIRCLE

> **MAINTENANCE_TASK_CIRCLE**: `918`

Defined in:
[api/models/result_codes.model.ts:179](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L179)

##### MAINTENANCE_TASK_DAILY_RACE

> **MAINTENANCE_TASK_DAILY_RACE**: `920`

Defined in:
[api/models/result_codes.model.ts:180](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L180)

##### MAINTENANCE_TASK_DATA_LINKAGE

> **MAINTENANCE_TASK_DATA_LINKAGE**: `902`

Defined in:
[api/models/result_codes.model.ts:215](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L215)

##### MAINTENANCE_TASK_EXCHANGE_BY_CIRCLE_PT

> **MAINTENANCE_TASK_EXCHANGE_BY_CIRCLE_PT**: `914`

Defined in:
[api/models/result_codes.model.ts:174](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L174)

##### MAINTENANCE_TASK_EXCHANGE_BY_COMMON_PIECE

> **MAINTENANCE_TASK_EXCHANGE_BY_COMMON_PIECE**: `912`

Defined in:
[api/models/result_codes.model.ts:172](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L172)

##### MAINTENANCE_TASK_EXCHANGE_BY_EXCHANGE_CURRENCY

> **MAINTENANCE_TASK_EXCHANGE_BY_EXCHANGE_CURRENCY**: `915`

Defined in:
[api/models/result_codes.model.ts:175](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L175)

##### MAINTENANCE_TASK_EXCHANGE_BY_FRIEND_PT

> **MAINTENANCE_TASK_EXCHANGE_BY_FRIEND_PT**: `911`

Defined in:
[api/models/result_codes.model.ts:171](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L171)

##### MAINTENANCE_TASK_EXCHANGE_BY_GACHA_EXCHANGE

> **MAINTENANCE_TASK_EXCHANGE_BY_GACHA_EXCHANGE**: `913`

Defined in:
[api/models/result_codes.model.ts:173](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L173)

##### MAINTENANCE_TASK_EXCHANGE_BY_MONEY

> **MAINTENANCE_TASK_EXCHANGE_BY_MONEY**: `910`

Defined in:
[api/models/result_codes.model.ts:170](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L170)

##### MAINTENANCE_TASK_EXCHANGE_BY_TICKET

> **MAINTENANCE_TASK_EXCHANGE_BY_TICKET**: `909`

Defined in:
[api/models/result_codes.model.ts:169](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L169)

##### MAINTENANCE_TASK_GACHA

> **MAINTENANCE_TASK_GACHA**: `907`

Defined in:
[api/models/result_codes.model.ts:178](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L178)

##### MAINTENANCE_TASK_ITEM_TRADE

> **MAINTENANCE_TASK_ITEM_TRADE**: `941`

Defined in:
[api/models/result_codes.model.ts:38](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L38)

##### MAINTENANCE_TASK_JUKEBOX

> **MAINTENANCE_TASK_JUKEBOX**: `948`

Defined in:
[api/models/result_codes.model.ts:40](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L40)

##### MAINTENANCE_TASK_LEGEND_RACE

> **MAINTENANCE_TASK_LEGEND_RACE**: `921`

Defined in:
[api/models/result_codes.model.ts:181](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L181)

##### MAINTENANCE_TASK_LIMITED_EXCHANGE

> **MAINTENANCE_TASK_LIMITED_EXCHANGE**: `916`

Defined in:
[api/models/result_codes.model.ts:176](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L176)

##### MAINTENANCE_TASK_MAIN_STORY

> **MAINTENANCE_TASK_MAIN_STORY**: `922`

Defined in:
[api/models/result_codes.model.ts:182](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L182)

##### MAINTENANCE_TASK_MISSION

> **MAINTENANCE_TASK_MISSION**: `932`

Defined in:
[api/models/result_codes.model.ts:165](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L165)

##### MAINTENANCE_TASK_PAYMENT_ALL

> **MAINTENANCE_TASK_PAYMENT_ALL**: `904`

Defined in:
[api/models/result_codes.model.ts:193](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L193)

##### MAINTENANCE_TASK_PAYMENT_ANDROID

> **MAINTENANCE_TASK_PAYMENT_ANDROID**: `906`

Defined in:
[api/models/result_codes.model.ts:191](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L191)

##### MAINTENANCE_TASK_PAYMENT_DMM

> **MAINTENANCE_TASK_PAYMENT_DMM**: `935`

Defined in:
[api/models/result_codes.model.ts:35](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L35)

##### MAINTENANCE_TASK_PAYMENT_IOS

> **MAINTENANCE_TASK_PAYMENT_IOS**: `905`

Defined in:
[api/models/result_codes.model.ts:192](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L192)

##### MAINTENANCE_TASK_PRESENT

> **MAINTENANCE_TASK_PRESENT**: `901`

Defined in:
[api/models/result_codes.model.ts:214](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L214)

##### MAINTENANCE_TASK_ROOM_MATCH

> **MAINTENANCE_TASK_ROOM_MATCH**: `938`

Defined in:
[api/models/result_codes.model.ts:37](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L37)

##### MAINTENANCE_TASK_SHOP_ITEM_EXCHANGE

> **MAINTENANCE_TASK_SHOP_ITEM_EXCHANGE**: `908`

Defined in:
[api/models/result_codes.model.ts:168](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L168)

##### MAINTENANCE_TASK_SINGLE_MODE

> **MAINTENANCE_TASK_SINGLE_MODE**: `917`

Defined in:
[api/models/result_codes.model.ts:177](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L177)

##### MAINTENANCE_TASK_STORY_EVENT

> **MAINTENANCE_TASK_STORY_EVENT**: `936`

Defined in:
[api/models/result_codes.model.ts:36](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L36)

##### MAINTENANCE_TASK_STORY_EXTRA

> **MAINTENANCE_TASK_STORY_EXTRA**: `942`

Defined in:
[api/models/result_codes.model.ts:39](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L39)

##### MAINTENANCE_TASK_SUPPORT_CARD_LIMIT_BREAK

> **MAINTENANCE_TASK_SUPPORT_CARD_LIMIT_BREAK**: `928`

Defined in:
[api/models/result_codes.model.ts:188](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L188)

##### MAINTENANCE_TASK_SUPPORT_CARD_SELL

> **MAINTENANCE_TASK_SUPPORT_CARD_SELL**: `929`

Defined in:
[api/models/result_codes.model.ts:189](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L189)

##### MAINTENANCE_TASK_SUPPORT_CARD_STRENGTHEN

> **MAINTENANCE_TASK_SUPPORT_CARD_STRENGTHEN**: `927`

Defined in:
[api/models/result_codes.model.ts:187](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L187)

##### MAINTENANCE_TASK_TEAM_EDIT

> **MAINTENANCE_TASK_TEAM_EDIT**: `933`

Defined in:
[api/models/result_codes.model.ts:113](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L113)

##### MAINTENANCE_TASK_TEAM_STADIUM

> **MAINTENANCE_TASK_TEAM_STADIUM**: `919`

Defined in:
[api/models/result_codes.model.ts:190](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L190)

##### MAINTENANCE_TASK_TRAINED_CHARA_LOAD

> **MAINTENANCE_TASK_TRAINED_CHARA_LOAD**: `930`

Defined in:
[api/models/result_codes.model.ts:114](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L114)

##### MAINTENANCE_TASK_TUTORIAL_TEAM_EDIT

> **MAINTENANCE_TASK_TUTORIAL_TEAM_EDIT**: `934`

Defined in:
[api/models/result_codes.model.ts:59](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L59)

##### MEMCACHE_CONNECT_ERROR

> **MEMCACHE_CONNECT_ERROR**: `105`

Defined in:
[api/models/result_codes.model.ts:146](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L146)

##### MissingViewerId

> **MissingViewerId**: `-3`

Defined in:
[api/models/result_codes.model.ts:222](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L222)

##### MISSION_OVERTIME_ERROR

> **MISSION_OVERTIME_ERROR**: `1501`

Defined in:
[api/models/result_codes.model.ts:57](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L57)

##### MISSION_ROTATION_OVERTIME_ERROR

> **MISSION_ROTATION_OVERTIME_ERROR**: `1502`

Defined in:
[api/models/result_codes.model.ts:34](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L34)

##### MONEY_MAX_OVER_ERROR

> **MONEY_MAX_OVER_ERROR**: `1001`

Defined in:
[api/models/result_codes.model.ts:41](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L41)

##### NEED_PARENT_AGREE

> **NEED_PARENT_AGREE**: `90001`

Defined in:
[api/models/result_codes.model.ts:82](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L82)

##### NG_WORD_ERROR

> **NG_WORD_ERROR**: `207`

Defined in:
[api/models/result_codes.model.ts:155](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L155)

##### NO_PLATFORM_USER_ID_ERROR

> **NO_PLATFORM_USER_ID_ERROR**: `705`

Defined in:
[api/models/result_codes.model.ts:210](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L210)

##### NOT_AVAILABLE_AGE_LIMIT

> **NOT_AVAILABLE_AGE_LIMIT**: `90002`

Defined in:
[api/models/result_codes.model.ts:83](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L83)

##### NOT_ENOUGH_ERROR

> **NOT_ENOUGH_ERROR**: `1053`

Defined in:
[api/models/result_codes.model.ts:48](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L48)

##### NOT_MATCH_VIEWER_ID

> **NOT_MATCH_VIEWER_ID**: `1055`

Defined in:
[api/models/result_codes.model.ts:50](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L50)

##### NOTIFY_PREPARATION_SERVICE

> **NOTIFY_PREPARATION_SERVICE**: `215`

Defined in:
[api/models/result_codes.model.ts:163](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L163)

##### PARAM_ERROR

> **PARAM_ERROR**: `205`

Defined in:
[api/models/result_codes.model.ts:153](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L153)

##### PAYMENT_AGE_GROUP_ERROR

> **PAYMENT_AGE_GROUP_ERROR**: `307`

Defined in:
[api/models/result_codes.model.ts:118](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L118)

##### PAYMENT_AGE_OUT_RANGE_ERROR

> **PAYMENT_AGE_OUT_RANGE_ERROR**: `309`

Defined in:
[api/models/result_codes.model.ts:120](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L120)

##### PAYMENT_ALREADY_ERROR

> **PAYMENT_ALREADY_ERROR**: `301`

Defined in:
[api/models/result_codes.model.ts:139](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L139)

##### PAYMENT_HISTORY_ERROR

> **PAYMENT_HISTORY_ERROR**: `300`

Defined in:
[api/models/result_codes.model.ts:140](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L140)

##### PAYMENT_INVALID_BIRTH_DAY_ERROR

> **PAYMENT_INVALID_BIRTH_DAY_ERROR**: `310`

Defined in:
[api/models/result_codes.model.ts:121](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L121)

##### PAYMENT_LIMIT_ERROR

> **PAYMENT_LIMIT_ERROR**: `304`

Defined in:
[api/models/result_codes.model.ts:115](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L115)

##### PAYMENT_PURCHASE_ALERT

> **PAYMENT_PURCHASE_ALERT**: `329`

Defined in:
[api/models/result_codes.model.ts:124](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L124)

##### PAYMENT_PURCHASE_OVERTIME_ERROR

> **PAYMENT_PURCHASE_OVERTIME_ERROR**: `312`

Defined in:
[api/models/result_codes.model.ts:123](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L123)

##### PAYMENT_PURCHASE_REFUND_ALERT

> **PAYMENT_PURCHASE_REFUND_ALERT**: `337`

Defined in:
[api/models/result_codes.model.ts:132](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L132)

##### PAYMENT_PURCHASE_REFUND_BAN

> **PAYMENT_PURCHASE_REFUND_BAN**: `338`

Defined in:
[api/models/result_codes.model.ts:133](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L133)

##### PAYMENT_PURCHASED_TIMES_ERROR

> **PAYMENT_PURCHASED_TIMES_ERROR**: `311`

Defined in:
[api/models/result_codes.model.ts:122](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L122)

##### PAYMENT_RECEIPT_ERROR

> **PAYMENT_RECEIPT_ERROR**: `303`

Defined in:
[api/models/result_codes.model.ts:125](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L125)

##### PAYMENT_RESPONSE_ERROR

> **PAYMENT_RESPONSE_ERROR**: `306`

Defined in:
[api/models/result_codes.model.ts:117](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L117)

##### PAYMENT_TIMEOUT_ERROR

> **PAYMENT_TIMEOUT_ERROR**: `305`

Defined in:
[api/models/result_codes.model.ts:116](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L116)

##### PAYMENT_VALIDATION_ERROR

> **PAYMENT_VALIDATION_ERROR**: `308`

Defined in:
[api/models/result_codes.model.ts:119](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L119)

##### PC_ACCOUNT_LIMIT_ERROR

> **PC_ACCOUNT_LIMIT_ERROR**: `704`

Defined in:
[api/models/result_codes.model.ts:209](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L209)

##### PipelineError

> **PipelineError**: `-2`

Defined in:
[api/models/result_codes.model.ts:221](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L221)

##### POST_DATA_ERROR

> **POST_DATA_ERROR**: `206`

Defined in:
[api/models/result_codes.model.ts:154](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L154)

##### PRESENT_NOT_RECEIVE_OVERDUE

> **PRESENT_NOT_RECEIVE_OVERDUE**: `1552`

Defined in:
[api/models/result_codes.model.ts:32](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L32)

##### PRESENT_NOT_RECEIVE_PRESENT

> **PRESENT_NOT_RECEIVE_PRESENT**: `1551`

Defined in:
[api/models/result_codes.model.ts:33](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L33)

##### PRODUCT_DATA_CSV_ERROR

> **PRODUCT_DATA_CSV_ERROR**: `302`

Defined in:
[api/models/result_codes.model.ts:138](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L138)

##### RACE_SIMULATE_VERSION_TOO_NEW

> **RACE_SIMULATE_VERSION_TOO_NEW**: `2105`

Defined in:
[api/models/result_codes.model.ts:24](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L24)

##### RACE_SIMULATE_VERSION_TOO_OLD

> **RACE_SIMULATE_VERSION_TOO_OLD**: `2106`

Defined in:
[api/models/result_codes.model.ts:25](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L25)

##### RACE_SIMULATOR_CLIENT_ERROR

> **RACE_SIMULATOR_CLIENT_ERROR**: `2002`

Defined in:
[api/models/result_codes.model.ts:31](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L31)

##### RACE_SIMULATOR_CONNECT_ERROR

> **RACE_SIMULATOR_CONNECT_ERROR**: `2001`

Defined in:
[api/models/result_codes.model.ts:20](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L20)

##### RACE_SIMULATOR_PREFORKD_ERROR

> **RACE_SIMULATOR_PREFORKD_ERROR**: `2003`

Defined in:
[api/models/result_codes.model.ts:21](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L21)

##### RACE_SIMULATOR_RESPONSE_ERROR

> **RACE_SIMULATOR_RESPONSE_ERROR**: `2000`

Defined in:
[api/models/result_codes.model.ts:18](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L18)

##### RACE_SIMULATOR_UNSUPPORTED_VERSION_ERROR

> **RACE_SIMULATOR_UNSUPPORTED_VERSION_ERROR**: `2004`

Defined in:
[api/models/result_codes.model.ts:22](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L22)

##### RACE_SINGLE_MODE_UNCHECKED_EVENT

> **RACE_SINGLE_MODE_UNCHECKED_EVENT**: `2502`

Defined in:
[api/models/result_codes.model.ts:27](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L27)

##### RACE_SINGLE_MODE_UNDEFINED_COMMAND_TYPE

> **RACE_SINGLE_MODE_UNDEFINED_COMMAND_TYPE**: `2501`

Defined in:
[api/models/result_codes.model.ts:26](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L26)

##### RC_EMAIL_ADDRESS_NOT_VALID

> **RC_EMAIL_ADDRESS_NOT_VALID**: `356`

Defined in:
[api/models/result_codes.model.ts:164](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L164)

##### RC_KWS_EMAIL_ALREADY_REGISTERED

> **RC_KWS_EMAIL_ALREADY_REGISTERED**: `355`

Defined in:
[api/models/result_codes.model.ts:136](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L136)

##### RC_KWS_EMAIL_NOT_REGISTERED

> **RC_KWS_EMAIL_NOT_REGISTERED**: `354`

Defined in:
[api/models/result_codes.model.ts:135](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L135)

##### RC_KWS_ONE_TIME_PASSWORD_EXPIRED

> **RC_KWS_ONE_TIME_PASSWORD_EXPIRED**: `358`

Defined in:
[api/models/result_codes.model.ts:217](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L217)

##### RC_KWS_ONE_TIME_PASSWORD_RESTRICTED

> **RC_KWS_ONE_TIME_PASSWORD_RESTRICTED**: `353`

Defined in:
[api/models/result_codes.model.ts:134](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L134)

##### RC_KWS_ONE_TIME_PASSWORD_WRONG

> **RC_KWS_ONE_TIME_PASSWORD_WRONG**: `357`

Defined in:
[api/models/result_codes.model.ts:166](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L166)

##### RECORD_EXIST_ERROR

> **RECORD_EXIST_ERROR**: `521`

Defined in:
[api/models/result_codes.model.ts:200](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L200)

##### REDIS_CONNECT_ERROR

> **REDIS_CONNECT_ERROR**: `106`

Defined in:
[api/models/result_codes.model.ts:147](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L147)

##### RESOURCE_VERSION_ERROR

> **RESOURCE_VERSION_ERROR**: `214`

Defined in:
[api/models/result_codes.model.ts:162](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L162)

##### RESULT_CODE_OK

> **RESULT_CODE_OK**: `1`

Defined in:
[api/models/result_codes.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L8)

##### ROOM_MATCH_AUDIENCE_NUM_OVER

> **ROOM_MATCH_AUDIENCE_NUM_OVER**: `5108`

Defined in:
[api/models/result_codes.model.ts:66](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L66)

##### ROOM_MATCH_CANCLE_OVERTIME_ERROR

> **ROOM_MATCH_CANCLE_OVERTIME_ERROR**: `5102`

Defined in:
[api/models/result_codes.model.ts:85](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L85)

##### ROOM_MATCH_DELETE_ROOM_ERROR

> **ROOM_MATCH_DELETE_ROOM_ERROR**: `5105`

Defined in:
[api/models/result_codes.model.ts:63](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L63)

##### ROOM_MATCH_EDIT_OVERTIME_ERROR

> **ROOM_MATCH_EDIT_OVERTIME_ERROR**: `5103`

Defined in:
[api/models/result_codes.model.ts:72](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L72)

##### ROOM_MATCH_ENTRY_NUM_OVER_ERROR

> **ROOM_MATCH_ENTRY_NUM_OVER_ERROR**: `5100`

Defined in:
[api/models/result_codes.model.ts:87](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L87)

##### ROOM_MATCH_ENTRY_OVERTIME_ERROR

> **ROOM_MATCH_ENTRY_OVERTIME_ERROR**: `5101`

Defined in:
[api/models/result_codes.model.ts:86](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L86)

##### ROOM_MATCH_FORCE_START_OVERTIME_ERROR

> **ROOM_MATCH_FORCE_START_OVERTIME_ERROR**: `5107`

Defined in:
[api/models/result_codes.model.ts:65](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L65)

##### ROOM_MATCH_NO_ROOM_ERROR

> **ROOM_MATCH_NO_ROOM_ERROR**: `5106`

Defined in:
[api/models/result_codes.model.ts:64](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L64)

##### ROOM_MATCH_RESULT_OVERTIME_ERROR

> **ROOM_MATCH_RESULT_OVERTIME_ERROR**: `5104`

Defined in:
[api/models/result_codes.model.ts:62](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L62)

##### ROOM_MATCH_SAVE_ROOM_OVERTIME_ERROR

> **ROOM_MATCH_SAVE_ROOM_OVERTIME_ERROR**: `5111`

Defined in:
[api/models/result_codes.model.ts:69](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L69)

##### ROOM_MATCH_SHARE_OVERTIME_ERROR

> **ROOM_MATCH_SHARE_OVERTIME_ERROR**: `5109`

Defined in:
[api/models/result_codes.model.ts:67](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L67)

##### ROOM_MATCH_WATCH_RACE_START_TIME_ERROR

> **ROOM_MATCH_WATCH_RACE_START_TIME_ERROR**: `5110`

Defined in:
[api/models/result_codes.model.ts:68](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L68)

##### SAFETYNET_ERROR

> **SAFETYNET_ERROR**: `7001`

Defined in:
[api/models/result_codes.model.ts:70](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L70)

##### SAFETYNET_RETRY

> **SAFETYNET_RETRY**: `7002`

Defined in:
[api/models/result_codes.model.ts:71](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L71)

##### SEARCH_USER_NOT_FOUND

> **SEARCH_USER_NOT_FOUND**: `1056`

Defined in:
[api/models/result_codes.model.ts:51](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L51)

##### SERIAL_CODE_CSV_ERROR

> **SERIAL_CODE_CSV_ERROR**: `336`

Defined in:
[api/models/result_codes.model.ts:131](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L131)

##### SERIAL_CODE_INCOMPATIBLE

> **SERIAL_CODE_INCOMPATIBLE**: `331`

Defined in:
[api/models/result_codes.model.ts:137](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L137)

##### SERIAL_CODE_INVALID

> **SERIAL_CODE_INVALID**: `333`

Defined in:
[api/models/result_codes.model.ts:128](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L128)

##### SERIAL_CODE_LIMIT_OVER

> **SERIAL_CODE_LIMIT_OVER**: `334`

Defined in:
[api/models/result_codes.model.ts:129](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L129)

##### SERIAL_CODE_NOT_RELEASE

> **SERIAL_CODE_NOT_RELEASE**: `330`

Defined in:
[api/models/result_codes.model.ts:126](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L126)

##### SERIAL_CODE_RESTRICTING

> **SERIAL_CODE_RESTRICTING**: `332`

Defined in:
[api/models/result_codes.model.ts:127](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L127)

##### SERIAL_CODE_TIME_LIMIT_OVER

> **SERIAL_CODE_TIME_LIMIT_OVER**: `335`

Defined in:
[api/models/result_codes.model.ts:130](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L130)

##### SERVER_ERROR

> **SERVER_ERROR**: `102`

Defined in:
[api/models/result_codes.model.ts:143](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L143)

##### SESSION_ERROR

> **SESSION_ERROR**: `201`

Defined in:
[api/models/result_codes.model.ts:149](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L149)

##### SINGLE_MODE_DIFFICULTY_NOT_OPEN_ERROR

> **SINGLE_MODE_DIFFICULTY_NOT_OPEN_ERROR**: `2508`

Defined in:
[api/models/result_codes.model.ts:60](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L60)

##### SINGLE_MODE_RENTAL_MONEY_NOT_ENOUGH

> **SINGLE_MODE_RENTAL_MONEY_NOT_ENOUGH**: `2506`

Defined in:
[api/models/result_codes.model.ts:58](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L58)

##### SINGLE_MODE_SCENARIO_OUT_OF_TERM

> **SINGLE_MODE_SCENARIO_OUT_OF_TERM**: `2505`

Defined in:
[api/models/result_codes.model.ts:30](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L30)

##### SINGLE_MODE_SUCCESSION_RENTAL_NOT_SAME_CIRCLE_MEMBER

> **SINGLE_MODE_SUCCESSION_RENTAL_NOT_SAME_CIRCLE_MEMBER**: `2503`

Defined in:
[api/models/result_codes.model.ts:28](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L28)

##### SINGLE_MODE_SUCCESSION_RENTAL_NUM_LIMIT

> **SINGLE_MODE_SUCCESSION_RENTAL_NUM_LIMIT**: `2504`

Defined in:
[api/models/result_codes.model.ts:29](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L29)

##### SINGLE_MODE_USE_TP_NOT_OPEN_ERROR

> **SINGLE_MODE_USE_TP_NOT_OPEN_ERROR**: `2509`

Defined in:
[api/models/result_codes.model.ts:111](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L111)

##### SITE_DISABLE

> **SITE_DISABLE**: `104`

Defined in:
[api/models/result_codes.model.ts:145](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L145)

##### STEAM_ACCOUNT_REMOVE_CHAINED

> **STEAM_ACCOUNT_REMOVE_CHAINED**: `709`

Defined in:
[api/models/result_codes.model.ts:212](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L212)

##### STORY_EVENT_NOT_DATA

> **STORY_EVENT_NOT_DATA**: `100001`

Defined in:
[api/models/result_codes.model.ts:218](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L218)

##### STORY_EVENT_NOT_IN_TERM

> **STORY_EVENT_NOT_IN_TERM**: `9001`

Defined in:
[api/models/result_codes.model.ts:79](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L79)

##### TEAM_STADIUM_NOT_FOUND_TEAM

> **TEAM_STADIUM_NOT_FOUND_TEAM**: `2801`

Defined in:
[api/models/result_codes.model.ts:88](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L88)

##### TEAM_STADIUM_NOT_RACE_TIME

> **TEAM_STADIUM_NOT_RACE_TIME**: `2800`

Defined in:
[api/models/result_codes.model.ts:61](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L61)

##### TRANSFER_EVENT_NOT_IN_TERM

> **TRANSFER_EVENT_NOT_IN_TERM**: `9051`

Defined in:
[api/models/result_codes.model.ts:80](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L80)

##### TRANSFER_EVENT_UPDATE_DETAIL

> **TRANSFER_EVENT_UPDATE_DETAIL**: `9052`

Defined in:
[api/models/result_codes.model.ts:81](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L81)

##### TRANSITION_COMPLETED_ERROR

> **TRANSITION_COMPLETED_ERROR**: `517`

Defined in:
[api/models/result_codes.model.ts:196](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L196)

##### TRANSITION_OLD_ACCESS_ERROR

> **TRANSITION_OLD_ACCESS_ERROR**: `516`

Defined in:
[api/models/result_codes.model.ts:195](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L195)

##### TRANSITION_USER_NOT_EXIST

> **TRANSITION_USER_NOT_EXIST**: `526`

Defined in:
[api/models/result_codes.model.ts:205](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L205)

##### TRANSITION_USERID_INVALID

> **TRANSITION_USERID_INVALID**: `701`

Defined in:
[api/models/result_codes.model.ts:207](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L207)

##### TRANSITIONPASSWORD_INVALID

> **TRANSITIONPASSWORD_INVALID**: `700`

Defined in:
[api/models/result_codes.model.ts:206](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L206)

##### TUTORIAL_OTHER_ACCESS_ERROR

> **TUTORIAL_OTHER_ACCESS_ERROR**: `1102`

Defined in:
[api/models/result_codes.model.ts:53](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L53)

##### TUTORIAL_STEP_MISMATCH_ERROR

> **TUTORIAL_STEP_MISMATCH_ERROR**: `1101`

Defined in:
[api/models/result_codes.model.ts:52](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L52)

##### USE_COIN_ERROR

> **USE_COIN_ERROR**: `1051`

Defined in:
[api/models/result_codes.model.ts:46](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L46)

##### USE_MONEY_ERROR

> **USE_MONEY_ERROR**: `1054`

Defined in:
[api/models/result_codes.model.ts:49](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L49)

##### USE_TRAINER_POINT_ERROR

> **USE_TRAINER_POINT_ERROR**: `1052`

Defined in:
[api/models/result_codes.model.ts:47](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L47)

##### USER_EXIST_ERROR

> **USER_EXIST_ERROR**: `520`

Defined in:
[api/models/result_codes.model.ts:199](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L199)

##### USER_NOT_FOUND

> **USER_NOT_FOUND**: `524`

Defined in:
[api/models/result_codes.model.ts:203](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L203)

##### USER_NOT_FOUND_ON_LOGIN

> **USER_NOT_FOUND_ON_LOGIN**: `99999`

Defined in:
[api/models/result_codes.model.ts:112](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L112)

##### VERSION_ERROR

> **VERSION_ERROR**: `204`

Defined in:
[api/models/result_codes.model.ts:152](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L152)

## Functions

### asResultCodeName()

> **asResultCodeName**(`v`): `"RESULT_CODE_OK"` \| `"ITEM_EXCHANGE_LIMITED_EXCHANGE_EXPIRED"` \|
> `"CHARACTER_STORY_NOT_CAMPAIGN"` \| `"GACHA_NOT_IN_TERM"` \| `"GACHA_LIMIT_ITEM_NOT_ENOUGH"` \|
> `"GACHA_UNSELECTABLE_CARD_SELECTED"` \| `"GACHA_LIMIT_ITEM_CEILING"` \| `"GACHA_DAILY_DRAW_END"`
> \| `"GACHA_FIRST_TIME_ONLY_DRAW_END"` \| `"GACHA_FREE_CAMPAIGN_NOT_AVAILABLE"` \|
> `"RACE_SIMULATOR_RESPONSE_ERROR"` \| `"ITEM_EXCHANGE_ITEM_NOT_ENOUGH"` \|
> `"RACE_SIMULATOR_CONNECT_ERROR"` \| `"RACE_SIMULATOR_PREFORKD_ERROR"` \|
> `"RACE_SIMULATOR_UNSUPPORTED_VERSION_ERROR"` \| `"LEGEND_RACE_NOT_RACE_TIME"` \|
> `"RACE_SIMULATE_VERSION_TOO_NEW"` \| `"RACE_SIMULATE_VERSION_TOO_OLD"` \|
> `"RACE_SINGLE_MODE_UNDEFINED_COMMAND_TYPE"` \| `"RACE_SINGLE_MODE_UNCHECKED_EVENT"` \|
> `"SINGLE_MODE_SUCCESSION_RENTAL_NOT_SAME_CIRCLE_MEMBER"` \|
> `"SINGLE_MODE_SUCCESSION_RENTAL_NUM_LIMIT"` \| `"SINGLE_MODE_SCENARIO_OUT_OF_TERM"` \|
> `"RACE_SIMULATOR_CLIENT_ERROR"` \| `"PRESENT_NOT_RECEIVE_OVERDUE"` \|
> `"PRESENT_NOT_RECEIVE_PRESENT"` \| `"MISSION_ROTATION_OVERTIME_ERROR"` \|
> `"MAINTENANCE_TASK_PAYMENT_DMM"` \| `"MAINTENANCE_TASK_STORY_EVENT"` \|
> `"MAINTENANCE_TASK_ROOM_MATCH"` \| `"MAINTENANCE_TASK_ITEM_TRADE"` \|
> `"MAINTENANCE_TASK_STORY_EXTRA"` \| `"MAINTENANCE_TASK_JUKEBOX"` \| `"MONEY_MAX_OVER_ERROR"` \|
> `"FRIENDPOINT_MAX_OVER_ERROR"` \| `"COIN_MAX_OVER_ERROR"` \| `"ITEM_MAX_OVER_ERROR"` \|
> `"CARD_MAX_OVER_ERROR"` \| `"USE_COIN_ERROR"` \| `"USE_TRAINER_POINT_ERROR"` \|
> `"NOT_ENOUGH_ERROR"` \| `"USE_MONEY_ERROR"` \| `"NOT_MATCH_VIEWER_ID"` \|
> `"SEARCH_USER_NOT_FOUND"` \| `"TUTORIAL_STEP_MISMATCH_ERROR"` \| `"TUTORIAL_OTHER_ACCESS_ERROR"`
> \| `"FRIEND_FOLLOW_COUNT_OVER_ERROR"` \| `"FRIEND_FOLLOW_USER_FOLLOW_COUNT_OVER_ERROR"` \|
> `"FRIEND_RENTAL_SUCCESSION"` \| `"MISSION_OVERTIME_ERROR"` \|
> `"SINGLE_MODE_RENTAL_MONEY_NOT_ENOUGH"` \| `"MAINTENANCE_TASK_TUTORIAL_TEAM_EDIT"` \|
> `"SINGLE_MODE_DIFFICULTY_NOT_OPEN_ERROR"` \| `"TEAM_STADIUM_NOT_RACE_TIME"` \|
> `"ROOM_MATCH_RESULT_OVERTIME_ERROR"` \| `"ROOM_MATCH_DELETE_ROOM_ERROR"` \|
> `"ROOM_MATCH_NO_ROOM_ERROR"` \| `"ROOM_MATCH_FORCE_START_OVERTIME_ERROR"` \|
> `"ROOM_MATCH_AUDIENCE_NUM_OVER"` \| `"ROOM_MATCH_SHARE_OVERTIME_ERROR"` \|
> `"ROOM_MATCH_WATCH_RACE_START_TIME_ERROR"` \| `"ROOM_MATCH_SAVE_ROOM_OVERTIME_ERROR"` \|
> `"SAFETYNET_ERROR"` \| `"SAFETYNET_RETRY"` \| `"ROOM_MATCH_EDIT_OVERTIME_ERROR"` \|
> `"DEVICECHECK_ERROR"` \| `"CHAMPIONS_RESET_ENTRY_NUM"` \| `"CHAMPIONS_SCHEDULE_CHANGED"` \|
> `"CHAMPIONS_LEAGUE_SELECT_END"` \| `"CHAMPIONS_LEAGUE_CHANGE_END"` \|
> `"CHAMPIONS_SCHEDULE_CHANGED_ENTRY"` \| `"STORY_EVENT_NOT_IN_TERM"` \|
> `"TRANSFER_EVENT_NOT_IN_TERM"` \| `"TRANSFER_EVENT_UPDATE_DETAIL"` \| `"NEED_PARENT_AGREE"` \|
> `"NOT_AVAILABLE_AGE_LIMIT"` \| `"CHAMPIONS_MATCHING_EMPTY"` \|
> `"ROOM_MATCH_CANCLE_OVERTIME_ERROR"` \| `"ROOM_MATCH_ENTRY_OVERTIME_ERROR"` \|
> `"ROOM_MATCH_ENTRY_NUM_OVER_ERROR"` \| `"TEAM_STADIUM_NOT_FOUND_TEAM"` \| `"CIRCLE_PENALTY_ERROR"`
> \| `"CIRCLE_MEMBER_NUM_ERROR"` \| `"CIRCLE_USER_REQUEST_COUNT_ERROR"` \|
> `"CIRCLE_REQUEST_COUNT_ERROR"` \| `"CIRCLE_SCOUT_COUNT_ERROR"` \| `"CIRCLE_CHAT_NO_JOIN_USER"` \|
> `"CIRCLE_ALREADY_JOIN"` \| `"CIRCLE_NOT_EXIST"` \| `"CIRCLE_NOT_BELONG"` \|
> `"CIRCLE_REQUEST_NOT_PERMITTED"` \| `"CIRCLE_ALREADY_SCOUT"` \| `"CIRCLE_NOT_MEMBER"` \|
> `"CIRCLE_NOT_OPERATE_TERM"` \| `"CIRCLE_NOT_REMOVE_TERM"` \| `"CIRCLE_NOT_SCOUT_TERM"` \|
> `"CIRCLE_ITEM_REQUEST_ERROR"` \| `"CIRCLE_DONATE_FAILED"` \| `"CIRCLE_ITEM_RECEIVE_ERROR"` \|
> `"CIRCLE_NO_OPERATION_AUTHORITY"` \| `"CIRCLE_SCOUT_MEMBER_MAX"` \| `"CIRCLE_NO_SCOUT_CIRCLE"` \|
> `"CIRCLE_NO_ITEM_REQUEST"` \| `"SINGLE_MODE_USE_TP_NOT_OPEN_ERROR"` \| `"USER_NOT_FOUND_ON_LOGIN"`
> \| `"MAINTENANCE_TASK_TEAM_EDIT"` \| `"MAINTENANCE_TASK_TRAINED_CHARA_LOAD"` \|
> `"PAYMENT_LIMIT_ERROR"` \| `"PAYMENT_TIMEOUT_ERROR"` \| `"PAYMENT_RESPONSE_ERROR"` \|
> `"PAYMENT_AGE_GROUP_ERROR"` \| `"PAYMENT_VALIDATION_ERROR"` \| `"PAYMENT_AGE_OUT_RANGE_ERROR"` \|
> `"PAYMENT_INVALID_BIRTH_DAY_ERROR"` \| `"PAYMENT_PURCHASED_TIMES_ERROR"` \|
> `"PAYMENT_PURCHASE_OVERTIME_ERROR"` \| `"PAYMENT_PURCHASE_ALERT"` \| `"PAYMENT_RECEIPT_ERROR"` \|
> `"SERIAL_CODE_NOT_RELEASE"` \| `"SERIAL_CODE_RESTRICTING"` \| `"SERIAL_CODE_INVALID"` \|
> `"SERIAL_CODE_LIMIT_OVER"` \| `"SERIAL_CODE_TIME_LIMIT_OVER"` \| `"SERIAL_CODE_CSV_ERROR"` \|
> `"PAYMENT_PURCHASE_REFUND_ALERT"` \| `"PAYMENT_PURCHASE_REFUND_BAN"` \|
> `"RC_KWS_ONE_TIME_PASSWORD_RESTRICTED"` \| `"RC_KWS_EMAIL_NOT_REGISTERED"` \|
> `"RC_KWS_EMAIL_ALREADY_REGISTERED"` \| `"SERIAL_CODE_INCOMPATIBLE"` \| `"PRODUCT_DATA_CSV_ERROR"`
> \| `"PAYMENT_ALREADY_ERROR"` \| `"PAYMENT_HISTORY_ERROR"` \| `"DB_ERROR"` \| `"MAINTENANCE"` \|
> `"SERVER_ERROR"` \| `"DB_CONNECT_ERROR"` \| `"SITE_DISABLE"` \| `"MEMCACHE_CONNECT_ERROR"` \|
> `"REDIS_CONNECT_ERROR"` \| `"ACCESS_ERROR"` \| `"SESSION_ERROR"` \| `"AUTH_ERROR"` \|
> `"ACCOUNT_BLOCK_ERROR"` \| `"VERSION_ERROR"` \| `"PARAM_ERROR"` \| `"POST_DATA_ERROR"` \|
> `"NG_WORD_ERROR"` \| `"DOUBLE_CLICK_ERROR"` \| `"HASH_ERROR"` \| `"DEVICE_ERROR"` \|
> `"DEVICE_NAME_ERROR"` \| `"BOT_ACCESS_ATTACK_ERROR"` \| `"CLIENT_OWN_NUM_ERROR"` \|
> `"RESOURCE_VERSION_ERROR"` \| `"NOTIFY_PREPARATION_SERVICE"` \| `"RC_EMAIL_ADDRESS_NOT_VALID"` \|
> `"MAINTENANCE_TASK_MISSION"` \| `"RC_KWS_ONE_TIME_PASSWORD_WRONG"` \| `"DATA_NOT_FOUND_ERROR"` \|
> `"MAINTENANCE_TASK_SHOP_ITEM_EXCHANGE"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_TICKET"` \|
> `"MAINTENANCE_TASK_EXCHANGE_BY_MONEY"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_FRIEND_PT"` \|
> `"MAINTENANCE_TASK_EXCHANGE_BY_COMMON_PIECE"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_GACHA_EXCHANGE"`
> \| `"MAINTENANCE_TASK_EXCHANGE_BY_CIRCLE_PT"` \|
> `"MAINTENANCE_TASK_EXCHANGE_BY_EXCHANGE_CURRENCY"` \| `"MAINTENANCE_TASK_LIMITED_EXCHANGE"` \|
> `"MAINTENANCE_TASK_SINGLE_MODE"` \| `"MAINTENANCE_TASK_GACHA"` \| `"MAINTENANCE_TASK_CIRCLE"` \|
> `"MAINTENANCE_TASK_DAILY_RACE"` \| `"MAINTENANCE_TASK_LEGEND_RACE"` \|
> `"MAINTENANCE_TASK_MAIN_STORY"` \| `"MAINTENANCE_TASK_CHARACTER_STORY"` \|
> `"MAINTENANCE_TASK_CARD_TALENT_STRENGTHEN"` \| `"MAINTENANCE_TASK_CARD_RARITY_UPGRADE"` \|
> `"MAINTENANCE_TASK_CARD_UNLOCK"` \| `"MAINTENANCE_TASK_SUPPORT_CARD_STRENGTHEN"` \|
> `"MAINTENANCE_TASK_SUPPORT_CARD_LIMIT_BREAK"` \| `"MAINTENANCE_TASK_SUPPORT_CARD_SELL"` \|
> `"MAINTENANCE_TASK_TEAM_STADIUM"` \| `"MAINTENANCE_TASK_PAYMENT_ANDROID"` \|
> `"MAINTENANCE_TASK_PAYMENT_IOS"` \| `"MAINTENANCE_TASK_PAYMENT_ALL"` \| `"DATA_VALIDATION_ERROR"`
> \| `"TRANSITION_OLD_ACCESS_ERROR"` \| `"TRANSITION_COMPLETED_ERROR"` \| `"INQUIRY_EMPTY_ERROR"` \|
> `"INQUIRY_LENGTH_ERROR"` \| `"USER_EXIST_ERROR"` \| `"RECORD_EXIST_ERROR"` \|
> `"DATA_REGISTER_ERROR"` \| `"INVALID_PARAMETER_ERROR"` \| `"USER_NOT_FOUND"` \| `"CSV_ERROR"` \|
> `"TRANSITION_USER_NOT_EXIST"` \| `"TRANSITIONPASSWORD_INVALID"` \| `"TRANSITION_USERID_INVALID"`
> \| `"ACCOUNT_UDID_CONFLICT"` \| `"PC_ACCOUNT_LIMIT_ERROR"` \| `"NO_PLATFORM_USER_ID_ERROR"` \|
> `"DMM_ONETIME_TOKEN_INVALID"` \| `"STEAM_ACCOUNT_REMOVE_CHAINED"` \|
> `"MAINTENANCE_TASK_ACCOUNT_SIGN_UP"` \| `"MAINTENANCE_TASK_PRESENT"` \|
> `"MAINTENANCE_TASK_DATA_LINKAGE"` \| `"MAINTENANCE_TASK_ACCOUNT_CHAIN"` \|
> `"RC_KWS_ONE_TIME_PASSWORD_EXPIRED"` \| `"STORY_EVENT_NOT_DATA"` \| `"CantFindResultCode"` \|
> `"PipelineError"` \| `"MissingViewerId"`

Defined in:
[api/models/result_codes.model.ts:231](https://github.com/davinidae/umazing-musumengine/blob/f9c3fba97fd8d01a7cfed3bd71f75734cf83aaa7/src/api/models/result_codes.model.ts#L231)

Convert a numeric result code to its enum key name. Falls back to `CantFindResultCode` if the value
is not present.

#### Parameters

##### v

[`GallopResultCode`](#gallopresultcode)

Numeric value from `GallopResultCode`.

#### Returns

`"RESULT_CODE_OK"` \| `"ITEM_EXCHANGE_LIMITED_EXCHANGE_EXPIRED"` \| `"CHARACTER_STORY_NOT_CAMPAIGN"`
\| `"GACHA_NOT_IN_TERM"` \| `"GACHA_LIMIT_ITEM_NOT_ENOUGH"` \| `"GACHA_UNSELECTABLE_CARD_SELECTED"`
\| `"GACHA_LIMIT_ITEM_CEILING"` \| `"GACHA_DAILY_DRAW_END"` \| `"GACHA_FIRST_TIME_ONLY_DRAW_END"` \|
`"GACHA_FREE_CAMPAIGN_NOT_AVAILABLE"` \| `"RACE_SIMULATOR_RESPONSE_ERROR"` \|
`"ITEM_EXCHANGE_ITEM_NOT_ENOUGH"` \| `"RACE_SIMULATOR_CONNECT_ERROR"` \|
`"RACE_SIMULATOR_PREFORKD_ERROR"` \| `"RACE_SIMULATOR_UNSUPPORTED_VERSION_ERROR"` \|
`"LEGEND_RACE_NOT_RACE_TIME"` \| `"RACE_SIMULATE_VERSION_TOO_NEW"` \|
`"RACE_SIMULATE_VERSION_TOO_OLD"` \| `"RACE_SINGLE_MODE_UNDEFINED_COMMAND_TYPE"` \|
`"RACE_SINGLE_MODE_UNCHECKED_EVENT"` \| `"SINGLE_MODE_SUCCESSION_RENTAL_NOT_SAME_CIRCLE_MEMBER"` \|
`"SINGLE_MODE_SUCCESSION_RENTAL_NUM_LIMIT"` \| `"SINGLE_MODE_SCENARIO_OUT_OF_TERM"` \|
`"RACE_SIMULATOR_CLIENT_ERROR"` \| `"PRESENT_NOT_RECEIVE_OVERDUE"` \|
`"PRESENT_NOT_RECEIVE_PRESENT"` \| `"MISSION_ROTATION_OVERTIME_ERROR"` \|
`"MAINTENANCE_TASK_PAYMENT_DMM"` \| `"MAINTENANCE_TASK_STORY_EVENT"` \|
`"MAINTENANCE_TASK_ROOM_MATCH"` \| `"MAINTENANCE_TASK_ITEM_TRADE"` \|
`"MAINTENANCE_TASK_STORY_EXTRA"` \| `"MAINTENANCE_TASK_JUKEBOX"` \| `"MONEY_MAX_OVER_ERROR"` \|
`"FRIENDPOINT_MAX_OVER_ERROR"` \| `"COIN_MAX_OVER_ERROR"` \| `"ITEM_MAX_OVER_ERROR"` \|
`"CARD_MAX_OVER_ERROR"` \| `"USE_COIN_ERROR"` \| `"USE_TRAINER_POINT_ERROR"` \| `"NOT_ENOUGH_ERROR"`
\| `"USE_MONEY_ERROR"` \| `"NOT_MATCH_VIEWER_ID"` \| `"SEARCH_USER_NOT_FOUND"` \|
`"TUTORIAL_STEP_MISMATCH_ERROR"` \| `"TUTORIAL_OTHER_ACCESS_ERROR"` \|
`"FRIEND_FOLLOW_COUNT_OVER_ERROR"` \| `"FRIEND_FOLLOW_USER_FOLLOW_COUNT_OVER_ERROR"` \|
`"FRIEND_RENTAL_SUCCESSION"` \| `"MISSION_OVERTIME_ERROR"` \|
`"SINGLE_MODE_RENTAL_MONEY_NOT_ENOUGH"` \| `"MAINTENANCE_TASK_TUTORIAL_TEAM_EDIT"` \|
`"SINGLE_MODE_DIFFICULTY_NOT_OPEN_ERROR"` \| `"TEAM_STADIUM_NOT_RACE_TIME"` \|
`"ROOM_MATCH_RESULT_OVERTIME_ERROR"` \| `"ROOM_MATCH_DELETE_ROOM_ERROR"` \|
`"ROOM_MATCH_NO_ROOM_ERROR"` \| `"ROOM_MATCH_FORCE_START_OVERTIME_ERROR"` \|
`"ROOM_MATCH_AUDIENCE_NUM_OVER"` \| `"ROOM_MATCH_SHARE_OVERTIME_ERROR"` \|
`"ROOM_MATCH_WATCH_RACE_START_TIME_ERROR"` \| `"ROOM_MATCH_SAVE_ROOM_OVERTIME_ERROR"` \|
`"SAFETYNET_ERROR"` \| `"SAFETYNET_RETRY"` \| `"ROOM_MATCH_EDIT_OVERTIME_ERROR"` \|
`"DEVICECHECK_ERROR"` \| `"CHAMPIONS_RESET_ENTRY_NUM"` \| `"CHAMPIONS_SCHEDULE_CHANGED"` \|
`"CHAMPIONS_LEAGUE_SELECT_END"` \| `"CHAMPIONS_LEAGUE_CHANGE_END"` \|
`"CHAMPIONS_SCHEDULE_CHANGED_ENTRY"` \| `"STORY_EVENT_NOT_IN_TERM"` \|
`"TRANSFER_EVENT_NOT_IN_TERM"` \| `"TRANSFER_EVENT_UPDATE_DETAIL"` \| `"NEED_PARENT_AGREE"` \|
`"NOT_AVAILABLE_AGE_LIMIT"` \| `"CHAMPIONS_MATCHING_EMPTY"` \| `"ROOM_MATCH_CANCLE_OVERTIME_ERROR"`
\| `"ROOM_MATCH_ENTRY_OVERTIME_ERROR"` \| `"ROOM_MATCH_ENTRY_NUM_OVER_ERROR"` \|
`"TEAM_STADIUM_NOT_FOUND_TEAM"` \| `"CIRCLE_PENALTY_ERROR"` \| `"CIRCLE_MEMBER_NUM_ERROR"` \|
`"CIRCLE_USER_REQUEST_COUNT_ERROR"` \| `"CIRCLE_REQUEST_COUNT_ERROR"` \|
`"CIRCLE_SCOUT_COUNT_ERROR"` \| `"CIRCLE_CHAT_NO_JOIN_USER"` \| `"CIRCLE_ALREADY_JOIN"` \|
`"CIRCLE_NOT_EXIST"` \| `"CIRCLE_NOT_BELONG"` \| `"CIRCLE_REQUEST_NOT_PERMITTED"` \|
`"CIRCLE_ALREADY_SCOUT"` \| `"CIRCLE_NOT_MEMBER"` \| `"CIRCLE_NOT_OPERATE_TERM"` \|
`"CIRCLE_NOT_REMOVE_TERM"` \| `"CIRCLE_NOT_SCOUT_TERM"` \| `"CIRCLE_ITEM_REQUEST_ERROR"` \|
`"CIRCLE_DONATE_FAILED"` \| `"CIRCLE_ITEM_RECEIVE_ERROR"` \| `"CIRCLE_NO_OPERATION_AUTHORITY"` \|
`"CIRCLE_SCOUT_MEMBER_MAX"` \| `"CIRCLE_NO_SCOUT_CIRCLE"` \| `"CIRCLE_NO_ITEM_REQUEST"` \|
`"SINGLE_MODE_USE_TP_NOT_OPEN_ERROR"` \| `"USER_NOT_FOUND_ON_LOGIN"` \|
`"MAINTENANCE_TASK_TEAM_EDIT"` \| `"MAINTENANCE_TASK_TRAINED_CHARA_LOAD"` \| `"PAYMENT_LIMIT_ERROR"`
\| `"PAYMENT_TIMEOUT_ERROR"` \| `"PAYMENT_RESPONSE_ERROR"` \| `"PAYMENT_AGE_GROUP_ERROR"` \|
`"PAYMENT_VALIDATION_ERROR"` \| `"PAYMENT_AGE_OUT_RANGE_ERROR"` \|
`"PAYMENT_INVALID_BIRTH_DAY_ERROR"` \| `"PAYMENT_PURCHASED_TIMES_ERROR"` \|
`"PAYMENT_PURCHASE_OVERTIME_ERROR"` \| `"PAYMENT_PURCHASE_ALERT"` \| `"PAYMENT_RECEIPT_ERROR"` \|
`"SERIAL_CODE_NOT_RELEASE"` \| `"SERIAL_CODE_RESTRICTING"` \| `"SERIAL_CODE_INVALID"` \|
`"SERIAL_CODE_LIMIT_OVER"` \| `"SERIAL_CODE_TIME_LIMIT_OVER"` \| `"SERIAL_CODE_CSV_ERROR"` \|
`"PAYMENT_PURCHASE_REFUND_ALERT"` \| `"PAYMENT_PURCHASE_REFUND_BAN"` \|
`"RC_KWS_ONE_TIME_PASSWORD_RESTRICTED"` \| `"RC_KWS_EMAIL_NOT_REGISTERED"` \|
`"RC_KWS_EMAIL_ALREADY_REGISTERED"` \| `"SERIAL_CODE_INCOMPATIBLE"` \| `"PRODUCT_DATA_CSV_ERROR"` \|
`"PAYMENT_ALREADY_ERROR"` \| `"PAYMENT_HISTORY_ERROR"` \| `"DB_ERROR"` \| `"MAINTENANCE"` \|
`"SERVER_ERROR"` \| `"DB_CONNECT_ERROR"` \| `"SITE_DISABLE"` \| `"MEMCACHE_CONNECT_ERROR"` \|
`"REDIS_CONNECT_ERROR"` \| `"ACCESS_ERROR"` \| `"SESSION_ERROR"` \| `"AUTH_ERROR"` \|
`"ACCOUNT_BLOCK_ERROR"` \| `"VERSION_ERROR"` \| `"PARAM_ERROR"` \| `"POST_DATA_ERROR"` \|
`"NG_WORD_ERROR"` \| `"DOUBLE_CLICK_ERROR"` \| `"HASH_ERROR"` \| `"DEVICE_ERROR"` \|
`"DEVICE_NAME_ERROR"` \| `"BOT_ACCESS_ATTACK_ERROR"` \| `"CLIENT_OWN_NUM_ERROR"` \|
`"RESOURCE_VERSION_ERROR"` \| `"NOTIFY_PREPARATION_SERVICE"` \| `"RC_EMAIL_ADDRESS_NOT_VALID"` \|
`"MAINTENANCE_TASK_MISSION"` \| `"RC_KWS_ONE_TIME_PASSWORD_WRONG"` \| `"DATA_NOT_FOUND_ERROR"` \|
`"MAINTENANCE_TASK_SHOP_ITEM_EXCHANGE"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_TICKET"` \|
`"MAINTENANCE_TASK_EXCHANGE_BY_MONEY"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_FRIEND_PT"` \|
`"MAINTENANCE_TASK_EXCHANGE_BY_COMMON_PIECE"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_GACHA_EXCHANGE"` \|
`"MAINTENANCE_TASK_EXCHANGE_BY_CIRCLE_PT"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_EXCHANGE_CURRENCY"` \|
`"MAINTENANCE_TASK_LIMITED_EXCHANGE"` \| `"MAINTENANCE_TASK_SINGLE_MODE"` \|
`"MAINTENANCE_TASK_GACHA"` \| `"MAINTENANCE_TASK_CIRCLE"` \| `"MAINTENANCE_TASK_DAILY_RACE"` \|
`"MAINTENANCE_TASK_LEGEND_RACE"` \| `"MAINTENANCE_TASK_MAIN_STORY"` \|
`"MAINTENANCE_TASK_CHARACTER_STORY"` \| `"MAINTENANCE_TASK_CARD_TALENT_STRENGTHEN"` \|
`"MAINTENANCE_TASK_CARD_RARITY_UPGRADE"` \| `"MAINTENANCE_TASK_CARD_UNLOCK"` \|
`"MAINTENANCE_TASK_SUPPORT_CARD_STRENGTHEN"` \| `"MAINTENANCE_TASK_SUPPORT_CARD_LIMIT_BREAK"` \|
`"MAINTENANCE_TASK_SUPPORT_CARD_SELL"` \| `"MAINTENANCE_TASK_TEAM_STADIUM"` \|
`"MAINTENANCE_TASK_PAYMENT_ANDROID"` \| `"MAINTENANCE_TASK_PAYMENT_IOS"` \|
`"MAINTENANCE_TASK_PAYMENT_ALL"` \| `"DATA_VALIDATION_ERROR"` \| `"TRANSITION_OLD_ACCESS_ERROR"` \|
`"TRANSITION_COMPLETED_ERROR"` \| `"INQUIRY_EMPTY_ERROR"` \| `"INQUIRY_LENGTH_ERROR"` \|
`"USER_EXIST_ERROR"` \| `"RECORD_EXIST_ERROR"` \| `"DATA_REGISTER_ERROR"` \|
`"INVALID_PARAMETER_ERROR"` \| `"USER_NOT_FOUND"` \| `"CSV_ERROR"` \| `"TRANSITION_USER_NOT_EXIST"`
\| `"TRANSITIONPASSWORD_INVALID"` \| `"TRANSITION_USERID_INVALID"` \| `"ACCOUNT_UDID_CONFLICT"` \|
`"PC_ACCOUNT_LIMIT_ERROR"` \| `"NO_PLATFORM_USER_ID_ERROR"` \| `"DMM_ONETIME_TOKEN_INVALID"` \|
`"STEAM_ACCOUNT_REMOVE_CHAINED"` \| `"MAINTENANCE_TASK_ACCOUNT_SIGN_UP"` \|
`"MAINTENANCE_TASK_PRESENT"` \| `"MAINTENANCE_TASK_DATA_LINKAGE"` \|
`"MAINTENANCE_TASK_ACCOUNT_CHAIN"` \| `"RC_KWS_ONE_TIME_PASSWORD_EXPIRED"` \|
`"STORY_EVENT_NOT_DATA"` \| `"CantFindResultCode"` \| `"PipelineError"` \| `"MissingViewerId"`

Enum key name as a string.
