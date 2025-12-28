import { CoreStepService } from './core.step';

export class ToolPreSignupStepService extends CoreStepService<Record<string, never>, unknown> {
  endpoint = 'tool/pre_signup';

  getRequestBody(): Record<string, never> {
    return {};
  }
}
