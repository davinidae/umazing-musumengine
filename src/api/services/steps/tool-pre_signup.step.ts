import { CoreStep } from './core.step';

export class ToolPreSignupStep extends CoreStep<Record<string, never>, unknown> {
  endpoint = 'tool/pre_signup';

  getRequestBody(): Record<string, never> {
    return {};
  }
}
