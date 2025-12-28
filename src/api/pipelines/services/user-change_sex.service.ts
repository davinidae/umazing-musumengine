import { StepService } from './step.service';

export class UserChangeSexService extends StepService {
  override readonly name = 'change_sex';
  override readonly endpoint = 'user/change_sex';

  /**
   * Build payload including `viewer_id` (if available) along with client data.
   */
  getPayload() {
    return {
      ...this.getBasePayload(),
      sex: 1, // ?
    };
  }

  getHeaders() {
    return {
      ...this.getBaseHeaders(),
    };
  }
}
