const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: './js/main.js',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                resourceQuery: /blockType=i18n/,
                loader: '@kazupon/vue-i18n-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader',
                    // {
                    //     loader: 'style-resources-loader',
                    //     options: {
                    //         patterns: [path.resolve(__dirname, './styles/*.less')],
                    //         injector: 'append'
                    //     }
                    // }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        },
        modules: [path.join(__dirname, 'node_modules')]
    },
    resolveLoader: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: 'proxodymets.js'
    }
}
