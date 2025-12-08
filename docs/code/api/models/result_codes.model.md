# api/models/result\_codes.model

## Enumerations

### GallopResultCode

Defined in: [api/models/result\_codes.model.ts:7](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L7)

Result codes used across pipeline responses.
Combines upstream HTTP-like status codes with domain-specific enums
and a few synthetic codes for pipeline control/diagnostics.

#### Enumeration Members

##### ACCESS\_ERROR

> **ACCESS\_ERROR**: `200`

Defined in: [api/models/result\_codes.model.ts:148](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L148)

##### ACCOUNT\_BLOCK\_ERROR

> **ACCOUNT\_BLOCK\_ERROR**: `203`

Defined in: [api/models/result\_codes.model.ts:151](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L151)

##### ACCOUNT\_UDID\_CONFLICT

> **ACCOUNT\_UDID\_CONFLICT**: `703`

Defined in: [api/models/result\_codes.model.ts:208](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L208)

##### AUTH\_ERROR

> **AUTH\_ERROR**: `202`

Defined in: [api/models/result\_codes.model.ts:150](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L150)

##### BOT\_ACCESS\_ATTACK\_ERROR

> **BOT\_ACCESS\_ATTACK\_ERROR**: `212`

Defined in: [api/models/result\_codes.model.ts:160](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L160)

##### CantFindResultCode

> **CantFindResultCode**: `-1`

Defined in: [api/models/result\_codes.model.ts:220](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L220)

##### CARD\_MAX\_OVER\_ERROR

> **CARD\_MAX\_OVER\_ERROR**: `1005`

Defined in: [api/models/result\_codes.model.ts:45](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L45)

##### CHAMPIONS\_LEAGUE\_CHANGE\_END

> **CHAMPIONS\_LEAGUE\_CHANGE\_END**: `8505`

Defined in: [api/models/result\_codes.model.ts:77](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L77)

##### CHAMPIONS\_LEAGUE\_SELECT\_END

> **CHAMPIONS\_LEAGUE\_SELECT\_END**: `8504`

Defined in: [api/models/result\_codes.model.ts:76](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L76)

##### CHAMPIONS\_MATCHING\_EMPTY

> **CHAMPIONS\_MATCHING\_EMPTY**: `8501`

Defined in: [api/models/result\_codes.model.ts:84](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L84)

##### CHAMPIONS\_RESET\_ENTRY\_NUM

> **CHAMPIONS\_RESET\_ENTRY\_NUM**: `8502`

Defined in: [api/models/result\_codes.model.ts:74](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L74)

##### CHAMPIONS\_SCHEDULE\_CHANGED

> **CHAMPIONS\_SCHEDULE\_CHANGED**: `8503`

Defined in: [api/models/result\_codes.model.ts:75](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L75)

##### CHAMPIONS\_SCHEDULE\_CHANGED\_ENTRY

> **CHAMPIONS\_SCHEDULE\_CHANGED\_ENTRY**: `8506`

Defined in: [api/models/result\_codes.model.ts:78](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L78)

##### CHARACTER\_STORY\_NOT\_CAMPAIGN

> **CHARACTER\_STORY\_NOT\_CAMPAIGN**: `1701`

Defined in: [api/models/result\_codes.model.ts:10](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L10)

##### CIRCLE\_ALREADY\_JOIN

> **CIRCLE\_ALREADY\_JOIN**: `5007`

Defined in: [api/models/result\_codes.model.ts:95](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L95)

##### CIRCLE\_ALREADY\_SCOUT

> **CIRCLE\_ALREADY\_SCOUT**: `5012`

Defined in: [api/models/result\_codes.model.ts:99](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L99)

##### CIRCLE\_CHAT\_NO\_JOIN\_USER

> **CIRCLE\_CHAT\_NO\_JOIN\_USER**: `5006`

Defined in: [api/models/result\_codes.model.ts:94](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L94)

##### CIRCLE\_DONATE\_FAILED

> **CIRCLE\_DONATE\_FAILED**: `5021`

Defined in: [api/models/result\_codes.model.ts:105](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L105)

##### CIRCLE\_ITEM\_RECEIVE\_ERROR

> **CIRCLE\_ITEM\_RECEIVE\_ERROR**: `5022`

Defined in: [api/models/result\_codes.model.ts:106](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L106)

##### CIRCLE\_ITEM\_REQUEST\_ERROR

> **CIRCLE\_ITEM\_REQUEST\_ERROR**: `5020`

Defined in: [api/models/result\_codes.model.ts:104](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L104)

##### CIRCLE\_MEMBER\_NUM\_ERROR

> **CIRCLE\_MEMBER\_NUM\_ERROR**: `5002`

Defined in: [api/models/result\_codes.model.ts:90](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L90)

##### CIRCLE\_NO\_ITEM\_REQUEST

> **CIRCLE\_NO\_ITEM\_REQUEST**: `5026`

Defined in: [api/models/result\_codes.model.ts:110](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L110)

##### CIRCLE\_NO\_OPERATION\_AUTHORITY

> **CIRCLE\_NO\_OPERATION\_AUTHORITY**: `5023`

Defined in: [api/models/result\_codes.model.ts:107](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L107)

##### CIRCLE\_NO\_SCOUT\_CIRCLE

> **CIRCLE\_NO\_SCOUT\_CIRCLE**: `5025`

Defined in: [api/models/result\_codes.model.ts:109](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L109)

##### CIRCLE\_NOT\_BELONG

> **CIRCLE\_NOT\_BELONG**: `5009`

Defined in: [api/models/result\_codes.model.ts:97](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L97)

##### CIRCLE\_NOT\_EXIST

> **CIRCLE\_NOT\_EXIST**: `5008`

Defined in: [api/models/result\_codes.model.ts:96](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L96)

##### CIRCLE\_NOT\_MEMBER

> **CIRCLE\_NOT\_MEMBER**: `5014`

Defined in: [api/models/result\_codes.model.ts:100](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L100)

##### CIRCLE\_NOT\_OPERATE\_TERM

> **CIRCLE\_NOT\_OPERATE\_TERM**: `5015`

Defined in: [api/models/result\_codes.model.ts:101](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L101)

##### CIRCLE\_NOT\_REMOVE\_TERM

> **CIRCLE\_NOT\_REMOVE\_TERM**: `5016`

Defined in: [api/models/result\_codes.model.ts:102](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L102)

##### CIRCLE\_NOT\_SCOUT\_TERM

> **CIRCLE\_NOT\_SCOUT\_TERM**: `5017`

Defined in: [api/models/result\_codes.model.ts:103](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L103)

##### CIRCLE\_PENALTY\_ERROR

> **CIRCLE\_PENALTY\_ERROR**: `5001`

Defined in: [api/models/result\_codes.model.ts:89](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L89)

##### CIRCLE\_REQUEST\_COUNT\_ERROR

> **CIRCLE\_REQUEST\_COUNT\_ERROR**: `5004`

Defined in: [api/models/result\_codes.model.ts:92](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L92)

##### CIRCLE\_REQUEST\_NOT\_PERMITTED

> **CIRCLE\_REQUEST\_NOT\_PERMITTED**: `5011`

Defined in: [api/models/result\_codes.model.ts:98](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L98)

##### CIRCLE\_SCOUT\_COUNT\_ERROR

> **CIRCLE\_SCOUT\_COUNT\_ERROR**: `5005`

Defined in: [api/models/result\_codes.model.ts:93](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L93)

##### CIRCLE\_SCOUT\_MEMBER\_MAX

> **CIRCLE\_SCOUT\_MEMBER\_MAX**: `5024`

Defined in: [api/models/result\_codes.model.ts:108](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L108)

##### CIRCLE\_USER\_REQUEST\_COUNT\_ERROR

> **CIRCLE\_USER\_REQUEST\_COUNT\_ERROR**: `5003`

Defined in: [api/models/result\_codes.model.ts:91](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L91)

##### CLIENT\_OWN\_NUM\_ERROR

> **CLIENT\_OWN\_NUM\_ERROR**: `213`

Defined in: [api/models/result\_codes.model.ts:161](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L161)

##### COIN\_MAX\_OVER\_ERROR

> **COIN\_MAX\_OVER\_ERROR**: `1003`

Defined in: [api/models/result\_codes.model.ts:43](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L43)

##### CSV\_ERROR

> **CSV\_ERROR**: `525`

Defined in: [api/models/result\_codes.model.ts:204](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L204)

##### DATA\_NOT\_FOUND\_ERROR

> **DATA\_NOT\_FOUND\_ERROR**: `500`

Defined in: [api/models/result\_codes.model.ts:167](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L167)

##### DATA\_REGISTER\_ERROR

> **DATA\_REGISTER\_ERROR**: `522`

Defined in: [api/models/result\_codes.model.ts:201](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L201)

##### DATA\_VALIDATION\_ERROR

> **DATA\_VALIDATION\_ERROR**: `501`

Defined in: [api/models/result\_codes.model.ts:194](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L194)

##### DB\_CONNECT\_ERROR

> **DB\_CONNECT\_ERROR**: `103`

Defined in: [api/models/result\_codes.model.ts:144](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L144)

##### DB\_ERROR

> **DB\_ERROR**: `100`

Defined in: [api/models/result\_codes.model.ts:141](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L141)

##### DEVICE\_ERROR

> **DEVICE\_ERROR**: `210`

Defined in: [api/models/result\_codes.model.ts:158](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L158)

##### DEVICE\_NAME\_ERROR

> **DEVICE\_NAME\_ERROR**: `211`

Defined in: [api/models/result\_codes.model.ts:159](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L159)

##### DEVICECHECK\_ERROR

> **DEVICECHECK\_ERROR**: `8001`

Defined in: [api/models/result\_codes.model.ts:73](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L73)

##### DMM\_ONETIME\_TOKEN\_INVALID

> **DMM\_ONETIME\_TOKEN\_INVALID**: `706`

Defined in: [api/models/result\_codes.model.ts:211](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L211)

##### DOUBLE\_CLICK\_ERROR

> **DOUBLE\_CLICK\_ERROR**: `208`

Defined in: [api/models/result\_codes.model.ts:156](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L156)

##### FRIEND\_FOLLOW\_COUNT\_OVER\_ERROR

> **FRIEND\_FOLLOW\_COUNT\_OVER\_ERROR**: `1451`

Defined in: [api/models/result\_codes.model.ts:54](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L54)

##### FRIEND\_FOLLOW\_USER\_FOLLOW\_COUNT\_OVER\_ERROR

> **FRIEND\_FOLLOW\_USER\_FOLLOW\_COUNT\_OVER\_ERROR**: `1452`

Defined in: [api/models/result\_codes.model.ts:55](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L55)

##### FRIEND\_RENTAL\_SUCCESSION

> **FRIEND\_RENTAL\_SUCCESSION**: `1453`

Defined in: [api/models/result\_codes.model.ts:56](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L56)

##### FRIENDPOINT\_MAX\_OVER\_ERROR

> **FRIENDPOINT\_MAX\_OVER\_ERROR**: `1002`

Defined in: [api/models/result\_codes.model.ts:42](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L42)

##### GACHA\_DAILY\_DRAW\_END

> **GACHA\_DAILY\_DRAW\_END**: `1805`

Defined in: [api/models/result\_codes.model.ts:15](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L15)

##### GACHA\_FIRST\_TIME\_ONLY\_DRAW\_END

> **GACHA\_FIRST\_TIME\_ONLY\_DRAW\_END**: `1806`

Defined in: [api/models/result\_codes.model.ts:16](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L16)

##### GACHA\_FREE\_CAMPAIGN\_NOT\_AVAILABLE

> **GACHA\_FREE\_CAMPAIGN\_NOT\_AVAILABLE**: `1807`

Defined in: [api/models/result\_codes.model.ts:17](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L17)

##### GACHA\_LIMIT\_ITEM\_CEILING

> **GACHA\_LIMIT\_ITEM\_CEILING**: `1804`

Defined in: [api/models/result\_codes.model.ts:14](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L14)

##### GACHA\_LIMIT\_ITEM\_NOT\_ENOUGH

> **GACHA\_LIMIT\_ITEM\_NOT\_ENOUGH**: `1802`

Defined in: [api/models/result\_codes.model.ts:12](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L12)

##### GACHA\_NOT\_IN\_TERM

> **GACHA\_NOT\_IN\_TERM**: `1801`

Defined in: [api/models/result\_codes.model.ts:11](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L11)

##### GACHA\_UNSELECTABLE\_CARD\_SELECTED

> **GACHA\_UNSELECTABLE\_CARD\_SELECTED**: `1803`

Defined in: [api/models/result\_codes.model.ts:13](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L13)

##### HASH\_ERROR

> **HASH\_ERROR**: `209`

Defined in: [api/models/result\_codes.model.ts:157](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L157)

##### INQUIRY\_EMPTY\_ERROR

> **INQUIRY\_EMPTY\_ERROR**: `518`

Defined in: [api/models/result\_codes.model.ts:197](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L197)

##### INQUIRY\_LENGTH\_ERROR

> **INQUIRY\_LENGTH\_ERROR**: `519`

Defined in: [api/models/result\_codes.model.ts:198](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L198)

##### INVALID\_PARAMETER\_ERROR

> **INVALID\_PARAMETER\_ERROR**: `523`

Defined in: [api/models/result\_codes.model.ts:202](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L202)

##### ITEM\_EXCHANGE\_ITEM\_NOT\_ENOUGH

> **ITEM\_EXCHANGE\_ITEM\_NOT\_ENOUGH**: `1601`

Defined in: [api/models/result\_codes.model.ts:19](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L19)

##### ITEM\_EXCHANGE\_LIMITED\_EXCHANGE\_EXPIRED

> **ITEM\_EXCHANGE\_LIMITED\_EXCHANGE\_EXPIRED**: `1602`

Defined in: [api/models/result\_codes.model.ts:9](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L9)

##### ITEM\_MAX\_OVER\_ERROR

> **ITEM\_MAX\_OVER\_ERROR**: `1004`

Defined in: [api/models/result\_codes.model.ts:44](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L44)

##### LEGEND\_RACE\_NOT\_RACE\_TIME

> **LEGEND\_RACE\_NOT\_RACE\_TIME**: `2101`

Defined in: [api/models/result\_codes.model.ts:23](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L23)

##### MAINTENANCE

> **MAINTENANCE**: `101`

Defined in: [api/models/result\_codes.model.ts:142](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L142)

##### MAINTENANCE\_TASK\_ACCOUNT\_CHAIN

> **MAINTENANCE\_TASK\_ACCOUNT\_CHAIN**: `903`

Defined in: [api/models/result\_codes.model.ts:216](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L216)

##### MAINTENANCE\_TASK\_ACCOUNT\_SIGN\_UP

> **MAINTENANCE\_TASK\_ACCOUNT\_SIGN\_UP**: `900`

Defined in: [api/models/result\_codes.model.ts:213](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L213)

##### MAINTENANCE\_TASK\_CARD\_RARITY\_UPGRADE

> **MAINTENANCE\_TASK\_CARD\_RARITY\_UPGRADE**: `925`

Defined in: [api/models/result\_codes.model.ts:185](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L185)

##### MAINTENANCE\_TASK\_CARD\_TALENT\_STRENGTHEN

> **MAINTENANCE\_TASK\_CARD\_TALENT\_STRENGTHEN**: `924`

Defined in: [api/models/result\_codes.model.ts:184](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L184)

##### MAINTENANCE\_TASK\_CARD\_UNLOCK

> **MAINTENANCE\_TASK\_CARD\_UNLOCK**: `926`

Defined in: [api/models/result\_codes.model.ts:186](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L186)

##### MAINTENANCE\_TASK\_CHARACTER\_STORY

> **MAINTENANCE\_TASK\_CHARACTER\_STORY**: `923`

Defined in: [api/models/result\_codes.model.ts:183](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L183)

##### MAINTENANCE\_TASK\_CIRCLE

> **MAINTENANCE\_TASK\_CIRCLE**: `918`

Defined in: [api/models/result\_codes.model.ts:179](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L179)

##### MAINTENANCE\_TASK\_DAILY\_RACE

> **MAINTENANCE\_TASK\_DAILY\_RACE**: `920`

Defined in: [api/models/result\_codes.model.ts:180](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L180)

##### MAINTENANCE\_TASK\_DATA\_LINKAGE

> **MAINTENANCE\_TASK\_DATA\_LINKAGE**: `902`

Defined in: [api/models/result\_codes.model.ts:215](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L215)

##### MAINTENANCE\_TASK\_EXCHANGE\_BY\_CIRCLE\_PT

> **MAINTENANCE\_TASK\_EXCHANGE\_BY\_CIRCLE\_PT**: `914`

Defined in: [api/models/result\_codes.model.ts:174](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L174)

##### MAINTENANCE\_TASK\_EXCHANGE\_BY\_COMMON\_PIECE

> **MAINTENANCE\_TASK\_EXCHANGE\_BY\_COMMON\_PIECE**: `912`

Defined in: [api/models/result\_codes.model.ts:172](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L172)

##### MAINTENANCE\_TASK\_EXCHANGE\_BY\_EXCHANGE\_CURRENCY

> **MAINTENANCE\_TASK\_EXCHANGE\_BY\_EXCHANGE\_CURRENCY**: `915`

Defined in: [api/models/result\_codes.model.ts:175](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L175)

##### MAINTENANCE\_TASK\_EXCHANGE\_BY\_FRIEND\_PT

> **MAINTENANCE\_TASK\_EXCHANGE\_BY\_FRIEND\_PT**: `911`

Defined in: [api/models/result\_codes.model.ts:171](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L171)

##### MAINTENANCE\_TASK\_EXCHANGE\_BY\_GACHA\_EXCHANGE

> **MAINTENANCE\_TASK\_EXCHANGE\_BY\_GACHA\_EXCHANGE**: `913`

Defined in: [api/models/result\_codes.model.ts:173](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L173)

##### MAINTENANCE\_TASK\_EXCHANGE\_BY\_MONEY

> **MAINTENANCE\_TASK\_EXCHANGE\_BY\_MONEY**: `910`

Defined in: [api/models/result\_codes.model.ts:170](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L170)

##### MAINTENANCE\_TASK\_EXCHANGE\_BY\_TICKET

> **MAINTENANCE\_TASK\_EXCHANGE\_BY\_TICKET**: `909`

Defined in: [api/models/result\_codes.model.ts:169](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L169)

##### MAINTENANCE\_TASK\_GACHA

> **MAINTENANCE\_TASK\_GACHA**: `907`

Defined in: [api/models/result\_codes.model.ts:178](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L178)

##### MAINTENANCE\_TASK\_ITEM\_TRADE

> **MAINTENANCE\_TASK\_ITEM\_TRADE**: `941`

Defined in: [api/models/result\_codes.model.ts:38](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L38)

##### MAINTENANCE\_TASK\_JUKEBOX

> **MAINTENANCE\_TASK\_JUKEBOX**: `948`

Defined in: [api/models/result\_codes.model.ts:40](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L40)

##### MAINTENANCE\_TASK\_LEGEND\_RACE

> **MAINTENANCE\_TASK\_LEGEND\_RACE**: `921`

Defined in: [api/models/result\_codes.model.ts:181](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L181)

##### MAINTENANCE\_TASK\_LIMITED\_EXCHANGE

> **MAINTENANCE\_TASK\_LIMITED\_EXCHANGE**: `916`

Defined in: [api/models/result\_codes.model.ts:176](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L176)

##### MAINTENANCE\_TASK\_MAIN\_STORY

> **MAINTENANCE\_TASK\_MAIN\_STORY**: `922`

Defined in: [api/models/result\_codes.model.ts:182](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L182)

##### MAINTENANCE\_TASK\_MISSION

> **MAINTENANCE\_TASK\_MISSION**: `932`

Defined in: [api/models/result\_codes.model.ts:165](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L165)

##### MAINTENANCE\_TASK\_PAYMENT\_ALL

> **MAINTENANCE\_TASK\_PAYMENT\_ALL**: `904`

Defined in: [api/models/result\_codes.model.ts:193](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L193)

##### MAINTENANCE\_TASK\_PAYMENT\_ANDROID

> **MAINTENANCE\_TASK\_PAYMENT\_ANDROID**: `906`

Defined in: [api/models/result\_codes.model.ts:191](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L191)

##### MAINTENANCE\_TASK\_PAYMENT\_DMM

> **MAINTENANCE\_TASK\_PAYMENT\_DMM**: `935`

Defined in: [api/models/result\_codes.model.ts:35](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L35)

##### MAINTENANCE\_TASK\_PAYMENT\_IOS

> **MAINTENANCE\_TASK\_PAYMENT\_IOS**: `905`

Defined in: [api/models/result\_codes.model.ts:192](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L192)

##### MAINTENANCE\_TASK\_PRESENT

> **MAINTENANCE\_TASK\_PRESENT**: `901`

Defined in: [api/models/result\_codes.model.ts:214](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L214)

##### MAINTENANCE\_TASK\_ROOM\_MATCH

> **MAINTENANCE\_TASK\_ROOM\_MATCH**: `938`

Defined in: [api/models/result\_codes.model.ts:37](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L37)

##### MAINTENANCE\_TASK\_SHOP\_ITEM\_EXCHANGE

> **MAINTENANCE\_TASK\_SHOP\_ITEM\_EXCHANGE**: `908`

Defined in: [api/models/result\_codes.model.ts:168](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L168)

##### MAINTENANCE\_TASK\_SINGLE\_MODE

> **MAINTENANCE\_TASK\_SINGLE\_MODE**: `917`

Defined in: [api/models/result\_codes.model.ts:177](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L177)

##### MAINTENANCE\_TASK\_STORY\_EVENT

> **MAINTENANCE\_TASK\_STORY\_EVENT**: `936`

Defined in: [api/models/result\_codes.model.ts:36](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L36)

##### MAINTENANCE\_TASK\_STORY\_EXTRA

> **MAINTENANCE\_TASK\_STORY\_EXTRA**: `942`

Defined in: [api/models/result\_codes.model.ts:39](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L39)

##### MAINTENANCE\_TASK\_SUPPORT\_CARD\_LIMIT\_BREAK

> **MAINTENANCE\_TASK\_SUPPORT\_CARD\_LIMIT\_BREAK**: `928`

Defined in: [api/models/result\_codes.model.ts:188](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L188)

##### MAINTENANCE\_TASK\_SUPPORT\_CARD\_SELL

> **MAINTENANCE\_TASK\_SUPPORT\_CARD\_SELL**: `929`

Defined in: [api/models/result\_codes.model.ts:189](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L189)

##### MAINTENANCE\_TASK\_SUPPORT\_CARD\_STRENGTHEN

> **MAINTENANCE\_TASK\_SUPPORT\_CARD\_STRENGTHEN**: `927`

Defined in: [api/models/result\_codes.model.ts:187](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L187)

##### MAINTENANCE\_TASK\_TEAM\_EDIT

> **MAINTENANCE\_TASK\_TEAM\_EDIT**: `933`

Defined in: [api/models/result\_codes.model.ts:113](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L113)

##### MAINTENANCE\_TASK\_TEAM\_STADIUM

> **MAINTENANCE\_TASK\_TEAM\_STADIUM**: `919`

Defined in: [api/models/result\_codes.model.ts:190](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L190)

##### MAINTENANCE\_TASK\_TRAINED\_CHARA\_LOAD

> **MAINTENANCE\_TASK\_TRAINED\_CHARA\_LOAD**: `930`

Defined in: [api/models/result\_codes.model.ts:114](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L114)

##### MAINTENANCE\_TASK\_TUTORIAL\_TEAM\_EDIT

> **MAINTENANCE\_TASK\_TUTORIAL\_TEAM\_EDIT**: `934`

Defined in: [api/models/result\_codes.model.ts:59](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L59)

##### MEMCACHE\_CONNECT\_ERROR

> **MEMCACHE\_CONNECT\_ERROR**: `105`

Defined in: [api/models/result\_codes.model.ts:146](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L146)

##### MissingViewerId

> **MissingViewerId**: `-3`

Defined in: [api/models/result\_codes.model.ts:222](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L222)

##### MISSION\_OVERTIME\_ERROR

> **MISSION\_OVERTIME\_ERROR**: `1501`

Defined in: [api/models/result\_codes.model.ts:57](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L57)

##### MISSION\_ROTATION\_OVERTIME\_ERROR

> **MISSION\_ROTATION\_OVERTIME\_ERROR**: `1502`

Defined in: [api/models/result\_codes.model.ts:34](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L34)

##### MONEY\_MAX\_OVER\_ERROR

> **MONEY\_MAX\_OVER\_ERROR**: `1001`

Defined in: [api/models/result\_codes.model.ts:41](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L41)

##### NEED\_PARENT\_AGREE

> **NEED\_PARENT\_AGREE**: `90001`

Defined in: [api/models/result\_codes.model.ts:82](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L82)

##### NG\_WORD\_ERROR

> **NG\_WORD\_ERROR**: `207`

Defined in: [api/models/result\_codes.model.ts:155](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L155)

##### NO\_PLATFORM\_USER\_ID\_ERROR

> **NO\_PLATFORM\_USER\_ID\_ERROR**: `705`

Defined in: [api/models/result\_codes.model.ts:210](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L210)

##### NOT\_AVAILABLE\_AGE\_LIMIT

> **NOT\_AVAILABLE\_AGE\_LIMIT**: `90002`

Defined in: [api/models/result\_codes.model.ts:83](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L83)

##### NOT\_ENOUGH\_ERROR

> **NOT\_ENOUGH\_ERROR**: `1053`

Defined in: [api/models/result\_codes.model.ts:48](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L48)

##### NOT\_MATCH\_VIEWER\_ID

> **NOT\_MATCH\_VIEWER\_ID**: `1055`

Defined in: [api/models/result\_codes.model.ts:50](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L50)

##### NOTIFY\_PREPARATION\_SERVICE

> **NOTIFY\_PREPARATION\_SERVICE**: `215`

Defined in: [api/models/result\_codes.model.ts:163](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L163)

##### PARAM\_ERROR

> **PARAM\_ERROR**: `205`

Defined in: [api/models/result\_codes.model.ts:153](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L153)

##### PAYMENT\_AGE\_GROUP\_ERROR

> **PAYMENT\_AGE\_GROUP\_ERROR**: `307`

Defined in: [api/models/result\_codes.model.ts:118](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L118)

##### PAYMENT\_AGE\_OUT\_RANGE\_ERROR

> **PAYMENT\_AGE\_OUT\_RANGE\_ERROR**: `309`

Defined in: [api/models/result\_codes.model.ts:120](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L120)

##### PAYMENT\_ALREADY\_ERROR

> **PAYMENT\_ALREADY\_ERROR**: `301`

Defined in: [api/models/result\_codes.model.ts:139](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L139)

##### PAYMENT\_HISTORY\_ERROR

> **PAYMENT\_HISTORY\_ERROR**: `300`

Defined in: [api/models/result\_codes.model.ts:140](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L140)

##### PAYMENT\_INVALID\_BIRTH\_DAY\_ERROR

> **PAYMENT\_INVALID\_BIRTH\_DAY\_ERROR**: `310`

Defined in: [api/models/result\_codes.model.ts:121](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L121)

##### PAYMENT\_LIMIT\_ERROR

> **PAYMENT\_LIMIT\_ERROR**: `304`

Defined in: [api/models/result\_codes.model.ts:115](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L115)

##### PAYMENT\_PURCHASE\_ALERT

> **PAYMENT\_PURCHASE\_ALERT**: `329`

Defined in: [api/models/result\_codes.model.ts:124](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L124)

##### PAYMENT\_PURCHASE\_OVERTIME\_ERROR

> **PAYMENT\_PURCHASE\_OVERTIME\_ERROR**: `312`

Defined in: [api/models/result\_codes.model.ts:123](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L123)

##### PAYMENT\_PURCHASE\_REFUND\_ALERT

> **PAYMENT\_PURCHASE\_REFUND\_ALERT**: `337`

Defined in: [api/models/result\_codes.model.ts:132](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L132)

##### PAYMENT\_PURCHASE\_REFUND\_BAN

> **PAYMENT\_PURCHASE\_REFUND\_BAN**: `338`

Defined in: [api/models/result\_codes.model.ts:133](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L133)

##### PAYMENT\_PURCHASED\_TIMES\_ERROR

> **PAYMENT\_PURCHASED\_TIMES\_ERROR**: `311`

Defined in: [api/models/result\_codes.model.ts:122](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L122)

##### PAYMENT\_RECEIPT\_ERROR

> **PAYMENT\_RECEIPT\_ERROR**: `303`

Defined in: [api/models/result\_codes.model.ts:125](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L125)

##### PAYMENT\_RESPONSE\_ERROR

> **PAYMENT\_RESPONSE\_ERROR**: `306`

Defined in: [api/models/result\_codes.model.ts:117](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L117)

##### PAYMENT\_TIMEOUT\_ERROR

> **PAYMENT\_TIMEOUT\_ERROR**: `305`

Defined in: [api/models/result\_codes.model.ts:116](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L116)

##### PAYMENT\_VALIDATION\_ERROR

> **PAYMENT\_VALIDATION\_ERROR**: `308`

Defined in: [api/models/result\_codes.model.ts:119](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L119)

##### PC\_ACCOUNT\_LIMIT\_ERROR

> **PC\_ACCOUNT\_LIMIT\_ERROR**: `704`

Defined in: [api/models/result\_codes.model.ts:209](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L209)

##### PipelineError

> **PipelineError**: `-2`

Defined in: [api/models/result\_codes.model.ts:221](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L221)

##### POST\_DATA\_ERROR

> **POST\_DATA\_ERROR**: `206`

Defined in: [api/models/result\_codes.model.ts:154](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L154)

##### PRESENT\_NOT\_RECEIVE\_OVERDUE

> **PRESENT\_NOT\_RECEIVE\_OVERDUE**: `1552`

Defined in: [api/models/result\_codes.model.ts:32](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L32)

##### PRESENT\_NOT\_RECEIVE\_PRESENT

> **PRESENT\_NOT\_RECEIVE\_PRESENT**: `1551`

Defined in: [api/models/result\_codes.model.ts:33](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L33)

##### PRODUCT\_DATA\_CSV\_ERROR

> **PRODUCT\_DATA\_CSV\_ERROR**: `302`

Defined in: [api/models/result\_codes.model.ts:138](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L138)

##### RACE\_SIMULATE\_VERSION\_TOO\_NEW

> **RACE\_SIMULATE\_VERSION\_TOO\_NEW**: `2105`

Defined in: [api/models/result\_codes.model.ts:24](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L24)

##### RACE\_SIMULATE\_VERSION\_TOO\_OLD

> **RACE\_SIMULATE\_VERSION\_TOO\_OLD**: `2106`

Defined in: [api/models/result\_codes.model.ts:25](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L25)

##### RACE\_SIMULATOR\_CLIENT\_ERROR

> **RACE\_SIMULATOR\_CLIENT\_ERROR**: `2002`

Defined in: [api/models/result\_codes.model.ts:31](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L31)

##### RACE\_SIMULATOR\_CONNECT\_ERROR

> **RACE\_SIMULATOR\_CONNECT\_ERROR**: `2001`

Defined in: [api/models/result\_codes.model.ts:20](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L20)

##### RACE\_SIMULATOR\_PREFORKD\_ERROR

> **RACE\_SIMULATOR\_PREFORKD\_ERROR**: `2003`

Defined in: [api/models/result\_codes.model.ts:21](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L21)

##### RACE\_SIMULATOR\_RESPONSE\_ERROR

> **RACE\_SIMULATOR\_RESPONSE\_ERROR**: `2000`

Defined in: [api/models/result\_codes.model.ts:18](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L18)

##### RACE\_SIMULATOR\_UNSUPPORTED\_VERSION\_ERROR

> **RACE\_SIMULATOR\_UNSUPPORTED\_VERSION\_ERROR**: `2004`

Defined in: [api/models/result\_codes.model.ts:22](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L22)

##### RACE\_SINGLE\_MODE\_UNCHECKED\_EVENT

> **RACE\_SINGLE\_MODE\_UNCHECKED\_EVENT**: `2502`

Defined in: [api/models/result\_codes.model.ts:27](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L27)

##### RACE\_SINGLE\_MODE\_UNDEFINED\_COMMAND\_TYPE

> **RACE\_SINGLE\_MODE\_UNDEFINED\_COMMAND\_TYPE**: `2501`

Defined in: [api/models/result\_codes.model.ts:26](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L26)

##### RC\_EMAIL\_ADDRESS\_NOT\_VALID

> **RC\_EMAIL\_ADDRESS\_NOT\_VALID**: `356`

Defined in: [api/models/result\_codes.model.ts:164](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L164)

##### RC\_KWS\_EMAIL\_ALREADY\_REGISTERED

> **RC\_KWS\_EMAIL\_ALREADY\_REGISTERED**: `355`

Defined in: [api/models/result\_codes.model.ts:136](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L136)

##### RC\_KWS\_EMAIL\_NOT\_REGISTERED

> **RC\_KWS\_EMAIL\_NOT\_REGISTERED**: `354`

Defined in: [api/models/result\_codes.model.ts:135](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L135)

##### RC\_KWS\_ONE\_TIME\_PASSWORD\_EXPIRED

> **RC\_KWS\_ONE\_TIME\_PASSWORD\_EXPIRED**: `358`

Defined in: [api/models/result\_codes.model.ts:217](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L217)

##### RC\_KWS\_ONE\_TIME\_PASSWORD\_RESTRICTED

> **RC\_KWS\_ONE\_TIME\_PASSWORD\_RESTRICTED**: `353`

Defined in: [api/models/result\_codes.model.ts:134](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L134)

##### RC\_KWS\_ONE\_TIME\_PASSWORD\_WRONG

> **RC\_KWS\_ONE\_TIME\_PASSWORD\_WRONG**: `357`

Defined in: [api/models/result\_codes.model.ts:166](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L166)

##### RECORD\_EXIST\_ERROR

> **RECORD\_EXIST\_ERROR**: `521`

Defined in: [api/models/result\_codes.model.ts:200](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L200)

##### REDIS\_CONNECT\_ERROR

> **REDIS\_CONNECT\_ERROR**: `106`

Defined in: [api/models/result\_codes.model.ts:147](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L147)

##### RESOURCE\_VERSION\_ERROR

> **RESOURCE\_VERSION\_ERROR**: `214`

Defined in: [api/models/result\_codes.model.ts:162](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L162)

##### RESULT\_CODE\_OK

> **RESULT\_CODE\_OK**: `1`

Defined in: [api/models/result\_codes.model.ts:8](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L8)

##### ROOM\_MATCH\_AUDIENCE\_NUM\_OVER

> **ROOM\_MATCH\_AUDIENCE\_NUM\_OVER**: `5108`

Defined in: [api/models/result\_codes.model.ts:66](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L66)

##### ROOM\_MATCH\_CANCLE\_OVERTIME\_ERROR

> **ROOM\_MATCH\_CANCLE\_OVERTIME\_ERROR**: `5102`

Defined in: [api/models/result\_codes.model.ts:85](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L85)

##### ROOM\_MATCH\_DELETE\_ROOM\_ERROR

> **ROOM\_MATCH\_DELETE\_ROOM\_ERROR**: `5105`

Defined in: [api/models/result\_codes.model.ts:63](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L63)

##### ROOM\_MATCH\_EDIT\_OVERTIME\_ERROR

> **ROOM\_MATCH\_EDIT\_OVERTIME\_ERROR**: `5103`

Defined in: [api/models/result\_codes.model.ts:72](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L72)

##### ROOM\_MATCH\_ENTRY\_NUM\_OVER\_ERROR

> **ROOM\_MATCH\_ENTRY\_NUM\_OVER\_ERROR**: `5100`

Defined in: [api/models/result\_codes.model.ts:87](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L87)

##### ROOM\_MATCH\_ENTRY\_OVERTIME\_ERROR

> **ROOM\_MATCH\_ENTRY\_OVERTIME\_ERROR**: `5101`

Defined in: [api/models/result\_codes.model.ts:86](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L86)

##### ROOM\_MATCH\_FORCE\_START\_OVERTIME\_ERROR

> **ROOM\_MATCH\_FORCE\_START\_OVERTIME\_ERROR**: `5107`

Defined in: [api/models/result\_codes.model.ts:65](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L65)

##### ROOM\_MATCH\_NO\_ROOM\_ERROR

> **ROOM\_MATCH\_NO\_ROOM\_ERROR**: `5106`

Defined in: [api/models/result\_codes.model.ts:64](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L64)

##### ROOM\_MATCH\_RESULT\_OVERTIME\_ERROR

> **ROOM\_MATCH\_RESULT\_OVERTIME\_ERROR**: `5104`

Defined in: [api/models/result\_codes.model.ts:62](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L62)

##### ROOM\_MATCH\_SAVE\_ROOM\_OVERTIME\_ERROR

> **ROOM\_MATCH\_SAVE\_ROOM\_OVERTIME\_ERROR**: `5111`

Defined in: [api/models/result\_codes.model.ts:69](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L69)

##### ROOM\_MATCH\_SHARE\_OVERTIME\_ERROR

> **ROOM\_MATCH\_SHARE\_OVERTIME\_ERROR**: `5109`

Defined in: [api/models/result\_codes.model.ts:67](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L67)

##### ROOM\_MATCH\_WATCH\_RACE\_START\_TIME\_ERROR

> **ROOM\_MATCH\_WATCH\_RACE\_START\_TIME\_ERROR**: `5110`

Defined in: [api/models/result\_codes.model.ts:68](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L68)

##### SAFETYNET\_ERROR

> **SAFETYNET\_ERROR**: `7001`

Defined in: [api/models/result\_codes.model.ts:70](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L70)

##### SAFETYNET\_RETRY

> **SAFETYNET\_RETRY**: `7002`

Defined in: [api/models/result\_codes.model.ts:71](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L71)

##### SEARCH\_USER\_NOT\_FOUND

> **SEARCH\_USER\_NOT\_FOUND**: `1056`

Defined in: [api/models/result\_codes.model.ts:51](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L51)

##### SERIAL\_CODE\_CSV\_ERROR

> **SERIAL\_CODE\_CSV\_ERROR**: `336`

Defined in: [api/models/result\_codes.model.ts:131](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L131)

##### SERIAL\_CODE\_INCOMPATIBLE

> **SERIAL\_CODE\_INCOMPATIBLE**: `331`

Defined in: [api/models/result\_codes.model.ts:137](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L137)

##### SERIAL\_CODE\_INVALID

> **SERIAL\_CODE\_INVALID**: `333`

Defined in: [api/models/result\_codes.model.ts:128](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L128)

##### SERIAL\_CODE\_LIMIT\_OVER

> **SERIAL\_CODE\_LIMIT\_OVER**: `334`

Defined in: [api/models/result\_codes.model.ts:129](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L129)

##### SERIAL\_CODE\_NOT\_RELEASE

> **SERIAL\_CODE\_NOT\_RELEASE**: `330`

Defined in: [api/models/result\_codes.model.ts:126](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L126)

##### SERIAL\_CODE\_RESTRICTING

> **SERIAL\_CODE\_RESTRICTING**: `332`

Defined in: [api/models/result\_codes.model.ts:127](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L127)

##### SERIAL\_CODE\_TIME\_LIMIT\_OVER

> **SERIAL\_CODE\_TIME\_LIMIT\_OVER**: `335`

Defined in: [api/models/result\_codes.model.ts:130](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L130)

##### SERVER\_ERROR

> **SERVER\_ERROR**: `102`

Defined in: [api/models/result\_codes.model.ts:143](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L143)

##### SESSION\_ERROR

> **SESSION\_ERROR**: `201`

Defined in: [api/models/result\_codes.model.ts:149](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L149)

##### SINGLE\_MODE\_DIFFICULTY\_NOT\_OPEN\_ERROR

> **SINGLE\_MODE\_DIFFICULTY\_NOT\_OPEN\_ERROR**: `2508`

Defined in: [api/models/result\_codes.model.ts:60](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L60)

##### SINGLE\_MODE\_RENTAL\_MONEY\_NOT\_ENOUGH

> **SINGLE\_MODE\_RENTAL\_MONEY\_NOT\_ENOUGH**: `2506`

Defined in: [api/models/result\_codes.model.ts:58](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L58)

##### SINGLE\_MODE\_SCENARIO\_OUT\_OF\_TERM

> **SINGLE\_MODE\_SCENARIO\_OUT\_OF\_TERM**: `2505`

Defined in: [api/models/result\_codes.model.ts:30](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L30)

##### SINGLE\_MODE\_SUCCESSION\_RENTAL\_NOT\_SAME\_CIRCLE\_MEMBER

> **SINGLE\_MODE\_SUCCESSION\_RENTAL\_NOT\_SAME\_CIRCLE\_MEMBER**: `2503`

Defined in: [api/models/result\_codes.model.ts:28](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L28)

##### SINGLE\_MODE\_SUCCESSION\_RENTAL\_NUM\_LIMIT

> **SINGLE\_MODE\_SUCCESSION\_RENTAL\_NUM\_LIMIT**: `2504`

Defined in: [api/models/result\_codes.model.ts:29](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L29)

##### SINGLE\_MODE\_USE\_TP\_NOT\_OPEN\_ERROR

> **SINGLE\_MODE\_USE\_TP\_NOT\_OPEN\_ERROR**: `2509`

Defined in: [api/models/result\_codes.model.ts:111](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L111)

##### SITE\_DISABLE

> **SITE\_DISABLE**: `104`

Defined in: [api/models/result\_codes.model.ts:145](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L145)

##### STEAM\_ACCOUNT\_REMOVE\_CHAINED

> **STEAM\_ACCOUNT\_REMOVE\_CHAINED**: `709`

Defined in: [api/models/result\_codes.model.ts:212](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L212)

##### STORY\_EVENT\_NOT\_DATA

> **STORY\_EVENT\_NOT\_DATA**: `100001`

Defined in: [api/models/result\_codes.model.ts:218](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L218)

##### STORY\_EVENT\_NOT\_IN\_TERM

> **STORY\_EVENT\_NOT\_IN\_TERM**: `9001`

Defined in: [api/models/result\_codes.model.ts:79](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L79)

##### TEAM\_STADIUM\_NOT\_FOUND\_TEAM

> **TEAM\_STADIUM\_NOT\_FOUND\_TEAM**: `2801`

Defined in: [api/models/result\_codes.model.ts:88](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L88)

##### TEAM\_STADIUM\_NOT\_RACE\_TIME

> **TEAM\_STADIUM\_NOT\_RACE\_TIME**: `2800`

Defined in: [api/models/result\_codes.model.ts:61](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L61)

##### TRANSFER\_EVENT\_NOT\_IN\_TERM

> **TRANSFER\_EVENT\_NOT\_IN\_TERM**: `9051`

Defined in: [api/models/result\_codes.model.ts:80](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L80)

##### TRANSFER\_EVENT\_UPDATE\_DETAIL

> **TRANSFER\_EVENT\_UPDATE\_DETAIL**: `9052`

Defined in: [api/models/result\_codes.model.ts:81](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L81)

##### TRANSITION\_COMPLETED\_ERROR

> **TRANSITION\_COMPLETED\_ERROR**: `517`

Defined in: [api/models/result\_codes.model.ts:196](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L196)

##### TRANSITION\_OLD\_ACCESS\_ERROR

> **TRANSITION\_OLD\_ACCESS\_ERROR**: `516`

Defined in: [api/models/result\_codes.model.ts:195](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L195)

##### TRANSITION\_USER\_NOT\_EXIST

> **TRANSITION\_USER\_NOT\_EXIST**: `526`

Defined in: [api/models/result\_codes.model.ts:205](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L205)

##### TRANSITION\_USERID\_INVALID

> **TRANSITION\_USERID\_INVALID**: `701`

Defined in: [api/models/result\_codes.model.ts:207](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L207)

##### TRANSITIONPASSWORD\_INVALID

> **TRANSITIONPASSWORD\_INVALID**: `700`

Defined in: [api/models/result\_codes.model.ts:206](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L206)

##### TUTORIAL\_OTHER\_ACCESS\_ERROR

> **TUTORIAL\_OTHER\_ACCESS\_ERROR**: `1102`

Defined in: [api/models/result\_codes.model.ts:53](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L53)

##### TUTORIAL\_STEP\_MISMATCH\_ERROR

> **TUTORIAL\_STEP\_MISMATCH\_ERROR**: `1101`

Defined in: [api/models/result\_codes.model.ts:52](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L52)

##### USE\_COIN\_ERROR

> **USE\_COIN\_ERROR**: `1051`

Defined in: [api/models/result\_codes.model.ts:46](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L46)

##### USE\_MONEY\_ERROR

> **USE\_MONEY\_ERROR**: `1054`

Defined in: [api/models/result\_codes.model.ts:49](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L49)

##### USE\_TRAINER\_POINT\_ERROR

> **USE\_TRAINER\_POINT\_ERROR**: `1052`

Defined in: [api/models/result\_codes.model.ts:47](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L47)

##### USER\_EXIST\_ERROR

> **USER\_EXIST\_ERROR**: `520`

Defined in: [api/models/result\_codes.model.ts:199](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L199)

##### USER\_NOT\_FOUND

> **USER\_NOT\_FOUND**: `524`

Defined in: [api/models/result\_codes.model.ts:203](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L203)

##### USER\_NOT\_FOUND\_ON\_LOGIN

> **USER\_NOT\_FOUND\_ON\_LOGIN**: `99999`

Defined in: [api/models/result\_codes.model.ts:112](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L112)

##### VERSION\_ERROR

> **VERSION\_ERROR**: `204`

Defined in: [api/models/result\_codes.model.ts:152](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L152)

## Functions

### asResultCodeName()

> **asResultCodeName**(`v`): `"RESULT_CODE_OK"` \| `"ITEM_EXCHANGE_LIMITED_EXCHANGE_EXPIRED"` \| `"CHARACTER_STORY_NOT_CAMPAIGN"` \| `"GACHA_NOT_IN_TERM"` \| `"GACHA_LIMIT_ITEM_NOT_ENOUGH"` \| `"GACHA_UNSELECTABLE_CARD_SELECTED"` \| `"GACHA_LIMIT_ITEM_CEILING"` \| `"GACHA_DAILY_DRAW_END"` \| `"GACHA_FIRST_TIME_ONLY_DRAW_END"` \| `"GACHA_FREE_CAMPAIGN_NOT_AVAILABLE"` \| `"RACE_SIMULATOR_RESPONSE_ERROR"` \| `"ITEM_EXCHANGE_ITEM_NOT_ENOUGH"` \| `"RACE_SIMULATOR_CONNECT_ERROR"` \| `"RACE_SIMULATOR_PREFORKD_ERROR"` \| `"RACE_SIMULATOR_UNSUPPORTED_VERSION_ERROR"` \| `"LEGEND_RACE_NOT_RACE_TIME"` \| `"RACE_SIMULATE_VERSION_TOO_NEW"` \| `"RACE_SIMULATE_VERSION_TOO_OLD"` \| `"RACE_SINGLE_MODE_UNDEFINED_COMMAND_TYPE"` \| `"RACE_SINGLE_MODE_UNCHECKED_EVENT"` \| `"SINGLE_MODE_SUCCESSION_RENTAL_NOT_SAME_CIRCLE_MEMBER"` \| `"SINGLE_MODE_SUCCESSION_RENTAL_NUM_LIMIT"` \| `"SINGLE_MODE_SCENARIO_OUT_OF_TERM"` \| `"RACE_SIMULATOR_CLIENT_ERROR"` \| `"PRESENT_NOT_RECEIVE_OVERDUE"` \| `"PRESENT_NOT_RECEIVE_PRESENT"` \| `"MISSION_ROTATION_OVERTIME_ERROR"` \| `"MAINTENANCE_TASK_PAYMENT_DMM"` \| `"MAINTENANCE_TASK_STORY_EVENT"` \| `"MAINTENANCE_TASK_ROOM_MATCH"` \| `"MAINTENANCE_TASK_ITEM_TRADE"` \| `"MAINTENANCE_TASK_STORY_EXTRA"` \| `"MAINTENANCE_TASK_JUKEBOX"` \| `"MONEY_MAX_OVER_ERROR"` \| `"FRIENDPOINT_MAX_OVER_ERROR"` \| `"COIN_MAX_OVER_ERROR"` \| `"ITEM_MAX_OVER_ERROR"` \| `"CARD_MAX_OVER_ERROR"` \| `"USE_COIN_ERROR"` \| `"USE_TRAINER_POINT_ERROR"` \| `"NOT_ENOUGH_ERROR"` \| `"USE_MONEY_ERROR"` \| `"NOT_MATCH_VIEWER_ID"` \| `"SEARCH_USER_NOT_FOUND"` \| `"TUTORIAL_STEP_MISMATCH_ERROR"` \| `"TUTORIAL_OTHER_ACCESS_ERROR"` \| `"FRIEND_FOLLOW_COUNT_OVER_ERROR"` \| `"FRIEND_FOLLOW_USER_FOLLOW_COUNT_OVER_ERROR"` \| `"FRIEND_RENTAL_SUCCESSION"` \| `"MISSION_OVERTIME_ERROR"` \| `"SINGLE_MODE_RENTAL_MONEY_NOT_ENOUGH"` \| `"MAINTENANCE_TASK_TUTORIAL_TEAM_EDIT"` \| `"SINGLE_MODE_DIFFICULTY_NOT_OPEN_ERROR"` \| `"TEAM_STADIUM_NOT_RACE_TIME"` \| `"ROOM_MATCH_RESULT_OVERTIME_ERROR"` \| `"ROOM_MATCH_DELETE_ROOM_ERROR"` \| `"ROOM_MATCH_NO_ROOM_ERROR"` \| `"ROOM_MATCH_FORCE_START_OVERTIME_ERROR"` \| `"ROOM_MATCH_AUDIENCE_NUM_OVER"` \| `"ROOM_MATCH_SHARE_OVERTIME_ERROR"` \| `"ROOM_MATCH_WATCH_RACE_START_TIME_ERROR"` \| `"ROOM_MATCH_SAVE_ROOM_OVERTIME_ERROR"` \| `"SAFETYNET_ERROR"` \| `"SAFETYNET_RETRY"` \| `"ROOM_MATCH_EDIT_OVERTIME_ERROR"` \| `"DEVICECHECK_ERROR"` \| `"CHAMPIONS_RESET_ENTRY_NUM"` \| `"CHAMPIONS_SCHEDULE_CHANGED"` \| `"CHAMPIONS_LEAGUE_SELECT_END"` \| `"CHAMPIONS_LEAGUE_CHANGE_END"` \| `"CHAMPIONS_SCHEDULE_CHANGED_ENTRY"` \| `"STORY_EVENT_NOT_IN_TERM"` \| `"TRANSFER_EVENT_NOT_IN_TERM"` \| `"TRANSFER_EVENT_UPDATE_DETAIL"` \| `"NEED_PARENT_AGREE"` \| `"NOT_AVAILABLE_AGE_LIMIT"` \| `"CHAMPIONS_MATCHING_EMPTY"` \| `"ROOM_MATCH_CANCLE_OVERTIME_ERROR"` \| `"ROOM_MATCH_ENTRY_OVERTIME_ERROR"` \| `"ROOM_MATCH_ENTRY_NUM_OVER_ERROR"` \| `"TEAM_STADIUM_NOT_FOUND_TEAM"` \| `"CIRCLE_PENALTY_ERROR"` \| `"CIRCLE_MEMBER_NUM_ERROR"` \| `"CIRCLE_USER_REQUEST_COUNT_ERROR"` \| `"CIRCLE_REQUEST_COUNT_ERROR"` \| `"CIRCLE_SCOUT_COUNT_ERROR"` \| `"CIRCLE_CHAT_NO_JOIN_USER"` \| `"CIRCLE_ALREADY_JOIN"` \| `"CIRCLE_NOT_EXIST"` \| `"CIRCLE_NOT_BELONG"` \| `"CIRCLE_REQUEST_NOT_PERMITTED"` \| `"CIRCLE_ALREADY_SCOUT"` \| `"CIRCLE_NOT_MEMBER"` \| `"CIRCLE_NOT_OPERATE_TERM"` \| `"CIRCLE_NOT_REMOVE_TERM"` \| `"CIRCLE_NOT_SCOUT_TERM"` \| `"CIRCLE_ITEM_REQUEST_ERROR"` \| `"CIRCLE_DONATE_FAILED"` \| `"CIRCLE_ITEM_RECEIVE_ERROR"` \| `"CIRCLE_NO_OPERATION_AUTHORITY"` \| `"CIRCLE_SCOUT_MEMBER_MAX"` \| `"CIRCLE_NO_SCOUT_CIRCLE"` \| `"CIRCLE_NO_ITEM_REQUEST"` \| `"SINGLE_MODE_USE_TP_NOT_OPEN_ERROR"` \| `"USER_NOT_FOUND_ON_LOGIN"` \| `"MAINTENANCE_TASK_TEAM_EDIT"` \| `"MAINTENANCE_TASK_TRAINED_CHARA_LOAD"` \| `"PAYMENT_LIMIT_ERROR"` \| `"PAYMENT_TIMEOUT_ERROR"` \| `"PAYMENT_RESPONSE_ERROR"` \| `"PAYMENT_AGE_GROUP_ERROR"` \| `"PAYMENT_VALIDATION_ERROR"` \| `"PAYMENT_AGE_OUT_RANGE_ERROR"` \| `"PAYMENT_INVALID_BIRTH_DAY_ERROR"` \| `"PAYMENT_PURCHASED_TIMES_ERROR"` \| `"PAYMENT_PURCHASE_OVERTIME_ERROR"` \| `"PAYMENT_PURCHASE_ALERT"` \| `"PAYMENT_RECEIPT_ERROR"` \| `"SERIAL_CODE_NOT_RELEASE"` \| `"SERIAL_CODE_RESTRICTING"` \| `"SERIAL_CODE_INVALID"` \| `"SERIAL_CODE_LIMIT_OVER"` \| `"SERIAL_CODE_TIME_LIMIT_OVER"` \| `"SERIAL_CODE_CSV_ERROR"` \| `"PAYMENT_PURCHASE_REFUND_ALERT"` \| `"PAYMENT_PURCHASE_REFUND_BAN"` \| `"RC_KWS_ONE_TIME_PASSWORD_RESTRICTED"` \| `"RC_KWS_EMAIL_NOT_REGISTERED"` \| `"RC_KWS_EMAIL_ALREADY_REGISTERED"` \| `"SERIAL_CODE_INCOMPATIBLE"` \| `"PRODUCT_DATA_CSV_ERROR"` \| `"PAYMENT_ALREADY_ERROR"` \| `"PAYMENT_HISTORY_ERROR"` \| `"DB_ERROR"` \| `"MAINTENANCE"` \| `"SERVER_ERROR"` \| `"DB_CONNECT_ERROR"` \| `"SITE_DISABLE"` \| `"MEMCACHE_CONNECT_ERROR"` \| `"REDIS_CONNECT_ERROR"` \| `"ACCESS_ERROR"` \| `"SESSION_ERROR"` \| `"AUTH_ERROR"` \| `"ACCOUNT_BLOCK_ERROR"` \| `"VERSION_ERROR"` \| `"PARAM_ERROR"` \| `"POST_DATA_ERROR"` \| `"NG_WORD_ERROR"` \| `"DOUBLE_CLICK_ERROR"` \| `"HASH_ERROR"` \| `"DEVICE_ERROR"` \| `"DEVICE_NAME_ERROR"` \| `"BOT_ACCESS_ATTACK_ERROR"` \| `"CLIENT_OWN_NUM_ERROR"` \| `"RESOURCE_VERSION_ERROR"` \| `"NOTIFY_PREPARATION_SERVICE"` \| `"RC_EMAIL_ADDRESS_NOT_VALID"` \| `"MAINTENANCE_TASK_MISSION"` \| `"RC_KWS_ONE_TIME_PASSWORD_WRONG"` \| `"DATA_NOT_FOUND_ERROR"` \| `"MAINTENANCE_TASK_SHOP_ITEM_EXCHANGE"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_TICKET"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_MONEY"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_FRIEND_PT"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_COMMON_PIECE"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_GACHA_EXCHANGE"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_CIRCLE_PT"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_EXCHANGE_CURRENCY"` \| `"MAINTENANCE_TASK_LIMITED_EXCHANGE"` \| `"MAINTENANCE_TASK_SINGLE_MODE"` \| `"MAINTENANCE_TASK_GACHA"` \| `"MAINTENANCE_TASK_CIRCLE"` \| `"MAINTENANCE_TASK_DAILY_RACE"` \| `"MAINTENANCE_TASK_LEGEND_RACE"` \| `"MAINTENANCE_TASK_MAIN_STORY"` \| `"MAINTENANCE_TASK_CHARACTER_STORY"` \| `"MAINTENANCE_TASK_CARD_TALENT_STRENGTHEN"` \| `"MAINTENANCE_TASK_CARD_RARITY_UPGRADE"` \| `"MAINTENANCE_TASK_CARD_UNLOCK"` \| `"MAINTENANCE_TASK_SUPPORT_CARD_STRENGTHEN"` \| `"MAINTENANCE_TASK_SUPPORT_CARD_LIMIT_BREAK"` \| `"MAINTENANCE_TASK_SUPPORT_CARD_SELL"` \| `"MAINTENANCE_TASK_TEAM_STADIUM"` \| `"MAINTENANCE_TASK_PAYMENT_ANDROID"` \| `"MAINTENANCE_TASK_PAYMENT_IOS"` \| `"MAINTENANCE_TASK_PAYMENT_ALL"` \| `"DATA_VALIDATION_ERROR"` \| `"TRANSITION_OLD_ACCESS_ERROR"` \| `"TRANSITION_COMPLETED_ERROR"` \| `"INQUIRY_EMPTY_ERROR"` \| `"INQUIRY_LENGTH_ERROR"` \| `"USER_EXIST_ERROR"` \| `"RECORD_EXIST_ERROR"` \| `"DATA_REGISTER_ERROR"` \| `"INVALID_PARAMETER_ERROR"` \| `"USER_NOT_FOUND"` \| `"CSV_ERROR"` \| `"TRANSITION_USER_NOT_EXIST"` \| `"TRANSITIONPASSWORD_INVALID"` \| `"TRANSITION_USERID_INVALID"` \| `"ACCOUNT_UDID_CONFLICT"` \| `"PC_ACCOUNT_LIMIT_ERROR"` \| `"NO_PLATFORM_USER_ID_ERROR"` \| `"DMM_ONETIME_TOKEN_INVALID"` \| `"STEAM_ACCOUNT_REMOVE_CHAINED"` \| `"MAINTENANCE_TASK_ACCOUNT_SIGN_UP"` \| `"MAINTENANCE_TASK_PRESENT"` \| `"MAINTENANCE_TASK_DATA_LINKAGE"` \| `"MAINTENANCE_TASK_ACCOUNT_CHAIN"` \| `"RC_KWS_ONE_TIME_PASSWORD_EXPIRED"` \| `"STORY_EVENT_NOT_DATA"` \| `"CantFindResultCode"` \| `"PipelineError"` \| `"MissingViewerId"`

Defined in: [api/models/result\_codes.model.ts:231](https://github.com/davinidae/umazing-musumengine/blob/d465c141fa5c39728b70f5c7724cb67db8e16b35/src/api/models/result_codes.model.ts#L231)

Convert a numeric result code to its enum key name.
Falls back to `CantFindResultCode` if the value is not present.

#### Parameters

##### v

[`GallopResultCode`](#gallopresultcode)

Numeric value from `GallopResultCode`.

#### Returns

`"RESULT_CODE_OK"` \| `"ITEM_EXCHANGE_LIMITED_EXCHANGE_EXPIRED"` \| `"CHARACTER_STORY_NOT_CAMPAIGN"` \| `"GACHA_NOT_IN_TERM"` \| `"GACHA_LIMIT_ITEM_NOT_ENOUGH"` \| `"GACHA_UNSELECTABLE_CARD_SELECTED"` \| `"GACHA_LIMIT_ITEM_CEILING"` \| `"GACHA_DAILY_DRAW_END"` \| `"GACHA_FIRST_TIME_ONLY_DRAW_END"` \| `"GACHA_FREE_CAMPAIGN_NOT_AVAILABLE"` \| `"RACE_SIMULATOR_RESPONSE_ERROR"` \| `"ITEM_EXCHANGE_ITEM_NOT_ENOUGH"` \| `"RACE_SIMULATOR_CONNECT_ERROR"` \| `"RACE_SIMULATOR_PREFORKD_ERROR"` \| `"RACE_SIMULATOR_UNSUPPORTED_VERSION_ERROR"` \| `"LEGEND_RACE_NOT_RACE_TIME"` \| `"RACE_SIMULATE_VERSION_TOO_NEW"` \| `"RACE_SIMULATE_VERSION_TOO_OLD"` \| `"RACE_SINGLE_MODE_UNDEFINED_COMMAND_TYPE"` \| `"RACE_SINGLE_MODE_UNCHECKED_EVENT"` \| `"SINGLE_MODE_SUCCESSION_RENTAL_NOT_SAME_CIRCLE_MEMBER"` \| `"SINGLE_MODE_SUCCESSION_RENTAL_NUM_LIMIT"` \| `"SINGLE_MODE_SCENARIO_OUT_OF_TERM"` \| `"RACE_SIMULATOR_CLIENT_ERROR"` \| `"PRESENT_NOT_RECEIVE_OVERDUE"` \| `"PRESENT_NOT_RECEIVE_PRESENT"` \| `"MISSION_ROTATION_OVERTIME_ERROR"` \| `"MAINTENANCE_TASK_PAYMENT_DMM"` \| `"MAINTENANCE_TASK_STORY_EVENT"` \| `"MAINTENANCE_TASK_ROOM_MATCH"` \| `"MAINTENANCE_TASK_ITEM_TRADE"` \| `"MAINTENANCE_TASK_STORY_EXTRA"` \| `"MAINTENANCE_TASK_JUKEBOX"` \| `"MONEY_MAX_OVER_ERROR"` \| `"FRIENDPOINT_MAX_OVER_ERROR"` \| `"COIN_MAX_OVER_ERROR"` \| `"ITEM_MAX_OVER_ERROR"` \| `"CARD_MAX_OVER_ERROR"` \| `"USE_COIN_ERROR"` \| `"USE_TRAINER_POINT_ERROR"` \| `"NOT_ENOUGH_ERROR"` \| `"USE_MONEY_ERROR"` \| `"NOT_MATCH_VIEWER_ID"` \| `"SEARCH_USER_NOT_FOUND"` \| `"TUTORIAL_STEP_MISMATCH_ERROR"` \| `"TUTORIAL_OTHER_ACCESS_ERROR"` \| `"FRIEND_FOLLOW_COUNT_OVER_ERROR"` \| `"FRIEND_FOLLOW_USER_FOLLOW_COUNT_OVER_ERROR"` \| `"FRIEND_RENTAL_SUCCESSION"` \| `"MISSION_OVERTIME_ERROR"` \| `"SINGLE_MODE_RENTAL_MONEY_NOT_ENOUGH"` \| `"MAINTENANCE_TASK_TUTORIAL_TEAM_EDIT"` \| `"SINGLE_MODE_DIFFICULTY_NOT_OPEN_ERROR"` \| `"TEAM_STADIUM_NOT_RACE_TIME"` \| `"ROOM_MATCH_RESULT_OVERTIME_ERROR"` \| `"ROOM_MATCH_DELETE_ROOM_ERROR"` \| `"ROOM_MATCH_NO_ROOM_ERROR"` \| `"ROOM_MATCH_FORCE_START_OVERTIME_ERROR"` \| `"ROOM_MATCH_AUDIENCE_NUM_OVER"` \| `"ROOM_MATCH_SHARE_OVERTIME_ERROR"` \| `"ROOM_MATCH_WATCH_RACE_START_TIME_ERROR"` \| `"ROOM_MATCH_SAVE_ROOM_OVERTIME_ERROR"` \| `"SAFETYNET_ERROR"` \| `"SAFETYNET_RETRY"` \| `"ROOM_MATCH_EDIT_OVERTIME_ERROR"` \| `"DEVICECHECK_ERROR"` \| `"CHAMPIONS_RESET_ENTRY_NUM"` \| `"CHAMPIONS_SCHEDULE_CHANGED"` \| `"CHAMPIONS_LEAGUE_SELECT_END"` \| `"CHAMPIONS_LEAGUE_CHANGE_END"` \| `"CHAMPIONS_SCHEDULE_CHANGED_ENTRY"` \| `"STORY_EVENT_NOT_IN_TERM"` \| `"TRANSFER_EVENT_NOT_IN_TERM"` \| `"TRANSFER_EVENT_UPDATE_DETAIL"` \| `"NEED_PARENT_AGREE"` \| `"NOT_AVAILABLE_AGE_LIMIT"` \| `"CHAMPIONS_MATCHING_EMPTY"` \| `"ROOM_MATCH_CANCLE_OVERTIME_ERROR"` \| `"ROOM_MATCH_ENTRY_OVERTIME_ERROR"` \| `"ROOM_MATCH_ENTRY_NUM_OVER_ERROR"` \| `"TEAM_STADIUM_NOT_FOUND_TEAM"` \| `"CIRCLE_PENALTY_ERROR"` \| `"CIRCLE_MEMBER_NUM_ERROR"` \| `"CIRCLE_USER_REQUEST_COUNT_ERROR"` \| `"CIRCLE_REQUEST_COUNT_ERROR"` \| `"CIRCLE_SCOUT_COUNT_ERROR"` \| `"CIRCLE_CHAT_NO_JOIN_USER"` \| `"CIRCLE_ALREADY_JOIN"` \| `"CIRCLE_NOT_EXIST"` \| `"CIRCLE_NOT_BELONG"` \| `"CIRCLE_REQUEST_NOT_PERMITTED"` \| `"CIRCLE_ALREADY_SCOUT"` \| `"CIRCLE_NOT_MEMBER"` \| `"CIRCLE_NOT_OPERATE_TERM"` \| `"CIRCLE_NOT_REMOVE_TERM"` \| `"CIRCLE_NOT_SCOUT_TERM"` \| `"CIRCLE_ITEM_REQUEST_ERROR"` \| `"CIRCLE_DONATE_FAILED"` \| `"CIRCLE_ITEM_RECEIVE_ERROR"` \| `"CIRCLE_NO_OPERATION_AUTHORITY"` \| `"CIRCLE_SCOUT_MEMBER_MAX"` \| `"CIRCLE_NO_SCOUT_CIRCLE"` \| `"CIRCLE_NO_ITEM_REQUEST"` \| `"SINGLE_MODE_USE_TP_NOT_OPEN_ERROR"` \| `"USER_NOT_FOUND_ON_LOGIN"` \| `"MAINTENANCE_TASK_TEAM_EDIT"` \| `"MAINTENANCE_TASK_TRAINED_CHARA_LOAD"` \| `"PAYMENT_LIMIT_ERROR"` \| `"PAYMENT_TIMEOUT_ERROR"` \| `"PAYMENT_RESPONSE_ERROR"` \| `"PAYMENT_AGE_GROUP_ERROR"` \| `"PAYMENT_VALIDATION_ERROR"` \| `"PAYMENT_AGE_OUT_RANGE_ERROR"` \| `"PAYMENT_INVALID_BIRTH_DAY_ERROR"` \| `"PAYMENT_PURCHASED_TIMES_ERROR"` \| `"PAYMENT_PURCHASE_OVERTIME_ERROR"` \| `"PAYMENT_PURCHASE_ALERT"` \| `"PAYMENT_RECEIPT_ERROR"` \| `"SERIAL_CODE_NOT_RELEASE"` \| `"SERIAL_CODE_RESTRICTING"` \| `"SERIAL_CODE_INVALID"` \| `"SERIAL_CODE_LIMIT_OVER"` \| `"SERIAL_CODE_TIME_LIMIT_OVER"` \| `"SERIAL_CODE_CSV_ERROR"` \| `"PAYMENT_PURCHASE_REFUND_ALERT"` \| `"PAYMENT_PURCHASE_REFUND_BAN"` \| `"RC_KWS_ONE_TIME_PASSWORD_RESTRICTED"` \| `"RC_KWS_EMAIL_NOT_REGISTERED"` \| `"RC_KWS_EMAIL_ALREADY_REGISTERED"` \| `"SERIAL_CODE_INCOMPATIBLE"` \| `"PRODUCT_DATA_CSV_ERROR"` \| `"PAYMENT_ALREADY_ERROR"` \| `"PAYMENT_HISTORY_ERROR"` \| `"DB_ERROR"` \| `"MAINTENANCE"` \| `"SERVER_ERROR"` \| `"DB_CONNECT_ERROR"` \| `"SITE_DISABLE"` \| `"MEMCACHE_CONNECT_ERROR"` \| `"REDIS_CONNECT_ERROR"` \| `"ACCESS_ERROR"` \| `"SESSION_ERROR"` \| `"AUTH_ERROR"` \| `"ACCOUNT_BLOCK_ERROR"` \| `"VERSION_ERROR"` \| `"PARAM_ERROR"` \| `"POST_DATA_ERROR"` \| `"NG_WORD_ERROR"` \| `"DOUBLE_CLICK_ERROR"` \| `"HASH_ERROR"` \| `"DEVICE_ERROR"` \| `"DEVICE_NAME_ERROR"` \| `"BOT_ACCESS_ATTACK_ERROR"` \| `"CLIENT_OWN_NUM_ERROR"` \| `"RESOURCE_VERSION_ERROR"` \| `"NOTIFY_PREPARATION_SERVICE"` \| `"RC_EMAIL_ADDRESS_NOT_VALID"` \| `"MAINTENANCE_TASK_MISSION"` \| `"RC_KWS_ONE_TIME_PASSWORD_WRONG"` \| `"DATA_NOT_FOUND_ERROR"` \| `"MAINTENANCE_TASK_SHOP_ITEM_EXCHANGE"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_TICKET"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_MONEY"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_FRIEND_PT"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_COMMON_PIECE"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_GACHA_EXCHANGE"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_CIRCLE_PT"` \| `"MAINTENANCE_TASK_EXCHANGE_BY_EXCHANGE_CURRENCY"` \| `"MAINTENANCE_TASK_LIMITED_EXCHANGE"` \| `"MAINTENANCE_TASK_SINGLE_MODE"` \| `"MAINTENANCE_TASK_GACHA"` \| `"MAINTENANCE_TASK_CIRCLE"` \| `"MAINTENANCE_TASK_DAILY_RACE"` \| `"MAINTENANCE_TASK_LEGEND_RACE"` \| `"MAINTENANCE_TASK_MAIN_STORY"` \| `"MAINTENANCE_TASK_CHARACTER_STORY"` \| `"MAINTENANCE_TASK_CARD_TALENT_STRENGTHEN"` \| `"MAINTENANCE_TASK_CARD_RARITY_UPGRADE"` \| `"MAINTENANCE_TASK_CARD_UNLOCK"` \| `"MAINTENANCE_TASK_SUPPORT_CARD_STRENGTHEN"` \| `"MAINTENANCE_TASK_SUPPORT_CARD_LIMIT_BREAK"` \| `"MAINTENANCE_TASK_SUPPORT_CARD_SELL"` \| `"MAINTENANCE_TASK_TEAM_STADIUM"` \| `"MAINTENANCE_TASK_PAYMENT_ANDROID"` \| `"MAINTENANCE_TASK_PAYMENT_IOS"` \| `"MAINTENANCE_TASK_PAYMENT_ALL"` \| `"DATA_VALIDATION_ERROR"` \| `"TRANSITION_OLD_ACCESS_ERROR"` \| `"TRANSITION_COMPLETED_ERROR"` \| `"INQUIRY_EMPTY_ERROR"` \| `"INQUIRY_LENGTH_ERROR"` \| `"USER_EXIST_ERROR"` \| `"RECORD_EXIST_ERROR"` \| `"DATA_REGISTER_ERROR"` \| `"INVALID_PARAMETER_ERROR"` \| `"USER_NOT_FOUND"` \| `"CSV_ERROR"` \| `"TRANSITION_USER_NOT_EXIST"` \| `"TRANSITIONPASSWORD_INVALID"` \| `"TRANSITION_USERID_INVALID"` \| `"ACCOUNT_UDID_CONFLICT"` \| `"PC_ACCOUNT_LIMIT_ERROR"` \| `"NO_PLATFORM_USER_ID_ERROR"` \| `"DMM_ONETIME_TOKEN_INVALID"` \| `"STEAM_ACCOUNT_REMOVE_CHAINED"` \| `"MAINTENANCE_TASK_ACCOUNT_SIGN_UP"` \| `"MAINTENANCE_TASK_PRESENT"` \| `"MAINTENANCE_TASK_DATA_LINKAGE"` \| `"MAINTENANCE_TASK_ACCOUNT_CHAIN"` \| `"RC_KWS_ONE_TIME_PASSWORD_EXPIRED"` \| `"STORY_EVENT_NOT_DATA"` \| `"CantFindResultCode"` \| `"PipelineError"` \| `"MissingViewerId"`

Enum key name as a string.
