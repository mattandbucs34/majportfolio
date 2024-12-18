import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      "eslint:recommended-typescript",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "plugin:react-refresh/recommended",
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'quotes': ['error','single', { allowTemplateLiterals: true }],
      'semi': ['error', 'always'],
      'comma-dangle': ['error', {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'react/jsx-curly-brace-presence': ['error', {
        'props': 'always',
        'children': 'never',
        'strings': 'always',
        'classes': 'always',
      }],
    },
  },
)
