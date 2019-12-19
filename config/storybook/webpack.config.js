const webpackConfigFn = require('../webpack/webpack.dev.conf');

module.exports = ({ config }) => {
    const webpackConfig = webpackConfigFn({
        entryPoints: {
            app: './src/main.ts'
        },
        mode: 'development',
        tag: '1.0.0'
    });

    return {
        ...webpackConfig,
        entry: config.entry,
        output: config.output,
        plugins: config.plugins
    };
};
