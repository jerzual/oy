import * as React from "preact"
import { Router, Route} from "preact-router";
import { default as AsyncRoute } from "preact-async-route";

import {Layout} from "./components/Layout";

import {LobbyScreen} from "./containers/LobbyScreen";
import {CreditsScreen} from "./containers/CreditsScreen";
import {GameScreen} from "./containers/GameScreen";
import {HomeScreen} from "./containers/HomeScreen";
import {OptionsScreen} from "./containers/OptionsScreen";
import {JoinScreen} from "./containers/JoinScreen";

export const Routes = () => (
  <Router>
    <Layout title="test">
      <Route path="/" component={HomeScreen} />
      <Route path="/join" component={JoinScreen} />
      <Route path="/lobby" component={LobbyScreen} />
      <Route path="/world/:seed" component={GameScreen} />
      <Route path="/world/:worldSeed/level/:levelSeed" component={GameScreen} />
      <Route path="/options" component={OptionsScreen} />
      <Route path="/credits" component={CreditsScreen} />
    </Layout>
  </Router>
);

