import { FunctionalComponent } from "preact";

export interface GameScreenAttrs {
	type?: string;
}

export const GameScreen: FunctionalComponent<GameScreenAttrs> = () => {
	return (
		<div class="gameScreen">
			<canvas id="game" />
		</div>
	);
};
