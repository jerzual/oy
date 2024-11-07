import { FunctionComponent } from "preact";

import { SeedInput } from "../components/SeedInput";
import { AvatarPreview } from "../components/AvatarPreview";

import { useState } from "preact/hooks";

export const JoinScreen: FunctionComponent = () => {
		const [seed, setSeed] = useState("");
		return (
			<div class="flex flex-col">
				<AvatarPreview seed={seed} />
				<SeedInput
					seed={seed}
					onChange={setSeed}
					onSubmit={() => {}}
				/>
			</div>
		);
}
