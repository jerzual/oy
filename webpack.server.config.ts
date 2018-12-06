import path from "path";
import webpack from "webpack";

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "www"),
};

const webpackServerConfig: webpack.Configuration = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.app + "/server.ts",
  },
  mode: "production",
  target: "node",
  output: {
    path: PATHS.build,
    filename: "server.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: /app/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          // disable type checker - we will use it in fork plugin
          // transpileOnly: true,
          configFile: "./tsconfig.server.json",
        },
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json-loader",
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: PATHS.app,
      },
      {
        test: /\.png$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production"),
      },
    }),
    //new ForkTsCheckerWebpackPlugin({
    //  tsconfig: path.join(__dirname, "tsconfig.server.json"),
    // tslint: true,
    //}),
  ],
};

export default webpackServerConfig;
