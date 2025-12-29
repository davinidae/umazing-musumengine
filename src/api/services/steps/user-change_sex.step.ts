import { CoreStep } from './core.step';

export class UserChangeSexStep extends CoreStep<
  Umatypes.Request.UserChangeSex,
  Umatypes.Response.UserChangeSex
> {
  override endpoint = 'user/change_sex';

  override getRequestBody(): Umatypes.Request.UserChangeSex {
    return {
      sex: 1,
    };
  }
}
