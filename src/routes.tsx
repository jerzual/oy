import { render } from "preact";
import * as React from "preact";
import Router, { Route, Link } from "preact-router";
import Layout from "./client/components/Layout";

import LobbyScreen from "./client/containers/LobbyScreen";
import CreditsScreen from "./client/containers/CreditsScreen";
import GameScreen from "./client/containers/GameScreen";
import HomeScreen from "./client/containers/HomeScreen";
import OptionsScreen from "./client/containers/OptionsScreen";
import JoinScreen from "./client/containers/JoinScreen";

const Routes = () => (
  <Router>
    <Route path="/" component={HomeScreen} />
    <Route path="/join" component={JoinScreen} />
    <Route path="/lobby" component={LobbyScreen} />
    <Route path="/world/:seed" component={GameScreen} />
    <Route path="/world/:worldSeed/level/:levelSeed" component={GameScreen} />
    <Route path="/options" component={OptionsScreen} />
    <Route path="/credits" component={CreditsScreen} />
  </Router>
);

export default Routes;
