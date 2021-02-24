// This is a configuration file for Webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')

// Define the production variable if we're building the application for production
const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
    entry: {    // Define an entrypoint called bundle, starting from src/main.js
        bundle: [path.resolve(__dirname, 'src/main.js')],
    },
    resolve: {  // Support Svelte modules from NPM
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    output: {   // Compiled files (bundle.js and bundle.css) are placed in the public folder
        path: path.resolve(__dirname, 'public'),
        filename: '[name].js',
        chunkFilename: '[name].[id].js'
    },
    module: {   // Load .svelte and .css files.
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true,
                        hotReload: true,
                        dev: true,
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    prod ? MiniCssExtractPlugin.loader : 'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    mode,
    plugins: [  // Loads the dotenv plugin
        new Dotenv(),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        port: 5000
    },
    devtool: prod ? false : 'source-map'
}
