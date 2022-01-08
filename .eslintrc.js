module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:storybook/recommended',
    'plugin:cypress/recommended',
    'plugin:node/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'node', 'cypress'],
  rules: {
    'no-console': 'error',
    quotes: ['error', 'single'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'node/prefer-global/process': ['error', 'always'],
    'node/no-unpublished-require': 0,
    'node/no-unpublished-import': 0,
    'node/no-missing-import': [
      'error',
      {
        allowModules: [],
        resolvePaths: ['/path/to/a/modules/directory'],
        tryExtensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.node']
      }
    ],
    'node/no-unsupported-features/es-syntax': [
      'error',
      {
        ignores: ['modules']
      }
    ],
    'cypress/no-assigning-return-values': 'error',
    'cypress/no-unnecessary-waiting': 'error',
    'cypress/assertion-before-screenshot': 'warn',
    'cypress/no-force': 'warn',
    'cypress/no-async-tests': 'error',
    'cypress/no-pause': 'error'
  }
}
