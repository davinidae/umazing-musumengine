import { CoreStep } from '../core.step';

export class PresentsIndexStep extends CoreStep<
  Umatypes.Request.Presents.Index,
  Umatypes.Response.Presents.Index
> {
  /**
   * endpoint.
   * @remarks Type: `string`.
   * @defaultValue `'presents/index'`
   */
  override endpoint = 'presents/index';

  /**
   * getRequestBody.
   * @returns Type: `object`.
   */
  override getRequestBody(): Umatypes.Request.Presents.Index {
    return {
      time_filter_type: 0,
      category_filter_type: [0],
      offset: 0,
      limit: 100,
      is_asc: true,
    };
  }
}
