/**
 * Minimal logger interface for dependency injection.
 */
export type Logger = {
  debug: (...args: unknown[]) => void;
  info: (...args: unknown[]) => void;
  warn: (...args: unknown[]) => void;
  error: (...args: unknown[]) => void;
} & Partial<{
  log: (...args: unknown[]) => void;
}>;

/** Options for RuntimeClient construction. */
export type RuntimeClientOptions = ServiceOptions;

/** Common options for long-running services (decrypt/encrypt). */
export type ServiceOptions = {
  DETERMINISTIC_ENC_SECRET: string;
} & Partial<{
  logger: Logger;
}>;
