import type { FC } from "react";

export interface GameScreenAttrs {
	type?: string;
}

export const GameScreen: FC<GameScreenAttrs> = () => {
	return (
		<div className="gameScreen">
			<canvas id="game" />
		</div>
	);
};
