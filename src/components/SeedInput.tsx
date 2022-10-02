import { Component, h } from "preact";
import * as React from "preact";

import "./SeedInput.scss";
import { Input, Button } from "../elements";

export interface SeedInputAttributes {
	seed: string;
	onChange: (seed: string) => void;
}

export class SeedInput extends Component<SeedInputAttributes, any> {
	public render(props: any) {
		return (
			<div className="formGroup">
				<Input
					key="seed"
					type="text"
					placeholder="QWERTY42"
					max={8}
					onChange={this.applyChange}
				/>
				<Button type="button">regenerate</Button>
				<Button type="submit">Play</Button>
			</div>
		);
	}
	applyChange(value: string) {
		console.error(value);
	}
}
