'use strict';
const utils = require('./utils');
const webpack = require('webpack');
const config = require('./config');
const merge = require('webpack-merge');
const path = require('path');
const baseWebpackConfig = require('./webpack.base.conf');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const Router = require('koa-router');
// const convert = require('koa-connect');
// const router = new Router();
// const proxy = require('http-proxy-middleware');
// const proxyOptions = {
//   target: 'https://js.chargebeestatic.com/',
//   changeOrigin: true,
//   pathRewrite: {
//     '^/app-static-assets': '/static/app-static-assets'
//   }
// };

// router.get('*', convert(proxy(proxyOptions)));
// const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// const portfinder = require('portfinder')

module.exports = function (options) {
    const devWebpackConfig = merge(baseWebpackConfig(options), {
        // cheap-module-eval-source-map is faster for development
        devtool: config.dev.devtool,
        output: {
            jsonpFunction: 'webpackDevJsonp'
        },

        plugins: [
            // new webpack.HotModuleReplacementPlugin(),
            // new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
            // new webpack.NoEmitOnErrorsPlugin(),
            // copy custom static assets
            new CopyWebpackPlugin([
                {
                    from: path.resolve(__dirname, '../static'),
                    to: config.dev.assetsSubDirectory,
                    ignore: ['.*']
                }
            ])
        ]
    });
    return devWebpackConfig;

    // module.exports = new Promise((resolve, reject) => {
    //   portfinder.basePort = process.env.PORT || config.dev.port
    //   portfinder.getPort((err, port) => {
    //     if (err) {
    //       reject(err)
    //     } else {
    //       // publish the new Port, necessary for e2e tests
    //       process.env.PORT = port
    //       // add port to devServer config
    //       devWebpackConfig.devServer.port = port

    //       // Add FriendlyErrorsPlugin
    //       devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
    //         compilationSuccessInfo: {
    //           messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
    //         },
    //         onErrors: config.dev.notifyOnErrors
    //         ? utils.createNotifierCallback()
    //         : undefined
    //       }))

    //       resolve(devWebpackConfig)
    //     }
    //   })
    // });
};