import { FunctionComponent } from "preact";

import { SeedInput } from "../components/SeedInput";
import { AvatarPreview } from "../components/AvatarPreview";

import { useState } from "preact/hooks";
import { css } from "../../styled-system/css";

export const JoinScreen: FunctionComponent = () => {
	const [seed, setSeed] = useState("");
	return (
		<div class={css({ display: "flex", flexDir: "column" })}>
			<AvatarPreview seed={seed} />
			<SeedInput seed={seed} onChange={setSeed} onSubmit={() => {}} />
		</div>
	);
};
