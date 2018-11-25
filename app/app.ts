import { Store } from "reactive-state";
import { getInitialState, AppState } from "./initialState";

/**
 * front-end / client application
 */
export class App extends PIXI.Application {
  private store: Store<AppState>;
  constructor() {
    super();
    this.store = Store.create(getInitialState());
    this.store.watch(state => state.game).subscribe(() => {});
  }

  initialize(document: Document) {}
}

export default App;
