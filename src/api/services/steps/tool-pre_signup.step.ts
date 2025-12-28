import { CoreStep } from './core.step';

export class ToolPreSignupStep extends CoreStep<
  Umatypes.Request.ToolPreSignup,
  Umatypes.Response.ToolPreSignup
> {
  endpoint = 'tool/pre_signup';

  getRequestBody() {
    return {};
  }

  protected async afterExecute() {
    await this.stepData.umaclient.regenSessionId();
  }
}
