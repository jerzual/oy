import m, { RouteDefs } from "mithril";

import Layout from "./components/Layout";

import LobbyScreen from "./containers/LobbyScreen";
import CreditsScreen from "./containers/CreditsScreen";
import GameScreen from "./containers/GameScreen";
import HomeScreen from "./containers/HomeScreen";
import OptionsScreen from "./containers/OptionsScreen";
import JoinScreen from "./containers/JoinScreen";

export const routes: RouteDefs = {
  "/": {
    render: () => (
      <Layout title="">
        <HomeScreen />
      </Layout>
    ),
  },
  "/join": {
    render: () => (
      <Layout title="join">
        <JoinScreen />
      </Layout>
    ),
  },
  "/game/:seed": {
    render: () => (
      <Layout title="{0}">
        <GameScreen />
      </Layout>
    ),
  },
  "/lobby": {
    render: () => (
      <Layout title="lobby">
        <LobbyScreen />
      </Layout>
    ),
  },
  "/options": {
    render: () => (
      <Layout title="options">
        <OptionsScreen />
      </Layout>
    ),
  },
  "/credits": {
    render: () => (
      <Layout title="credits">
        <CreditsScreen />
      </Layout>
    ),
  },
};

export function bindRoutes(element: HTMLElement = document.body): void {
  // Set up routing by connecting components to routes
  m.route(document.body, "/", routes);
}

export default routes;
