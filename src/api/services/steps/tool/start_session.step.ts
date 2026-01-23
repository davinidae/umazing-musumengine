import type { AttestationType, RequestResult } from '../../../models';
import { UmaClient } from '../../uma-client.service';
import { CoreStep } from '../core.step';

/**
 * StartSessionStep.
 * @remarks Extends/implements: `extends CoreStep< Umatypes.Request.ToolStartSession, Umatypes.Response.ToolStartSession >`.
 */
export class StartSessionStep extends CoreStep<
  Umatypes.Request.Tool.StartSession,
  Umatypes.Response.Tool.StartSession
> {
  /**
   * endpoint.
   * @remarks Type: `string`.
   * @defaultValue `'tool/start_session'`
   */
  override endpoint = 'tool/start_session';

  /**
   * getRequestBody.
   * @returns Type: `ToolStartSession`.
   */
  override getRequestBody(): Umatypes.Request.Tool.StartSession {
    return {
      attestation_type: this.attestationType,
      device_token: null,
      button_info: '',
    };
  }

  /**
   * constructor.
   * @param umaClient - Type: `UmaClient`.
   * @param attestationType - Type: `number`.
   * @returns Type: `StartSessionStep`.
   */
  constructor(
    protected readonly umaClient: UmaClient,
    private readonly attestationType: AttestationType,
  ) {
    super(umaClient);
  }

  /**
   * afterExecute.
   * @param result - Type: `RequestResult<ToolStartSession>`.
   */
  protected override afterExecute(
    result: RequestResult<Umatypes.Response.Tool.StartSession>,
  ): void {
    /**
     * resVer.
     * @remarks Type: `string`.
     * @defaultValue `this.umaClient.userSession.resVer`
     */
    let resVer = this.umaClient.userSession.resVer;
    if (result.decoded.data?.resource_version) {
      resVer = result.decoded.data.resource_version;
    }
    this.umaClient.updateResVer(resVer);
  }
}
