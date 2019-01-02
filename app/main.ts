import Store from "reactive-state";
import { App } from "./app";
import SockJS from "sockjs-client";
import m from "mithril";
import { merge, fromEvent, Observable } from "rxjs";

import "./main.scss";
import routes from "./routes";

const sockets = new SockJS(`http://127.0.0.1:8081/api`);
const app = new App();
// init
m.route.prefix("");
m.route(document.body, "/", routes);
// instead of addEventListener :
const close$: Observable<Event> = fromEvent(sockets, "close");
const open$: Observable<Event> = fromEvent(sockets, "open");
const error$: Observable<Event> = fromEvent(sockets, "error");
const data$: Observable<Event> = fromEvent(sockets, "data");
const socket$ = merge(close$, open$, error$, data$);
// document events
const keyDown$: Observable<Event> = fromEvent(document, "keydown");
const gamepad$: Observable<Event> = fromEvent(document, "gamepadconnected");
const mouseMove$: Observable<Event> = fromEvent(document, "mousemove");
const document$ = merge(keyDown$, gamepad$, mouseMove$);

// window events
const beforeUnload$: Observable<Event> = fromEvent(document, "beforeunload");
const resize$: Observable<Event> = fromEvent(document, "resize");
const scroll$: Observable<Event> = fromEvent(document, "scroll");
const window$ = merge(beforeUnload$, resize$, scroll$);

merge(socket$, document$, window$).subscribe(value => {
  console.log(`[EVT:${value.type}]`);
});

// hot reload webpack
if (module["hot"]) {
  console.info("HMR enabled");
  module["hot"].accept("./routes", function() {
    console.log("Accepting the updated ./routes module!");
    m.redraw();
  });
}
