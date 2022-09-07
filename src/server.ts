import express from "express";
import { Server , Socket } from "socket.io";
import path from "node:path";
import "reflect-metadata";

import { createServer as createViteServer } from 'vite'

import { Observable, fromEvent, merge } from "rxjs";

export const app = express();

// use vite as a middleware
const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom'
})
// use vite's connect instance as middleware
// if you use your own express router (express.Router()), you should use router.use
app.use(vite.middlewares)
// static files
app.use("/*.*", express.static(path.join(process.cwd(), "dist", "www")));

// start express server.
export const server = app.listen(4000, "0.0.0.0", () => {
  console.log(" [*] Listening on 0.0.0.0:4000");
});
// start websocket endpoint.
const sockets = new Server(server, { path: "/api", serveClient: false });

const connections$ = new Observable(observer => {
  sockets.on("connection", (socket: Socket) => {observer.next(socket)});
});
/*
const close$: Observable<Event> = fromEvent(sockets, "connection");
const open$: Observable<Event> = fromEvent(sockets, "disconnect");
const error$: Observable<Event> = fromEvent(sockjsEndpoint, "error");
const data$: Observable<Event> = fromEvent(sockjsEndpoint, "data");
const sockets$ = merge(close$, open$, error$, data$);
*/
connections$.subscribe(console.log);

sockets.on("connection", (socket: Socket) => {
  console.log(`connection from ${socket.client}`);
  socket.emit("welcome", { worlds: [] });
  socket.on("data", msg => {
    console.log(`data ${msg}`);
  });
  socket.on("disconnect", msg => {
    console.log(`disconnect ${msg}`);
  });
});

