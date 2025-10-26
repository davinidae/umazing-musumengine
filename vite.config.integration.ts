import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/integration-tests/**/*.test.ts'],
    globals: true,
    coverage: {
      reporter: ['text', 'lcov'],
      include: ['src/**/*.ts'],
    },
  },
});
