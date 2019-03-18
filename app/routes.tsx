import { render } from "inferno";
import { BrowserRouter, Route, Switch, Link } from "inferno-router";
import Layout from "./components/Layout";

import LobbyScreen from "./containers/LobbyScreen";
import CreditsScreen from "./containers/CreditsScreen";
import GameScreen from "./containers/GameScreen";
import HomeScreen from "./containers/HomeScreen";
import OptionsScreen from "./containers/OptionsScreen";
import JoinScreen from "./containers/JoinScreen";

const Routes = () => (
  <BrowserRouter>
    <Layout>
      <Route path="/" component={HomeScreen} />
      <Route path="/join" component={JoinScreen} />
      <Route path="/lobby" component={LobbyScreen} />
      <Route path="/world/:seed" component={GameScreen} />
      <Route path="/world/:worldSeed/level/:levelSeed" component={GameScreen} />
      <Route path="/options" component={OptionsScreen} />
      <Route path="/credits" component={CreditsScreen} />
    </Layout>
  </BrowserRouter>
);

export default Routes;
