import { RequestResult, StepData } from '../../models';
import { CoreStep } from './core.step';

export class StartSessionStep extends CoreStep<
  Umatypes.Request.ToolStartSession,
  Umatypes.Response.ToolStartSession
> {
  endpoint = 'tool/start_session';

  getRequestBody() {
    return {
      attestation_type: this.attestationType,
      device_token: null,
    };
  }

  constructor(
    protected readonly stepData: StepData,
    private readonly attestationType: number,
  ) {
    super(stepData);
  }

  protected override async afterExecute(result: RequestResult<Umatypes.Response.ToolStartSession>) {
    let resVer = this.stepData.resVer;
    if (result.decoded.data?.resource_version) {
      resVer = result.decoded.data.resource_version;
    }
    this.stepData.umaclient.updateResVer(resVer);
  }
}
