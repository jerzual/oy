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
  "/lobby": {
    render: () => (
      <Layout title="lobby">
        <LobbyScreen />
      </Layout>
    ),
  },
  "/world/:seed": {
    render: () => (
      <Layout title="{0}">
        <GameScreen />
      </Layout>
    ),
  },
  "/world/:worldSeed/level/:levelSeed": {
    render: () => (
      <Layout title="{0}">
        <GameScreen />
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

export default routes;
