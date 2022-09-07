import { Subject } from "rxjs";
// low level actions
export const connectAction = new Subject<any>();
export const disconnectAction = new Subject<any>();
export const joinAction = new Subject<any>();
// send a chat event in the lobby or level
export const chatAction = new Subject<any>();

// sed position and velocity info generated by a client to dispatch to others
export const syncAction = new Subject<any>();