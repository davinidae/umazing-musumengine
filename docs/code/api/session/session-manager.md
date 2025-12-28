# api/session/session-manager

## Classes

### SessionManager

Defined in:
[api/session/session-manager.ts:18](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L18)

Simple in-memory session manager to keep server-only data between endpoint calls. Not for production
multi-process use without an external store.

#### Constructors

##### Constructor

> **new SessionManager**(`opts?`): [`SessionManager`](#sessionmanager)

Defined in:
[api/session/session-manager.ts:23](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L23)

###### Parameters

###### opts?

`Partial`\<\{ `ttlMs`: `number`; \}\>

###### Returns

[`SessionManager`](#sessionmanager)

#### Properties

##### sessions

> `private` `readonly` **sessions**: `Map`\<`string`, [`UserSession`](user-session.md#usersession)\>

Defined in:
[api/session/session-manager.ts:19](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L19)

##### ttlMs

> `private` `readonly` **ttlMs**: `number`

Defined in:
[api/session/session-manager.ts:21](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L21)

#### Methods

##### createSession()

> **createSession**(`steam_id`, `steam_session_ticket`, `prevSessionId`):
> `Promise`\<[`UserSession`](user-session.md#usersession)\>

Defined in:
[api/session/session-manager.ts:127](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L127)

Create a new server-side session and store it in memory.

###### Parameters

###### steam_id

`string`

Steam identifier.

###### steam_session_ticket

`string`

Steam session ticket.

###### prevSessionId

`number` | `undefined`

###### Returns

`Promise`\<[`UserSession`](user-session.md#usersession)\>

Created `UserSession`.

##### delete()

> **delete**(`id`): `void`

Defined in:
[api/session/session-manager.ts:211](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L211)

Delete a session by id.

###### Parameters

###### id

`string`

Session id.

###### Returns

`void`

##### deleteInactiveSessions()

> `private` **deleteInactiveSessions**(): `void`

Defined in:
[api/session/session-manager.ts:215](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L215)

###### Returns

`void`

##### generateCtx()

> **generateCtx**(`steam_id`, `steam_session_ticket`, `storedData`):
> [`PipelineContext`](../models/pipelines.model.md#pipelinecontext)

Defined in:
[api/session/session-manager.ts:38](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L38)

Generate a default `PipelineContext` for a user based on Steam identifiers. Uses deterministic
derivations for development/testing.

###### Parameters

###### steam_id

`string`

Steam identifier.

###### steam_session_ticket

`string`

Steam session ticket.

###### storedData

[`StoredData`](../models/api.model.md#storeddata)

###### Returns

[`PipelineContext`](../models/pipelines.model.md#pipelinecontext)

Initialized `PipelineContext`.

##### getContext()

> **getContext**(`id`): [`PipelineContext`](../models/pipelines.model.md#pipelinecontext) \|
> `undefined`

Defined in:
[api/session/session-manager.ts:181](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L181)

Access the current pipeline context for a session.

###### Parameters

###### id

`string`

Session id.

###### Returns

[`PipelineContext`](../models/pipelines.model.md#pipelinecontext) \| `undefined`

`PipelineContext` or `undefined`.

##### getLastStep()

> **getLastStep**(`id`): `Partial`\<\{ `decoded`:
> [`DecodeResponseOutput`](../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
> `string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> \| `undefined`

Defined in:
[api/session/session-manager.ts:203](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L203)

Read the last step result for a session.

###### Parameters

###### id

`string`

Session id.

###### Returns

`Partial`\<\{ `decoded`:
[`DecodeResponseOutput`](../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
`string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> \| `undefined`

`StepPrevResult` or `undefined`.

##### getSession()

> **getSession**(`id`): [`UserSession`](user-session.md#usersession) \| `undefined`

Defined in:
[api/session/session-manager.ts:155](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L155)

Retrieve a session by id. Applies TTL lazily and prunes expired entries.

###### Parameters

###### id

`string`

Session identifier.

###### Returns

[`UserSession`](user-session.md#usersession) \| `undefined`

`UserSession` or `undefined` if not found/expired.

##### getStoredData()

> **getStoredData**(`prevSessionId`): `Promise`\<[`StoredData`](../models/api.model.md#storeddata)\>

Defined in:
[api/session/session-manager.ts:141](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L141)

###### Parameters

###### prevSessionId

`number` | `undefined`

###### Returns

`Promise`\<[`StoredData`](../models/api.model.md#storeddata)\>

##### setContext()

> **setContext**(`id`, `ctx`): `void`

Defined in:
[api/session/session-manager.ts:168](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L168)

Update the session's pipeline context.

###### Parameters

###### id

`string`

Session id.

###### ctx

[`PipelineContext`](../models/pipelines.model.md#pipelinecontext)

New `PipelineContext`.

###### Returns

`void`

##### setLastStep()

> **setLastStep**(`id`, `step`): `void`

Defined in:
[api/session/session-manager.ts:190](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L190)

Persist the last step result for a session.

###### Parameters

###### id

`string`

Session id.

###### step

Last step or `undefined`.

`Partial`\<\{ `decoded`:
[`DecodeResponseOutput`](../../lib/models/runtime.model.md#decoderesponseoutput); `endpoint`:
`string`; `name`: `string`; `requestB64`: `string`; `responseB64`: `string`; \}\> | `undefined`

###### Returns

`void`

## Variables

### sessionManager

> `const` **sessionManager**: [`SessionManager`](#sessionmanager)

Defined in:
[api/session/session-manager.ts:225](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/session/session-manager.ts#L225)
