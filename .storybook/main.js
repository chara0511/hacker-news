module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  // ?An experimental plugin to run and build Storybooks with Vite
  // TODO: Resolve [vite] Failed to load source map
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config, { configType }) {
    return config;
  },
};
