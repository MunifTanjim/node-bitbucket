module.exports = {
  extends: [
    'standard-with-typescript',
    'plugin:prettier/recommended',
    'prettier/standard',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  rules: {
    '@typescript-eslint/camelcase': 'warn',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/promise-function-async': 'off',
    '@typescript-eslint/require-array-sort-compare': 'off',
    '@typescript-eslint/require-await': 'warn',
    '@typescript-eslint/strict-boolean-expressions': 'off',
  },
}
