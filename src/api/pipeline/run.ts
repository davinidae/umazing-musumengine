import { StepResult, StepService, StepPrevResult, StepResultBase } from './types';

export async function runPipeline(steps: StepService[]): Promise<StepResult[]> {
  const results: StepResult[] = [];
  let prev: StepPrevResult | undefined = undefined;
  for (let i = 0; i < steps.length; i++) {
    const service = steps[i];
    const rBase: StepResultBase = await service.execute(prev);
    const r: StepResult = {
      order: i + 1,
      ...rBase,
    };
    results.push(r);
    prev = r;
    // Optional early stop: if a step is skipped or failed without requestB64, downstream may not work
    // For now we continue to let services decide based on prev contents.
  }
  return results;
}
