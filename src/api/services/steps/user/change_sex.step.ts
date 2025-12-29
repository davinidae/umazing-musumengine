import { CoreStep } from '../core.step';

/**
 * UserChangeSexStep.
 * @remarks Extends/implements: `extends CoreStep< Umatypes.Request.UserChangeSex, Umatypes.Response.UserChangeSex >`.
 */
export class UserChangeSexStep extends CoreStep<
  Umatypes.Request.UserChangeSex,
  Umatypes.Response.UserChangeSex
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
  override getRequestBody(): Umatypes.Request.UserChangeSex {
    return {
      sex: 1,
    };
  }
}
