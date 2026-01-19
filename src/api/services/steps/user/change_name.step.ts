import { CoreStep } from '../core.step';

/**
 * UserChangeNameStep.
 * @remarks Extends/implements: `extends CoreStep< Umatypes.Request.UserChangeName, Umatypes.Response.UserChangeName >`.
 */
export class UserChangeNameStep extends CoreStep<
  Umatypes.Request.User.ChangeName,
  Umatypes.Response.User.ChangeName
> {
  /**
   * endpoint.
   * @remarks Type: `string`.
   * @defaultValue `'user/change_name'`
   */
  override endpoint = 'user/change_name';

  /**
   * getRequestBody.
   * @returns Type: `UserChangeName`.
   */
  override getRequestBody(): Umatypes.Request.User.ChangeName {
    /**
     * date.
     * @remarks Type: `Date`.
     * @defaultValue `new Date()`
     */
    const date = new Date();
    return {
      name: [
        'UMA',
        date.getFullYear().toString().substring(2),
        date.getMonth() + 1,
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
      ].join(''),
    };
  }
}
