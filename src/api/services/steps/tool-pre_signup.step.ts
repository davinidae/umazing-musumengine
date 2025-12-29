import { CoreStep } from './core.step';

export class ToolPreSignupStep extends CoreStep<
  Umatypes.Request.ToolPreSignup,
  Umatypes.Response.ToolPreSignup
> {
  override endpoint = 'tool/pre_signup';

  override getRequestBody(): Umatypes.Request.ToolPreSignup {
    return {};
  }

  protected override afterExecute(): void {
    this.stepData.umaclient.regenSessionId();
  }
}
