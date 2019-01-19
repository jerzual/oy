import { Store } from "reactive-state";
import { Subject } from "rxjs";
import { take, map } from "rxjs/operators";

export const serverAction = new Subject();

export type GameType =
  | "freeroam"
  | "storymode"
  | "deathmatch"
  | "test-chamber"
  | "capture-the-flag"
  | "team-deathmach";

export interface WorldState {
  seed: string;
  levels?: LevelState[];
  gameType: GameType;
}
export interface LevelState {
  seed: string;
  entities: EntityState[];
}
export interface EntityState {
  id: string;
}
export interface ClientState {
  id: string;
  lastUpdate?: number;
}
export interface WorldState {}
// The state for our example app
interface ServerState {
  clients?: { [id: string]: ClientState };
  worlds?: { [id: string]: WorldState };
}

const initialState: ServerState = {
  clients: {},
  worlds: {},
};

const store = Store.create(initialState);

// The .select() function returns an Observable that emits every state change, so we can subscribe to it
store
  .select()
  .subscribe(newState => console.log("STATE:", JSON.stringify(newState)));

// the select() observable always caches the last emitted state, so we will immediately print our inital state:
// [CONSOLE.LOG]: STATE: {"counter":0}

// use a RxJS Subjects as an action
export interface SockAction {}
// connection
const enterAction: Subject<SockAction> = new Subject<SockAction>();
// join lobby with seed filled.
const joinAction = new Subject<ServerState>();
// disconnection
const leaveAction = new Subject<ServerState>();

// A reducer is a function that takes a state and an optional payload, and returns a new state
function clientsReducer(state, payload) {
  return { ...state, counter: state.counter + payload };
}

store.addReducer(enterAction, (state, payload) => {
  return { ...state };
});
store.addReducer(joinAction, (state, payload) => {
  return { ...state };
});
store.addReducer(leaveAction, (state, payload) => {
  return { ...state };
});
