import { Store } from "reactive-state";
import { getInitialState, AppState } from "./initialState";
import { Application } from "pixi.js";

/**
 * front-end / client application
 */
export class App {
  // oninit(v: Vnode) {}
  // onbeforeupdate(v: Vnode, o: VnodeDOM) {}
  // oncreate(v: VnodeDOM) {}
  // onupdate(v: VnodeDOM) {}
  // onbeforeremove(v: VnodeDOM) {}
  // onremove(v: VnodeDOM) {}
  private pixiApp: Application;
  private store: Store<AppState>;
  constructor() {
    this.store = Store.create(getInitialState());
    this.store.watch(state => state.game).subscribe(() => {});
    this.pixiApp = new Application();
  }

  initialize(document: Document) {}
}

export default App;
