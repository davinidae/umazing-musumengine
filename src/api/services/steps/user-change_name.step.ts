import { CoreStep } from './core.step';

export class UserChangeNameStep extends CoreStep<
  Umatypes.Request.UserChangeName,
  Umatypes.Response.UserChangeName
> {
  override endpoint = 'user/change_name';

  override getRequestBody(): Umatypes.Request.UserChangeName {
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
