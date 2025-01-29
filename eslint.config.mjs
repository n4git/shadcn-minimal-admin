import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ...stylistic.configs.customize(),
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ignores: ['src/shadcn/**/*'],
    rules: {
      'no-multi-spaces': 'warn',
      'no-trailing-spaces': 'warn',
      'semi': ['warn', 'always'],
      'quotes': ['warn', 'single'],
      'eol-last': ['warn', 'always'],
      'brace-style': ['warn', '1tbs'],
      'padded-blocks': ['warn', 'never'],
      'space-in-parens': ['warn', 'never'],
      'comma-dangle': ['warn', 'always-multiline'],
      'comma-spacing': ['warn', { 'before': false, 'after': true }],
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'object-curly-spacing': ['warn', 'always'],
      'object-curly-newline': ['warn', {
        'ObjectExpression': { 'multiline': true, 'minProperties': 3 },
        'ObjectPattern': { 'multiline': true, 'minProperties': 3 },
        'ImportDeclaration': { 'multiline': true, 'minProperties': 5 },
        'ExportDeclaration': { 'multiline': true, 'minProperties': 5 },
      }],

      '@stylistic/indent': ['warn', 2, { SwitchCase: 1 }],

      'react/jsx-max-props-per-line': ['warn', { 'maximum': 1, 'when': 'always' }],
      'react/jsx-first-prop-new-line': ['warn', 'multiline'],
      'react/jsx-closing-bracket-location': ['warn', 'tag-aligned'],
    },
  },
];

export default eslintConfig;
