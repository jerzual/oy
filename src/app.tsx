import { Store } from "reactive-state";
import { getInitialState, AppState } from "./initialState";
import { Application } from "pixi.js";
import { World } from "matter-js";
import { Component, h, createContext } from "preact";
import { useContext } from "preact/hooks";
import * as React from "preact";
import { Routes } from "./routes";
import "./events";
import { Layout } from "./components/Layout";

/**
 * front-end / client application
 */

const store: Store<AppState> = Store.create(getInitialState());
store
	.watch((state) => state.game)
	.subscribe((state) => {
		console.log("game state change", state);
	});
// const pixiApp = new Application();
// const matterWorld = World.create({});

const State = createContext<Store<AppState>>(store);

export const App = () => {
	return (
		<State.Provider value={store}>
			<Layout>
				<Routes></Routes>
			</Layout>
		</State.Provider>
	);
};
