import { Component, h } from "preact";
import * as React from "preact";

import { SeedInput } from "../components/SeedInput";
import { AvatarPreview } from "../components/AvatarPreview";

import "./JoinScreen.scss";

export interface JoinAttributes {
	seed?: string;
}

export class JoinScreen extends Component<JoinAttributes, any> {
	private seed!: string;
	public render(props: any) {
		this.seed = props.seed;
		return (
			<div class="joinScreen">
				<AvatarPreview seed={props.seed} />
				<SeedInput
					seed={props.seed}
					onChange={(value: string) => (this.seed = value)}
				/>
			</div>
		);
	}
}
