import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/unit-tests/**/*.test.ts'],
    globals: true,
    coverage: {
      reporter: ['text', 'lcov'],
      include: ['src/common/**/*.ts', 'src/decrypt/common.ts'],
      thresholds: {
        statements: 95,
        branches: 90,
        functions: 95,
        lines: 95,
      },
    },
  },
});
