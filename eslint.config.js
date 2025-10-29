// ESLint flat config (ESLint v9+)
// for ESM + TypeScript
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

export default [
  {

    ignores: ['dist/**', 'node_modules/**'],
  },
  js.configs.recommended,
  {

    files: ['**/*.{ts,js}'],
    languageOptions: {

      globals: {

        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
      },
    },
  },
  {

    files: ['**/*.ts'],
    languageOptions: {

      parser: tsParser,
      sourceType: 'module',
      ecmaVersion: 'latest',
    },
    plugins: {

      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },
    rules: {

      ...tsPlugin.configs.recommended.rules,
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {

          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {

    files: ['tests/**/*.ts'],
    languageOptions: {

      globals: {

        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
      },
    },
  },
];
