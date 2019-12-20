import * as express from "express";
import * as io from "socket.io";
import * as path from "path";
import * as fs from "fs";

import routes from "./routes";
import * as React from 'preact';

import { render } from "preact-render-to-string";
import { Observable, fromEvent, merge } from "rxjs";
import App from "./client/app";

export const server: express.Express = express();
export const port = process.env.PORT || 3000;

//server.set("views", path.join(process.cwd(), "app/server/views"));
//server.set("view engine", "pug");

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// static files
const browserRoot = path.resolve(__dirname, '../browser');
server.use('/public', express.static(browserRoot));

server.get("/*", (req, res) => {
  const indexFile = fs.readFileSync(path.resolve(browserRoot, 'index.html')).toString();
  // This context object contains the results of the render
  const context = {} as any;
  const wrapper = (
      <App />
  );

  const renderedHTML = indexFile.replace(/\{\{\s*ssr\s*\}\}/, render(wrapper));
  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    res.send(renderedHTML);
  }
});

// start express server.
let Server = server.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
// start websocket endpoint.
const sockets = io(Server, { path: "/api", serveClient: false });

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
  socket.on("action", msg => {
    console.log(`data ${msg}`);
  });
  socket.on("disconnect", msg => {
    console.log(`disconnect ${msg}`);
  });
});

export default Server;

// Used to restart server by fuseBox
export async function shutdown() {
  Server.close();
  Server = undefined;
}
