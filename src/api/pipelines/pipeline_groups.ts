import {
  LoadIndexService,
  ToolPreSignupService,
  ToolSignupService,
  ToolStartSessionService,
  UserChangeNameService,
  UserChangeSexService,
  TutorialSkipService,
} from './services';

/**
 * Bootstrap pipeline used by `/login` to start a user session when data already exists for a specific user.
 * Order:
 * - `pre_signup` (kv-stream): send device/env data
 * - `signup` (kv-stream): register/fetch viewer_id
 * - `start_session` (length-prefixed): establish server session
 * - `load/index` (length-prefixed): fetch main screen
 *
 * @public
 */
export const loginPipeline = [ToolStartSessionService, LoadIndexService];

/**
 * Bootstrap pipeline used by `/login` to start a user session when data does not yet exist for a specific user.
 * Order:
 * - `pre_signup` (kv-stream): send device/env data
 * - `signup` (kv-stream): register/fetch viewer_id
 * - `start_session` (length-prefixed): establish server session
 * - `load/index` (length-prefixed): fetch main screen
 * - `user/change-name` (length-prefixed): set user name
 * - `user/change-sex` (length-prefixed): set user sex
 * - `tutorial/skip` (length-prefixed): skip tutorial
 *
 * @public
 */
export const signupPipeline = [
  ToolPreSignupService,
  ToolSignupService,
  ToolStartSessionService,
  LoadIndexService,
  UserChangeNameService,
  UserChangeSexService,
  TutorialSkipService,
];
