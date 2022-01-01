module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:cypress/recommended',
    'plugin:storybook/recommended',
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
  plugins: ['react', '@typescript-eslint', 'cypress'],
  rules: {
    quotes: ['error', 'single'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error']
  }
}
