import { AuthKey } from '../../../../lib';
import type { AttestationType, RequestResult } from '../../../models';
import { UmaClient } from '../../uma-client.service';
import { CoreStep } from '../core.step';

/**
 * ToolSignupStep.
 * @remarks Extends/implements: `extends CoreStep< Umatypes.Request.ToolSignup, Umatypes.Response.ToolSignup >`.
 */
export class ToolSignupStep extends CoreStep<
  Umatypes.Request.Tool.Signup,
  Umatypes.Response.Tool.Signup
> {
  /**
   * endpoint.
   * @remarks Type: `string`.
   * @defaultValue `'tool/signup'`
   */
  override endpoint = 'tool/signup';

  constructor(
    protected readonly umaClient: UmaClient,
    private readonly attestationType: AttestationType,
  ) {
    super(umaClient);
  }

  /**
   * getRequestBody.
   * @returns Type: `ToolSignup`.
   */
  override getRequestBody(): Umatypes.Request.Tool.Signup {
    return {
      error_code: 0,
      error_message: '',
      attestation_type: this.attestationType,
      optin_user_birth: 199709,
      dma_state: 0,
      country: 'Spain',
      credential: '',
    };
  }

  /**
   * afterExecute.
   * @param result - Type: `RequestResult<ToolSignup>`.
   */
  protected override afterExecute(result: RequestResult<Umatypes.Response.Tool.Signup>): void {
    /**
     * viewer_id.
     * @remarks Type: `number`.
     * @defaultValue `this.umaClient.data.base.viewer_id`
     */
    let viewer_id = this.umaClient.data.base.viewer_id;
    /**
     * authKey.
     * @remarks Type: `AuthKey | undefined`.
     * @defaultValue `this.umaClient.data.header.authKey`
     */
    let authKey = this.umaClient.data.header.authKey;
    if (result.decoded.data) {
      viewer_id = result.decoded.data.viewer_id;
      authKey = new AuthKey(Uint8Array.from(Buffer.from(result.decoded.data.auth_key, 'base64')));
    }
    this.umaClient.updateViewerId(viewer_id);
    this.umaClient.updateAuthKey(authKey);
    this.umaClient.regenSessionId();
  }
}
