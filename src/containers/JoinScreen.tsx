import { FunctionComponent, h } from "preact";
import * as React from "preact";

import { SeedInput } from "../components/SeedInput";
import { AvatarPreview } from "../components/AvatarPreview";

import "./JoinScreen.scss";
import { useState } from "preact/hooks";

export const JoinScreen: FunctionComponent = () => {
		const [seed, setSeed] = useState("");
		return (
			<div class="joinScreen">
				<AvatarPreview seed={seed} />
				<SeedInput
					seed={seed}
					onChange={setSeed}
					onSubmit={() => {}}
				/>
			</div>
		);
}
