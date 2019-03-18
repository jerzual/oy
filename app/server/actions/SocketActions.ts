import io from "socket.io";
import { Observable } from "rxjs";

import { fromEvent } from "rxjs";

export default (socket: io.Socket) => {
  fromEvent(socket, "connection");
  fromEvent(socket, "data");
  fromEvent(socket, "disconnect");
};
