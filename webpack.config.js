const path = require('path');

const PATHS = {
    app: path.join(__dirname, 'example', 'js', 'index.js'),
    build: path.join(__dirname, 'example/build'),
};

module.exports = {
    entry: {
        app: PATHS.app,
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }};
