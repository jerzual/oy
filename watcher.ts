// webpack and conf
import webpack from "webpack";
import webpackMiddleware from "webpack-hot-middleware";
import config from "./webpack.config";

// load express server
import { app } from "./app/server";

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
const compiler = webpack(config);
// load assets compiled by webpack
app.use(
  webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);
