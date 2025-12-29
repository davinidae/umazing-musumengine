import { AuthKey } from '../../../lib';
import { RequestResult } from '../../models';
import { CoreStep } from './core.step';

export class ToolSignupStep extends CoreStep<
  Umatypes.Request.ToolSignup,
  Umatypes.Response.ToolSignup
> {
  endpoint = 'tool/signup';

  getRequestBody() {
    return {
      error_code: 0,
      error_message: '',
      attestation_type: 0,
      optin_user_birth: 199801,
      dma_state: 0,
      country: 'Canada',
      credential: '',
    };
  }

  public override async afterExecute(result: RequestResult<Umatypes.Response.ToolSignup>) {
    let viewer_id = this.stepData.base.viewer_id;
    let authKey = this.stepData.header.authKey;
    if (result.decoded.data) {
      viewer_id = result.decoded.data.viewer_id;
      authKey = new AuthKey(Uint8Array.from(Buffer.from(result.decoded.data.auth_key, 'base64')));
    }
    this.stepData.umaclient.updateViewerId(viewer_id);
    this.stepData.umaclient.updateAuthKey(authKey);
    this.stepData.umaclient.regenSessionId();
  }
}
