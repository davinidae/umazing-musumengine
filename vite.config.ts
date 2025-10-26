import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/unit-tests/**/*.test.ts', 'tests/integration-tests/**/*.test.ts'],
    globals: true,
    coverage: {
      reporter: ['text', 'lcov'],
    },
  },
});
