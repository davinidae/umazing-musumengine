import { FramingMode } from '../../../lib';
import { StepService } from './step.service';

/**
 * load/index: Retrieves the main screen data for the session.
 * Requires a valid viewer_id; skips otherwise.
 */
export class LoadIndexService extends StepService {
  override readonly name = 'load_index';
  override readonly endpoint = 'load/index';
  override readonly framing = FramingMode.LengthPrefixed;

  /**
   * Build payload for `load/index` using `viewer_id` and client metadata.
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
