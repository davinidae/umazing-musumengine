import { CoreStep } from '../core.step';

/**
 * TutorialSkipStep.
 * @remarks Extends/implements: `extends CoreStep< Umatypes.Request.TutorialSkip, Umatypes.Response.TutorialSkip >`.
 */
export class TutorialSkipStep extends CoreStep<
  Umatypes.Request.TutorialSkip,
  Umatypes.Response.TutorialSkip
> {
  /**
   * endpoint.
   * @remarks Type: `string`.
   * @defaultValue `'tutorial/skip'`
   */
  override endpoint = 'tutorial/skip';

  /**
   * getRequestBody.
   * @returns Type: `object`.
   */
  override getRequestBody(): Umatypes.Request.TutorialSkip {
    return {};
  }
}
