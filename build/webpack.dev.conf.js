const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rules = require('./utils').assetsLoader(false);

const resolve = dir => path.join(__dirname, dir);

module.exports = {
    entry: {
        app: resolve('../src/main.js')
    },

    output: {
        // 打包到根目录dist文件夹中
        path: resolve('../dist'),
        // 开发环境 静态文件无前缀
        publicPath: '/',
        filename: '[name].js'
    },

    devtool: 'cheap-module-eval-source-map',

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('../src')
        }
    },

    module: {
        rules
    },

    devServer: {
        clientLogLevel: 'warning',
        // historyApiFallback: {
        // rewrites: [
        //     { from: /.*/, to: path.posix.join('/', 'index.html') },
        // ],
        // },
        hot: true,
        contentBase: path.join(__dirname, "../"), // since we use CopyWebpackPlugin.
        compress: false,
        host: 'localhost',
        port: 8000,
        open: true,
        overlay: true
        ? { warnings: false, errors: true }
        : false,
        publicPath: '/',
        proxy: [
            {
                context: ['/api'],
                target: 'http://127.0.0.1:7001',
            }
        ]
        // quiet: false, // necessary for FriendlyErrorsPlugin
        // watchOptions: {
        // poll: true
        // },
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('../index.html')
        })
    ]

}