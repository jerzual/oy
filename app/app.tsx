import { Store } from "reactive-state";
import { getInitialState, AppState } from "./initialState";
import { Application } from "pixi.js";
import { World } from "matter-js";
import { Component } from "inferno";
/**
 * front-end / client application
 */
export class App extends Component<any, any> {
  private pixiApp: Application;
  private matterWorld: World;
  private store: Store<AppState>;
  constructor() {
    super();
    this.store = Store.create(getInitialState());
    this.store
      .watch(state => state.game)
      .subscribe(state => {
        console.log("game state change", state);
      });
    this.pixiApp = new Application();
    this.matterWorld = World.create({});
  }

  initialize(document: Document) {}

  render(props: any) {
    return <Layout />;
  }
}

export default App;
