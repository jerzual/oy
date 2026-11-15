import { Routes as RouterRoutes, Route } from "react-router";

import { LobbyScreen } from "./containers/LobbyScreen";
import { CreditsScreen } from "./containers/CreditsScreen";
import { GameScreen } from "./containers/GameScreen";
import { HomeScreen } from "./containers/HomeScreen";
import { OptionsScreen } from "./containers/OptionsScreen";
import { JoinScreen } from "./containers/JoinScreen";

export const Routes = () => (
	<RouterRoutes>
		<Route path="/" element={<HomeScreen />} />
		<Route path="/join" element={<JoinScreen />} />
		<Route path="/lobby" element={<LobbyScreen />} />
		<Route path="/world/:seed" element={<GameScreen />} />
		<Route path="/world/:worldSeed/level/:levelSeed" element={<GameScreen />} />
		<Route path="/options" element={<OptionsScreen />} />
		<Route path="/credits" element={<CreditsScreen />} />
	</RouterRoutes>
);
