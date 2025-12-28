import { SignupData, SignupRequest } from '../../models';
import { AuthKey } from '../../utils';
import { CoreStepService } from './core.step';

export class ToolSignupStepService extends CoreStepService<SignupRequest, SignupData> {
  endpoint = 'tool/signup';

  getRequestBody(): SignupRequest {
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

  public override async execute() {
    const response = await super.execute();
    let viewer_id = this.stepData.base.viewer_id;
    let authKey = this.stepData.header.authKey;
    if (response.decoded.data) {
      viewer_id = response.decoded.data.viewer_id;
      authKey = new AuthKey(Uint8Array.from(Buffer.from(response.decoded.data.auth_key, 'base64')));
    }
    return {
      ...response,
      viewer_id,
      authKey,
    };
  }
}
