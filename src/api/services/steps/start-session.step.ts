import { RequestResult, StartSessionRequest, StartSessionResponse, StepData } from '../../models';
import { CoreStep } from './core.step';

export class StartSessionStep extends CoreStep<StartSessionRequest, StartSessionResponse> {
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

  public override async execute(): Promise<
    RequestResult<StartSessionResponse> & {
      resVer: string;
    }
  > {
    const response = await super.execute();
    let resVer = this.stepData.resVer;
    if (response.decoded.data?.resource_version) {
      resVer = response.decoded.data.resource_version;
    }
    return {
      ...response,
      resVer,
    };
  }
}
