import { CoreStep } from '../core.step';

/**
 * UserChangeSexStep.
 * @remarks Extends/implements: `extends CoreStep< Umatypes.Request.UserChangeSex, Umatypes.Response.UserChangeSex >`.
 */
export class UserChangeSexStep extends CoreStep<
  Umatypes.Request.User.ChangeSex,
  Umatypes.Response.User.ChangeSex
> {
  /**
   * endpoint.
   * @remarks Type: `string`.
   * @defaultValue `'user/change_sex'`
   */
  override endpoint = 'user/change_sex';

  /**
   * getRequestBody.
   * @returns Type: `UserChangeSex`.
   */
  override getRequestBody(): Umatypes.Request.User.ChangeSex {
    return {
      sex: 1,
    };
  }
}
