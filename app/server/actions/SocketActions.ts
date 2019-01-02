import sockjs from "sockjs";
import { Observable } from "rxjs";

import { fromEvent } from "rxjs";

export default (sockjs: sockjs.Connection) => {
  fromEvent(sockjs, "connection");
  fromEvent(sockjs, "data");
  fromEvent(sockjs, "disconnect");
};
