/**
 * Centralized constants used across the project.
 * @public
 */

/**
 * ASCII secret used to deterministically derive the 32-byte AES-256 key for blob2
 * during development and tests. In production, use a secure runtime secret.
 */
export const DETERMINISTIC_ENC_SECRET = 'co!=Y;(UQCGxJ_n82';
