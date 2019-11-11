const path = require('path');
const rm = require('rimraf'); // 删除命令
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const rules = require('./utils').assetsLoader(true);
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // js压缩
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin'); // css优化压缩
const HtmlWebpackPlugin = require('html-webpack-plugin');
require("babel-polyfill")

const resolve = dir => path.join(__dirname, dir);

const config = {
    entry: {
        app: ['babel-polyfill', resolve('../src/main.js')]
    },
    output: {
        // 打包到根目录dist文件夹中
        path: resolve('../dist'),
        // 开发环境 静态文件无前缀
        publicPath: './',
        filename: 'static/js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': resolve('../src')
        }
    },
    module: {
        rules
    },

    plugins: [

        new ExtractTextPlugin({
            filename: 'static/css/[name].[contenthash].css',
            //当使用CommonsChunkPlugin时，在commons块中有被提取的块(来自ExtractTextPlugin.extract)，allChunks必须设置为true
            allChunks: true
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks (module) {
              // any required modules inside node_modules are extracted to vendor
              return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                  path.join(__dirname, '../node_modules')
                ) === 0
              )
            }
          }),
        
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),

        new UglifyJsPlugin({
            uglifyOptions: {
                ie8: true,
                compress: {
                    // 去掉未使用代码 无法访问代码
                    warnings: true,
                    // 详细 https://github.com/mishoo/UglifyJS2/tree/harmony#compress-options
                },
            },
            parallel: true, // 多线程加快压缩
            sourceMap: true,
        }),
        
        // css压缩 优化
        new OptimizeCSSPlugin({
            cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
            canPrint: true
        }),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('../index.html')
        })
    ],

}


rm(resolve('../dist'), (err) => {
    if(err) throw err;

    webpack(config, (err, stats) => {
        if(err) throw err;
        process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
        }) + '\n\n')
    
        if (stats.hasErrors()) {
        console.log('  Build failed with errors.\n')
        // process.exit(1)
        }
    
        // console.log(chalk.cyan('  Build complete.\n'))
        // console.log(chalk.yellow(
        // '  Tip: built files are meant to be served over an HTTP server.\n' +
        // '  Opening index.html over file:// won\'t work.\n'
        // ))
    });

})