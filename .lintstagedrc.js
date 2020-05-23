module.exports = {
  '*.{ts}': () => 'tsc -p tsconfig.json --noEmit',
  'scripts/**/*.js': ['eslint'],
  'src/**/*.ts': ['eslint'],
}
