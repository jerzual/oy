import path from "path";
import webpack from "webpack";
import autoprefixer from "autoprefixer";

import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";

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
  entry: [PATHS.app + "/main.tsx" /*, "webpack-hot-middleware/client"*/],
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
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loaders: [
          
          { 
            loader: "babel-loader",
            options: {
              
            }
          },
          { 
            loader: "ts-loader",
            options: {
              // disable type checker - we will use it in fork plugin
              transpileOnly: true,
            }
          },        ],
      }, {
				test: /\.jsx?$/,                          // all js and jsx files will be processed by
				loader: 'babel-loader',                   // babel-loader
        exclude: /node_modules/   ,               // ignore node_modules
        options: {
        }
        
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
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              sourceMap: devMode,
              plugins: () => [
                autoprefixer(),
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
      "/socket.io": "http://localhost:4000",
    },
  },
  plugins: [
    // new CleanWebpackPlugin(["dist"]),
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
      title: "U0Y",
    }),
  ],
  node: { Buffer: false },
};

export default config;
