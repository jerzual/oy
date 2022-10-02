// OptionsScreen display heart containers and gold over the main game screen.

import { Component, h } from "preact";
import * as React from "preact";

import "./OptionsScreen.scss";

export interface OptionsScreenAttrs {
	type?: string;
}

export class OptionsScreen extends Component<OptionsScreenAttrs, any> {
	inputs: string[] = ["keyboard", "gamepad", "touch"];

	public render(props: any) {
		return (
			<form name="options">
				<select>
					{this.inputs.map((input) => (
						<option value={input} />
					))}
				</select>
			</form>
		);
	}
}
