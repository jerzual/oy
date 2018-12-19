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
// instead of sockets.addEventListener :
const close$: Observable<Event> = fromEvent(sockets, "close");
const open$: Observable<Event> = fromEvent(sockets, "open");
const error$: Observable<Event> = fromEvent(sockets, "error");
const message$: Observable<Event> = fromEvent(sockets, "message");
// dom events
const keydown$: Observable<Event> = fromEvent(document, "keydown");
const gamepad$: Observable<Event> = fromEvent(document, "keydown");
const mousemove$: Observable<Event> = fromEvent(document, "keydown");

merge(close$, open$, error$, message$).subscribe(value => {
  console.log(value);
});

// hot reload webpack
if (module["hot"]) {
  console.info("HMR enabled");
  module["hot"].accept("./routes", function() {
    console.log("Accepting the updated ./routes module!");
    m.redraw();
  });
}
