const path = require('path');
const webpack = require('webpack');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'www')
};

module.exports = {
    // Entry accepts a path or an object of entries. We'll be using the
    // latter form given it's convenient with more complex configurations.
    entry: {
        app: PATHS.app + '/main.js'
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ],
        //pixi.js needs some special transform
        postLoaders: [
            {
                include: path.resolve(__dirname, 'node_modules/pixi.js'),
                loader: 'transform?brfs'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                'NODE_ENV': JSON.stringify('production'),
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
};
