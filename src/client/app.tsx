import { Store } from "../engine/state/store";
import { World } from "matter-js";
import * as React from "preact"; 
import { Component, h } from "preact";

import { getInitialState, AppState } from "./initialState";
import Layout from "./components/Layout";

export interface AppProps {
  store?: Store<AppState>;
}
/**
 * front-end / client application
 */
export class App extends Component<any, any> {

  private pixiApp: PIXI.Application;

  private matterWorld: World;

  private store: Store<AppState>;

  constructor() {
    super();
    this.store = new Store<AppState>(getInitialState());
    this.store
      .select(state => state.game)
      .subscribe(state => {
        console.log("game state change", state);
      });
    if (typeof window !== 'undefined') {
      const { Application } = require("pixi.js");
      this.pixiApp = new Application();
    }
    this.matterWorld = World.create({});
  }

  initialize(document: Document) {}

  render(props: any) {
    return <Layout title={'OY'}>{props.children}</Layout>;
  }
}

export default App;
