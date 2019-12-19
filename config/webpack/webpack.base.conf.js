'use strict';
const path = require('path');
const utils = require('./utils');
const config = require('./config');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

var getUrlLoaders = function(options, isImage) {
    const output = [
        {
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: config.build.assetsPath(options) + (isImage ? 'images/[name].[ext]' : 'stylesheets/fonts/[name].[ext]')
            }
        }
    ];

    // if (options.mode == 'production') {
    //     output.unshift(resolve('loaders/css-rewrite-path.js'));
    // }
    return output;
};

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = function(options) {
    return {
        mode: options.mode,
        context: path.resolve(__dirname, '../'),
        entry: options.entryPoints,
        output: {
            path: path.join(config.build.assetsRoot, config.build.outputFolder(options)),
            filename: config.build.assetsPath(options) + 'javascripts/[name].js'
        },
        resolve: {
            extensions: ['.ts', '.js', '.vue', '.json', '.styl', '.scss'],
            alias: {
                vue$: 'vue/dist/vue.esm.js',
                '@': resolve('src'),
                '@@': resolve('.')
            }
        },
        plugins: [
            new ProgressBarPlugin(),
            new webpack.DefinePlugin({}),
            new VueLoaderPlugin(),
        ],
        optimization: {
            splitChunks: {
                minSize: 100000,
                chunks: 'async',
                cacheGroups: {
                    // commons: {
                    //   chunks: "initial",
                    //   minChunks: 2,
                    //   maxInitialRequests: 5, // The default limit is too small to showcase the effect
                    //   minSize: 0 // This is example is too small to create commons chunks
                    // },
                    vendor: {
                        test: /node_modules/,
                        chunks: 'initial',
                        name: 'vendor',
                        minChunks: 6
                        // priority: 10,
                        // enforce: true
                    }
                }
            }
        },
        module: {
            rules: [
                // {
                //   test: /\.md$/,
                //   loader: 'raw-loader'
                // },
                {
                    test: /\.md$/,
                    use: [
                        {
                            loader: 'html-loader'
                        },
                        {
                            loader: 'markdown-loader'
                        }
                    ]
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            ts: [
                                {
                                    loader: 'babel-loader'
                                },
                                {
                                    loader: 'ts-loader',
                                    options: {
                                        transpileOnly: true
                                    }
                                }
                            ]
                        }
                    }
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: [resolve('src/stories')],
                    include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
                },
                // {
                //     test: /.*stories.*\.tsx?$/,
                //     loaders: [
                //         {
                //             loader: require.resolve('@storybook/addon-storysource/loader'),
                //             options: { parser: 'typescript' }
                //         }
                //     ],
                //     enforce: 'pre'
                // },
                {
                    test: /\.ts$/,
                    use: [
                        {
                            loader: 'babel-loader'
                        },
                        {
                            loader: 'ts-loader',
                            // ts-loader will cache this option and will reuse it whenever ts-loader is called again
                            options: {
                                appendTsSuffixTo: [/\.vue$/],
                                transpileOnly: true
                            }
                        }
                    ],
                    exclude: /node_modules/
                },
                // {
                //   test: /\.scss$/,
                //   use: [
                //     options.mode !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                //     'css-loader',
                //     'postcss-loader',
                //     'sass-loader',
                //     {
                //       loader: 'sass-resources-loader',
                //       options: {
                //         resources: './src/styles/helpers/_helpers.scss'
                //       }
                //     }
                //   ]
                // },
                {
                    test: /\.scss$/,
                    use: [
                        options.mode !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                        {
                            loader: 'sass-resources-loader',
                            options: {

                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        options.mode !== 'production' ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        // 'vue-style-loader',
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: { config: { path: 'config/' } }
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|svg)(\?.*)?$/,
                    use: getUrlLoaders(options, true)
                },
                {
                    test: /\.(gif)(\?.*)?$/,
                    loader: 'url-loader',
                    options: {
                        limit: 100000,
                        name: config.build.assetsPath(options) + 'images/[name].[ext]'
                    }
                },
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    use: getUrlLoaders(options)
                }
            ]
        },
        externals: [
            {
                window: 'window'
            }
        ],
        node: {
            // prevent webpack from injecting useless setImmediate polyfill because Vue
            // source contains it (although only uses it if it's native).
            setImmediate: false,
            // prevent webpack from injecting mocks to Node native modules
            // that does not make sense for the client
            dgram: 'empty',
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
            child_process: 'empty'
        }
    };
};