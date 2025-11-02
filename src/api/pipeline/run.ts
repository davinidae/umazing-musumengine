import { StepResult, StepService, StepPrevResult, StepResultBase } from './types';

export async function runPipeline(steps: StepService[]): Promise<StepResult[]> {
  const results: StepResult[] = [];
  let prev: StepPrevResult | undefined = undefined;
  for (let i = 0; i < steps.length; i++) {
    const service = steps[i];
    try {
      const rBase: StepResultBase = await service.execute(prev);
      const r: StepResult = {
        order: i + 1,
        ...rBase,
      };
      results.push(r);
      prev = r;
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      const stack = err instanceof Error && typeof err.stack === 'string' ? err.stack : undefined;
      const name: string = (service as any)?.name ?? service.constructor?.name ?? 'unknown';
      const endpoint: string = (service as any)?.endpoint ?? 'unknown';
      const r: StepResult = {
        order: i + 1,
        name,
        endpoint,
        framing: 'length-prefixed',
        skipped: true,
        error: message,
        errorStack: stack,
        note: 'pipeline stopped due to error',
      };
      results.push(r);
      // Stop executing subsequent steps on error
      break;
    }
  }
  return results;
}
