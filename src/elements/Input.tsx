import { FunctionComponent, h } from "preact";
import * as React from "preact";

import "./Input.scss";
import { useState } from "preact/hooks";

export interface InputAttrs {
	key: string;
	type: string;
	label?: string;
	placeholder?: string;
	max?: number;
	onChange?: (value: string) => void;
}

export const Input: FunctionComponent<InputAttrs> = (props: InputAttrs) => {
	const [value, setValue] = useState("");
	const onChange = (value: string) => {
		setValue(value);
		props.onChange ? props.onChange(value) : null;
	}
	return (
		<label>
			{props.label ? <span>{props.label}</span> : null}
			<input
				id={props.key}
				class="textField"
				value={value}
				placeholder={props.placeholder}		
				onChange={(e) => onChange((e.target as HTMLInputElement).value)}
				onKeyDown={(e) => {onChange((e.target as HTMLInputElement).value)}}
			/>
		</label>
	);
};
