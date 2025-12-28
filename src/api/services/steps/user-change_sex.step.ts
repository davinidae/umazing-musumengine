import { CoreStep } from './core.step';

export class UserChangeSexStep extends CoreStep<
  Umatypes.Request.UserChangeSex,
  Umatypes.Response.UserChangeSex
> {
  endpoint = 'user/change_sex';

  getRequestBody() {
    return {
      sex: 1,
    };
  }
}
