const path = require('path')

const aliasPaths = [
    'components',
    'contexts',
    'fakeData',
    'hooks',
    'locales',
    'styles',
    'types',
    'utils',
]

module.exports = {
    stories: ['../src/**/__stories/*.stories.@(ts|tsx|js|jsx|mdx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-links'],
    webpackFinal: async (config) => {
        config.resolve.alias = {
            ...aliasPaths.reduce((aliases, alias) => {
                aliases[`${alias}`] = path.resolve(__dirname, `../src/${alias}`)
                return aliases
            }, {}),
        }

        return config
    },
    babel: async (options) => ({
        ...options,
        plugins: [
            ['@babel/plugin-proposal-decorators', { legacy: true }],
            ['@babel/plugin-proposal-class-properties', { loose: true }],
            ['@babel/plugin-proposal-private-methods', { loose: true }],
        ],
    }),
}
