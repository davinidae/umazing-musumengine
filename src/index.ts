/**
 * Library entrypoint exports.
 *
 * Note: CLI (`src/cli/index.ts`) and API (`src/api/index.ts`) are standalone entrypoints
 * and should not be re-exported here to avoid side effects (e.g., Commander argv parsing,
 * Express server startup) when consumers import the library.
 */
export * from './lib';
export * from './variables';
