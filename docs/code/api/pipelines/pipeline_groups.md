# api/pipelines/pipeline_groups

## Variables

### loginPipeline

> `const` **loginPipeline**: (_typeof_
> [`StartSessionService`](services/start_session.service.md#startsessionservice) \| _typeof_
> [`LoadIndexService`](services/load_index.service.md#loadindexservice))[]

Defined in:
[api/pipelines/pipeline_groups.ts:13](https://github.com/davinidae/umazing-musumengine/blob/bf08ed126f8bb645eae5e47186cb126eac41d65e/src/api/pipelines/pipeline_groups.ts#L13)

Bootstrap pipeline used by `/login` to start a user session. Order:

- `pre_signup` (kv-stream): send device/env data
- `signup` (kv-stream): register/fetch viewer_id
- `start_session` (length-prefixed): establish server session
- `load/index` (length-prefixed): fetch main screen
