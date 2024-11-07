// OptionsScreen display heart containers and gold over the main game screen.

import { FunctionalComponent } from "preact";

export interface OptionsScreenAttrs {
	type?: string;
}

const inputs: string[] = ["keyboard", "gamepad", "touch"];

export const OptionsScreen: FunctionalComponent<OptionsScreenAttrs> = () => {
	return (
		<form name="options">
			<select>
				{inputs.map((input) => (
					<option value={input} />
				))}
			</select>
		</form>
	);
};
