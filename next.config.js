const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')(['@peracto-library/shared'])
const withCSS = require('@zeit/next-css')
const withPWA = require('next-pwa')({
    pwa: {
        disable: process.env.NODE_ENV === 'development',
        dest: 'public',
    },
})

module.exports = withPlugins([withTM, withCSS], {
    cssLoaderOptions: {
        url: false,
    },
})

if (typeof require !== 'undefined') {
    require.extensions['.css'] = (_file) => {}
}
