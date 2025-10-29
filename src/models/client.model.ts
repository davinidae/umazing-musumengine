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
export interface RuntimeClientOptions {
  logger?: Logger;
}

/** Common options for long-running services (decrypt/encrypt). */
export interface ServiceOptions {
  logger?: Logger;
}
