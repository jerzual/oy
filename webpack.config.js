const path = require('path');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'www'),
  styles: path.join(__dirname, 'app/styles/'),
};

module.exports = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.app + '/main.ts',
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
        include: PATHS.style,
      },
      {
        test: /\.png$/,
        loader: 'url-loader',
      },
    ],
  },
};
