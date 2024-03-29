import { Component, h } from "preact";
import * as React from "preact";

import "./Input.scss";

export interface InputAttrs {
	key: string;
	type: string;
	placeholder?: string;
	max?: number;
	onChange?: (value: string) => void;
}

export class Input extends Component<InputAttrs, any> {
	public render(props: any) {
		return (
			<label>
				<input
					id={props.key}
					class="textField"
					onChange={(e) => props.onChange((e.target as HTMLInputElement).value)}
				/>
			</label>
		);
	}
}
