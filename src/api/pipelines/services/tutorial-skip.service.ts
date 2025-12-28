import { StepService } from './step.service';

export class TutorialSkipService extends StepService {
  override readonly name = 'tutorial_skip';
  override readonly endpoint = 'tutorial/skip';

  /**
   * Build payload including `viewer_id` (if available) along with client data.
   */
  getPayload() {
    return {
      ...this.getBasePayload(),
    };
  }

  getHeaders() {
    return {
      ...this.getBaseHeaders(),
    };
  }
}
