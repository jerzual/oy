import { FunctionComponent } from "preact";

import { Input } from "../elements/Input";
import { Button } from "../elements/Button";
import { css } from "../../styled-system/css";

export interface SeedInputAttributes {
	seed: string;
	onChange: (seed: string) => void;
	onSubmit: () => void;
}

export const SeedInput: FunctionComponent<SeedInputAttributes> = (props: SeedInputAttributes) => {
	return (
		<div class={css({ display: "flex" })}>
			<Input
				key="seed"
				type="text"
				placeholder="QWERTY42"
				max={8}
				label="Enter your name"
				onChange={props.onChange}
			/>
			<Button type="submit" onClick={props.onSubmit}>
				Play
			</Button>
		</div>
	);
};
