import m, { RouteDefs } from "mithril";

import LobbyScreen from "./containers/LobbyScreen";
import CreditsScreen from "./containers/CreditsScreen";
import GameScreen from "./containers/GameScreen";
import HomeScreen from "./containers/HomeScreen";
import OptionsScreen from "./containers/OptionsScreen";
import JoinScreen from "./containers/JoinScreen";

const definitions: RouteDefs = {
  "/": HomeScreen,
  "/join": JoinScreen,
  "/game/:seed": GameScreen,
  "/archive": LobbyScreen,
  "/options": OptionsScreen,
  "/credits": CreditsScreen,
};
// Set up routing by connecting components to routes
m.route(document.body, "/", definitions);

export default definitions;
