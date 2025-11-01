/**
 * Default logger implementation delegating to console.
 */
import type { Logger } from '../models';

/**
 * Default logger that writes to console. Preserves existing console output behavior.
 */
export const defaultLogger: Logger = {
  debug: (...args: any[]) => console.debug?.(...args) ?? console.log(...args),
  info: (...args: any[]) => console.log(...args),
  warn: (...args: any[]) => console.warn(...args),
  error: (...args: any[]) => console.error(...args),
  log: (...args: any[]) => console.log(...args),
};
