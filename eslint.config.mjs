/* eslint-disable no-underscore-dangle */
/* eslint-disable sort-keys */
import formatjs from 'eslint-plugin-formatjs';
import tsParser from '@typescript-eslint/parser';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
    ],
  },
  ...compat.extends('airbnb'),
  {
    plugins: {
      formatjs,
    },
    rules: {
      'arrow-parens': [
        2,
        'as-needed',
      ],

      'array-bracket-newline': [
        'error',
        {
          multiline: true,
          minItems: 2,
        },
      ],

      'array-element-newline': [
        'error',
        {
          multiline: true,
          minItems: 2,
        },
      ],

      camelcase: 'off',
      'class-methods-use-this': 'off',

      'comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'never',
        },
      ],

      'default-case-last': 'off',
      'default-param-last': 'off',
      'formatjs/enforce-default-message': [
        'error',
        'literal',
      ],
      'formatjs/no-offset': 'error',
      'function-paren-newline': [
        'error',
        'consistent',
      ],
      'import/extensions': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-relative-packages': 'off',
      'import/no-unresolved': 'off',

      'import/order': [
        'error',
        {
          groups: [
            [
              'builtin',
              'external',
            ],
            'internal',
            [
              'parent',
              'sibling',
            ],
          ],
          'newlines-between': 'always',

          pathGroups: [
            {
              group: 'internal',
              pattern: '@/core/**',
              position: 'after',
            },
            {
              group: 'internal',
              pattern: '@/features/**',
              position: 'after',
            },
            {
              group: 'internal',
              pattern: '@/utils/**',
              position: 'after',
            },
            {
              group: 'internal',
              pattern: '@/interfaces/**',
              position: 'after',
            },
            {
              group: 'internal',
              pattern: '@/constants/**',
              position: 'after',
            },
          ],
        },
      ],

      'import/prefer-default-export': 'off',

      'jsx-a11y/anchor-is-valid': [
        'error',
        {
          aspects: [
            'invalidHref',
            'preferButton',
          ],
          components: ['Link'],
          specialLink: [
            'hrefLeft',
            'hrefRight',
          ],
        },
      ],

      'jsx-a11y/label-has-for': [
        2,
        {
          required: {
            some: [
              'nesting',
              'id',
            ],
          },
        },
      ],

      'multiline-ternary': [
        'warn',
        'always-multiline',
      ],

      'newline-per-chained-call': [
        'error',
        {
          ignoreChainWithDepth: 2,
        },
      ],

      'no-duplicate-imports': 'error',

      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxBOF: 0,
          maxEOF: 1,
        },
      ],

      'no-param-reassign': [
        'error',
        {
          props: false,
        },
      ],

      'no-promise-executor-return': 'off',

      'object-curly-newline': [
        'error',
        {
          consistent: true,
          minProperties: 2,
          multiline: true,
        },
      ],

      'object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: false,
        },
      ],

      'operator-linebreak': [
        'error',
        'after',
      ],

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          next: [
            'return',
            'class',
            'export',
            'switch',
            'throw',
            'try',
            'while',
            'for',
            'block',
            'if',
          ],
          prev: '*',

        },
        {
          blankLine: 'always',
          next: '*',
          prev: [
            'const',
            'let',
            'var',
          ],
        },
        {
          blankLine: 'any',
          next: [
            'const',
            'let',
            'var',
          ],
          prev: [
            'const',
            'let',
            'var',
          ],
        },
        {
          blankLine: 'any',
          next: ['export'],
          prev: ['export'],
        },
      ],

      'react/function-component-definition': [0],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/no-did-update-set-state': 'warn',
      'react/jsx-no-useless-fragment': 'warn',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',

      'react/jsx-max-props-per-line': [
        'error',
        {
          maximum: 1,
        },
      ],

      'react/jsx-no-constructed-context-values': 'warn',
      'react/jsx-fragments': [
        'error',
        'syntax',
      ],
      'react/no-unstable-nested-components': 'warn',
      'react/require-default-props': 'off',

      'react/style-prop-object': [
        'error',
        {
          allow: [
            'FormattedNumber',
            'FormattedNumberParts',
            'FormattedRelativeTime',
          ],
        },
      ],

      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: [
            'single',
            'multiple',
            'all',
            'none',
          ],
        },
      ],

      'sort-keys': [
        'error',
        'asc',
        {
          caseSensitive: true,
          natural: true,
        },
      ],
    },
  },
  ...compat.extends(
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ).map(config => ({
    ...config,
    files: [
      '**/*.ts',
      '**/*.tsx',
    ],
  })),
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
    ],

    plugins: {
      stylistic,
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },

    rules: {
      'no-shadow': 'off',
      'no-use-before-define': 'off',
      '@typescript-eslint/await-thenable': 'error',

      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'generic',
        },
      ],

      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/consistent-indexed-object-style': [
        'error',
        'index-signature',
      ],
      'stylistic/member-delimiter-style': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/prefer-optional-chain': 'error',

      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
        },
      ],

      'stylistic/type-annotation-spacing': ['error'],
      'stylistic/object-curly-spacing': [
        'error',
        'always',
      ],
    },
  },
];

export default eslintConfig;
