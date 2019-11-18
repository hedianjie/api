const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {


    assetsLoader(env=false) { // false -> 开发环境 true -> 正式环境

        let sourceMap = true;

        const cssBase = {
            loader: 'css-loader',
            options: {
                sourceMap
            }
        };
        const postCss = {
            loader: 'postcss-loader',
            options: {
                sourceMap
            }
        }

        const generateLoaders = (loader, loaderOptions) => {
            const loaders = [cssBase, postCss];

            if(loader) {
                loaders.push({
                    loader: loader + '-loader',
                    options: Object.assign({}, loaderOptions, {
                        sourceMap
                    })
                })
            }

            if(env) {
                return ExtractTextPlugin.extract({
                    use: loaders,
                    fallback: 'vue-style-loader',
                    publicPath: '../../'
                })
            }
            else {
                return ['vue-style-loader'].concat(loaders)
            }

        }

        const styleLoaders = () => {

            let loaders = [];

            const obj = {
                css: generateLoaders(),
                postcss: generateLoaders(),
                sass: generateLoaders('sass'),
                scss: generateLoaders('sass'),
                less: generateLoaders('less'),
                styl: generateLoaders('stylus'),
                stylus: generateLoaders('stylus')
            }

            for(var k in obj) {
                if(obj.hasOwnProperty(k)) {
                    loaders.push({
                        test: new RegExp('\\.' + k + '$'),
                        use: obj[k]
                    })
                }
            }

            return loaders
        }

        const js = {
            test: /\.js/,
            use: ['babel-loader'],
            include: [resolve('../src'), resolve('node_modules/webpack-dev-server/client')]
        };

        const pic = {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'static/img/[name].[hash:7].[ext]'
            }
        };

        const meida = {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'static/media/[name].[hash:7].[ext]'
            }
        };

        const font = {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'static/font/[name].[hash:7].[ext]'
            }
        };

        const vue = {
            test: /\.vue/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: generateLoaders(),
                    postcss: generateLoaders(),
                    sass: generateLoaders('sass'),
                    scss: generateLoaders('sass'),
                    less: generateLoaders('less'),
                    styl: generateLoaders('stylus'),
                    stylus: generateLoaders('stylus')
                },
                cssSourceMap: sourceMap,
                cacheBusting: true,
                transformToRequire: {
                    video: ['src', 'poster'],
                    source: 'src',
                    img: 'src',
                    image: 'xlink:href'
                }
            }
        }

        return styleLoaders().concat([
            js, vue, pic, meida, font
        ]);

    }
}