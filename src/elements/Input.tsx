import { FunctionComponent } from "preact";

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
	};
	return (
		<label>
			{props.label ? (
				<span class="flex-1 p-4 border rounded text-white leading-8">{props.label}</span>
			) : null}
			<input
				id={props.key}
				class="flex-1 p-4 border border-black rounded text-white bg-gradient-to-b from-gray-800 to-gray-900 leading-8 shadow-inner"
				value={value}
				placeholder={props.placeholder}
				onChange={(e) => onChange((e.target as HTMLInputElement).value)}
				onKeyDown={(e) => {
					onChange((e.target as HTMLInputElement).value);
				}}
			/>
		</label>
	);
};
