import { CoreStep } from '../core.step';

/**
 * ToolPreSignupStep.
 * @remarks Extends/implements: `extends CoreStep< Umatypes.Request.ToolPreSignup, Umatypes.Response.ToolPreSignup >`.
 */
export class ToolPreSignupStep extends CoreStep<
  Umatypes.Request.ToolPreSignup,
  Umatypes.Response.ToolPreSignup
> {
  /**
   * endpoint.
   * @remarks Type: `string`.
   * @defaultValue `'tool/pre_signup'`
   */
  override endpoint = 'tool/pre_signup';

  /**
   * getRequestBody.
   * @returns Type: `object`.
   */
  override getRequestBody(): Umatypes.Request.ToolPreSignup {
    return {};
  }

  /**
   * afterExecute.
   */
  protected override afterExecute(): void {
    this.umaClient.regenSessionId();
  }
}
