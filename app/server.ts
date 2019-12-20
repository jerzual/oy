import express from "express";
import io from "socket.io";
import path from "path";

import routes from "./routes";
import { Observable, fromEvent, merge } from "rxjs";

// use a mock DOM so we can run mithril on the server
// browserMock(global);

export const app = express();

app.set("views", path.join(process.cwd(), "app/server/views"));
app.set("view engine", "pug");

// static files
app.use("/*.*", express.static(path.join(process.cwd(), "dist", "www")));

// webpack dev mode

if (process.env.NODE_ENV !== "production") {
  var webpack = require("webpack");
  var webpackConfig = require("../webpack.config");
  var compiler = webpack(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath,
    }),
  );
  app.use(require("webpack-hot-middleware"));
}


// server side rendering
/*
routes.forEach(route => {
  app.get("/", (req, res) =>
    res.render("index", { 
      title: "Hey", 
      message: "Hello there!" 
    }),
  );
});
*/
// start express server.
const server = app.listen(4000, "0.0.0.0", () => {
  console.log(" [*] Listening on 0.0.0.0:4000");
});
// start websocket endpoint.
const sockets = io(server, { path: "/api", serveClient: false });

const connections$ = Observable.create(observer => {
  sockets.on("connection", (socket: io.Socket) => observer.emit(socket));
});
/*
const close$: Observable<Event> = fromEvent(sockets, "connection");
const open$: Observable<Event> = fromEvent(sockets, "disconnect");
const error$: Observable<Event> = fromEvent(sockjsEndpoint, "error");
const data$: Observable<Event> = fromEvent(sockjsEndpoint, "data");
const sockets$ = merge(close$, open$, error$, data$);
*/
connections$.subscribe(console.log);

sockets.on("connection", (socket: io.Socket) => {
  console.log(`connection from ${socket.client}`);
  socket.emit("welcome", { worlds: [] });
  socket.on("data", msg => {
    console.log(`data ${msg}`);
  });
  socket.on("disconnect", msg => {
    console.log(`disconnect ${msg}`);
  });
});

export default server;
