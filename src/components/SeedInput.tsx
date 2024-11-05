import { FunctionComponent, h } from "preact";
import * as React from "preact";

import "./SeedInput.scss";
import { Input, Button } from "../elements";

export interface SeedInputAttributes {
	seed: string;
	onChange: (seed: string) => void;
	onSubmit: () => void;
}

export const SeedInput: FunctionComponent<SeedInputAttributes> = (
	props: SeedInputAttributes,
) => {
	return (
		<div className="formGroup">
			<Input
				key="seed"
				type="text"
				placeholder="QWERTY42"
				max={8}
				onChange={props.onChange} 
			/>
			<Button type="submit" onClick={props.onSubmit}>
				Play
			</Button>
		</div>
	);
};
