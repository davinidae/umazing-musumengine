import { StepService } from './step.service';

export class UserChangeNameService extends StepService {
  override readonly name = 'change_name';
  override readonly endpoint = 'user/change_name';

  /**
   * Build payload including `viewer_id` (if available) along with client data.
   */
  getPayload() {
    const baseName = 'UMA';
    const date = new Date();
    const name = [
      baseName,
      date.getUTCFullYear().toString().substring(2),
      date.getUTCMonth() + 1,
      date.getUTCDate(),
      date.getUTCHours(),
      date.getUTCMinutes(),
      date.getUTCSeconds(),
    ].join('');
    console.log(`Generated name: ${name}`);
    return {
      ...this.getBasePayload(),
      name, // Character limit ?
    };
  }

  getHeaders() {
    return {
      ...this.getBaseHeaders(),
    };
  }
}
