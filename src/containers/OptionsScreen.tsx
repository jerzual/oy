// OptionsScreen display heart containers and gold over the main game screen.

import type { FC } from "react";

export interface OptionsScreenAttrs {
	type?: string;
}

const inputs: string[] = ["keyboard", "gamepad", "touch"];

export const OptionsScreen: FC<OptionsScreenAttrs> = () => {
	return (
		<form name="options">
			<select>
				{inputs.map((input) => (
					<option key={input} value={input}>
						{input}
					</option>
				))}
			</select>
		</form>
	);
};
