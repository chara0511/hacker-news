module.exports = {
  extends: [
    'stylelint-config-recommended',
    'stylelint-config-styled-components',
  ],
  overrides: [
    {
      files: ['**/*.{js,ts,jsx,tsx}'],
      customSyntax: '@stylelint/postcss-css-in-js',
    },
  ],
  rules: {
    'value-no-vendor-prefix': null,
  },
};
