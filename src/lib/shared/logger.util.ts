/**
 * Default logger implementation delegating to console.
 */
import type { Logger } from '../models';

/**
 * Default logger that writes to console. Preserves existing console output behavior.
 */
export const defaultLogger: Logger = {
  debug: (...args: unknown[]) => console.debug?.(...args) ?? console.log(...args),
  info: (...args: unknown[]) => console.log(...args),
  warn: (...args: unknown[]) => console.warn(...args),
  error: (...args: unknown[]) => console.error(...args),
  log: (...args: unknown[]) => console.log(...args),
};
