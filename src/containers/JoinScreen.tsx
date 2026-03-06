import { FunctionComponent } from "preact";
import { route } from "preact-router";
import { useState } from "preact/hooks";

import { SeedInput } from "../components/SeedInput";
import { AvatarPreview } from "../components/AvatarPreview";
import { joinGame } from "../services/colyseus";

import { css } from "../../styled-system/css";

export const JoinScreen: FunctionComponent = () => {
	const [seed, setSeed] = useState("");

	const handleSubmit = async () => {
		await joinGame(seed, seed);
		route("/lobby");
	};

	return (
		<div class={css({ display: "flex", flexDir: "column" })}>
			<AvatarPreview seed={seed} />
			<SeedInput seed={seed} onChange={setSeed} onSubmit={handleSubmit} />
		</div>
	);
};
