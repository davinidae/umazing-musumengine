/**
 * Minimal logger interface for dependency injection.
 */
export interface Logger {
  debug: (...args: any[]) => void;
  info: (...args: any[]) => void;
  warn: (...args: any[]) => void;
  error: (...args: any[]) => void;
  log?: (...args: any[]) => void;
}

/** Options for RuntimeClient construction. */
export type RuntimeClientOptions = ServiceOptions;

/** Common options for long-running services (decrypt/encrypt). */
export interface ServiceOptions {
  logger?: Logger;
  DETERMINISTIC_ENC_SECRET: string;
}
