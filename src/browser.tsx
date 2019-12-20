import { Store } from "./engine/state/store";
import { App } from "./client/app";
import * as io from "socket.io-client";
import { merge, fromEvent, Observable, of } from "rxjs";

import "./browser.scss";
import routes from "./routes";
import * as React from "preact";
import { render } from "preact";
import { switchMap } from "rxjs/operators";

const sockets = io.connect(`http://localhost:3000/api`);
sockets.emit("coucou");
// init
render(<App />, document.getElementById("root"));
// instead of addEventListener :
const close$: Observable<Event> = fromEvent(sockets, "close");
const open$: Observable<Event> = fromEvent(sockets, "open");
const error$: Observable<Event> = fromEvent(sockets, "error");
const data$: Observable<Event> = fromEvent(sockets, "data");
const socket$ = merge(close$, open$, error$, data$);

// document events
const keyDown$: Observable<Event> = fromEvent(document, "keydown");
const keyUp$: Observable<Event> = fromEvent(document, "keyup");
const keyPress$: Observable<Event> = fromEvent(document, "keypress");
const keyboard$ = merge(keyDown$, keyUp$, keyPress$);

const gamepadConnected$: Observable<GamepadEvent> = fromEvent<GamepadEvent>(
  window,
  "gamepadconnected",
);
// const gamepadChange: Observable<> = gamepadConnected$.pipe(switchMap(value => of(value)));
const gamepadDisconnected$: Observable<Event> = fromEvent(
  document,
  "gamepaddisconnected",
);
const gamepad$ = merge(gamepadConnected$, gamepadDisconnected$);

const mouseMove$: Observable<Event> = fromEvent(document, "mousemove");
const mouseEnter$: Observable<Event> = fromEvent(document, "mouseenter");
const mouseLeave$: Observable<Event> = fromEvent(document, "mouseleave");
const mouse$ = merge(mouseMove$, mouseEnter$, mouseLeave$);

// window events
const beforeUnload$: Observable<Event> = fromEvent(document, "beforeunload");
const resize$: Observable<Event> = fromEvent(document, "resize");
const scroll$: Observable<Event> = fromEvent(document, "scroll");
const window$ = merge(beforeUnload$, resize$, scroll$);

// log all the events !
merge(socket$, mouse$, window$, gamepad$, keyboard$).subscribe(event => {
  console.log(`[EVT:${event.type}]`, event);
});

// hot reload webpack
if (module["hot"]) {
  console.info("HMR enabled");
  module["hot"].accept(function() {
    console.log("Accepting the updated module!");
  });
  module["hot"].dispose();
}
