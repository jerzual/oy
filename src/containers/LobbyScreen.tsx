import { FunctionalComponent } from "preact";

export interface LobbyScreenAttrs {
	type?: string;
}

export const LobbyScreen: FunctionalComponent<LobbyScreenAttrs> = () => {
	return (
		<div>
			<h1>Archive</h1>
		</div>
	);
};
