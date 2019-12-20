import * as io from "socket.io";
import { Observable } from "rxjs";
import { Injectable } from "injection-js";

import { fromEvent } from "rxjs";

export default (socket: io.Socket) => {
  fromEvent(socket, "connection");
  fromEvent(socket, "data");
  fromEvent(socket, "disconnect");
};

@Injectable()
export class SocketActions {
  public connection: any;
}