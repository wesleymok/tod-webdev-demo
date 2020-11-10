const tailwind = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
	tailwind(),
]


module.exports = {
    siteUrl: 'https://wesleymok.github.io',
    siteName: 'City Cycles',
    pathPrefix: '/tod-webdev-demo',
    icon: ' ',
    plugins: [],
    css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
}