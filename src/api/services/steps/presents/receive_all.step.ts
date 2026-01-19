import { CoreStep } from '../core.step';

export class PresentsReceiveAllStep extends CoreStep<
  Umatypes.Request.Presents.ReceiveAll,
  Umatypes.Response.Presents.ReceiveAll
> {
  /**
   * endpoint.
   * @remarks Type: `string`.
   * @defaultValue `'presents/receive_all'`
   */
  override endpoint = 'presents/receive_all';

  /**
   * getRequestBody.
   * @returns Type: `object`.
   */
  override getRequestBody(): Umatypes.Request.Presents.ReceiveAll {
    return {
      time_filter_type: 0,
      category_filter_type: [0],
      is_asc: true,
      current_rest_present_num: 3,
    };
  }
}
