# api/pipelines/pipeline_groups

## Variables

### loginPipeline

> `const` **loginPipeline**: (_typeof_
> [`LoadIndexService`](services/load-index.service.md#loadindexservice) \| _typeof_
> [`ToolStartSessionService`](services/tool-start_session.service.md#toolstartsessionservice))[]

Defined in:
[api/pipelines/pipeline_groups.ts:21](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/pipeline_groups.ts#L21)

Bootstrap pipeline used by `/login` to start a user session when data already exists for a specific
user. Order:

- `pre_signup` (kv-stream): send device/env data
- `signup` (kv-stream): register/fetch viewer_id
- `start_session` (length-prefixed): establish server session
- `load/index` (length-prefixed): fetch main screen

---

### signupPipeline

> `const` **signupPipeline**: (_typeof_
> [`LoadIndexService`](services/load-index.service.md#loadindexservice) \| _typeof_
> [`ToolPreSignupService`](services/tool-pre_signup.service.md#toolpresignupservice) \| _typeof_
> [`ToolSignupService`](services/tool-signup.service.md#toolsignupservice) \| _typeof_
> [`ToolStartSessionService`](services/tool-start_session.service.md#toolstartsessionservice) \|
> _typeof_ [`UserChangeNameService`](services/user-change_name.service.md#userchangenameservice) \|
> _typeof_ [`UserChangeSexService`](services/user-change_sex.service.md#userchangesexservice) \|
> _typeof_ [`TutorialSkipService`](services/tutorial-skip.service.md#tutorialskipservice))[]

Defined in:
[api/pipelines/pipeline_groups.ts:36](https://github.com/davinidae/umazing-musumengine/blob/d3505fca22e9cc9337c67181003a80a301f9263f/src/api/pipelines/pipeline_groups.ts#L36)

Bootstrap pipeline used by `/login` to start a user session when data does not yet exist for a
specific user. Order:

- `pre_signup` (kv-stream): send device/env data
- `signup` (kv-stream): register/fetch viewer_id
- `start_session` (length-prefixed): establish server session
- `load/index` (length-prefixed): fetch main screen
- `user/change-name` (length-prefixed): set user name
- `user/change-sex` (length-prefixed): set user sex
- `tutorial/skip` (length-prefixed): skip tutorial
