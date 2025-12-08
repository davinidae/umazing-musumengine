import type { PipelineContext, StepPrevResult, StepResult } from '../models';
import { StepServiceCtor } from '../pipelines';
import { Pipeline } from './pipeline';

/**
 * Represents a per-user server-side session owned by the API.
 *
 * Responsibilities
 * - Hold server-only state: `PipelineContext` (crypto/runtime + upstream config) and the last pipeline step result.
 * - Provide helpers to run a sequence of pipeline services and persist the last step.
 * - Do NOT expose sensitive state to API consumers; only share the opaque `id`.
 * @public
 */
export class UserSession {
  private lastStep?: StepPrevResult;
  private pipeline: Pipeline;

  constructor(
    public readonly id: string,
    public readonly createdAt: number,
    public readonly meta: Record<string, unknown>,
    private readonly ctx: PipelineContext,
  ) {
    this.pipeline = new Pipeline(this.id, this.createdAt, this.meta, this.ctx);
  }

  /**
   * Access the underlying `Pipeline` instance.
   * @returns Pipeline instance.
   */
  getPipeline(): Pipeline {
    return this.pipeline;
  }

  /**
   * Persist the last successful or terminal step of the pipeline.
   * @param step Last step or `undefined`.
   */
  setLastStep(step: StepPrevResult | undefined): void {
    this.lastStep = step;
  }

  /**
   * Retrieve the last step result, used as input for chained pipelines.
   * @returns `StepPrevResult` or `undefined`.
   */
  getLastStep(): StepPrevResult | undefined {
    return this.lastStep;
  }

  /**
   * Convenience wrapper around executePipeline that also saves the last step for chaining.
   * @param services Constructors for services to run, in order.
   * @returns Ordered list of `StepResult` items for the executed pipeline.
   */
  async runPipeline(services: StepServiceCtor[]): Promise<StepResult[]> {
    const results = await this.pipeline.execute(services);
    if (results.length > 0) {
      this.lastStep = results[results.length - 1];
    }
    return results;
  }
}
