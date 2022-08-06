module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
    amd: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:sonarjs/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'better-styled-components',
    'eslint-plugin-react',
    'prettier',
    'react-hooks',
    'react',
    'simple-import-sort',
    'sonarjs',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    'better-styled-components/sort-declarations-alphabetically': 2,
    'no-shadow': 'off',
    'no-undef': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'comma-dangle': 0,
    camelcase: 'off',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-console': 2,
    'no-debugger': 2,
    'sonarjs/no-duplicate-string': ['error', 5],
    'no-use-before-define': 'off',
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/destructuring-assignment': [0],
    'react/forbid-prop-types': [0],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-indent': [0],
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/prefer-stateless-function': [0],
    'react/react-in-jsx-scope': 'off',
    'react/sort-comp': [0],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-imports': 'off',
    'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
    semi: 'off',
  },
}
