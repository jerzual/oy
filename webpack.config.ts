import path from "path";
import webpack from "webpack";
import autoprefixer from "autoprefixer";

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const devMode = process.env.NODE_ENV !== "production";

console.log(`devMode: ${devMode}`);

const PATHS = {
  app: path.join(__dirname, "app"),
  build: path.join(__dirname, "dist/www"),
  styles: path.join(__dirname, "app/styles/"),
};

const config: webpack.Configuration = {
  // Entry accepts a path or an object of entries. We'll be using the
  // latter form given it's convenient with more complex configurations.
  entry: {
    app: PATHS.app + "/main.ts",
  },
  mode: devMode ? "development" : "production",
  devtool: devMode ? "cheap-module-eval-source-map" : "source-map",
  output: {
    path: PATHS.build,
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".tsx", ".ts", ".json", ".scss"],
    modules: [path.join(__dirname, "app"), path.resolve("node_modules")],
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json-loader",
      },
      {
        test: /\.scss$/,
        loaders: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: devMode,
              localIdentName: "[local]__[hash:base64:5]",
              minimize: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: devMode,
              plugins: () => [
                autoprefixer({
                  browsers: [
                    ">1%",
                    "last 4 versions",
                    "Firefox ESR",
                    "not ie < 9",
                  ],
                }),
              ],
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: devMode,
            },
          },
        ],
      },
      {
        test: /\.png$/,
        loader: "url-loader",
      },
    ],
  },
  devServer: {
    contentBase: "./dist/",
    hot: true,
    port: 3000,
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.WatchIgnorePlugin([/\.js$/, /\.d\.ts$/]),
    new ForkTsCheckerWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
    }),
    new HtmlWebpackPlugin({
      title: "0Y",
    }),
  ],
  node: { Buffer: false },
} as any;

export default config;
