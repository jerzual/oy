import * as PouchDB from "pouchdb";
import Store from "reactive-state";
import { App } from "./app";
import SockJS from "sockjs-client";
import * as m from "mithril";
import routes from "./routes";
import { merge, fromEvent, Observable } from "rxjs";

const db = new PouchDB.default("oy");
const sockets = new SockJS(`http://0.0.0.0:8081/api`);
const app = new App();

m.route(document.body, "/", routes);
// instead of sockets.addEventListener :
const close$: Observable<Event> = fromEvent(sockets, "close");
const open$: Observable<Event> = fromEvent(sockets, "open");
const error$: Observable<Event> = fromEvent(sockets, "error");
const message$: Observable<Event> = fromEvent(sockets, "message");

merge(close$, open$, error$, message$).subscribe(value => {
  console.log(value);
});

// hot reload webpack
if (module["hot"]) {
  console.info("HMR enabled");
  /*
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
  })
  */
}
