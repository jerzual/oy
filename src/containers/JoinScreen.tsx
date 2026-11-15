import { useState, type FC } from "react";
import { useNavigate } from "react-router";

import { SeedInput } from "../components/SeedInput";
import { AvatarPreview } from "../components/AvatarPreview";
import { joinGame } from "../services/colyseus";

import { css } from "../../styled-system/css";

export const JoinScreen: FC = () => {
	const [seed, setSeed] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async () => {
		await joinGame(seed, seed);
		navigate("/lobby");
	};

	return (
		<div className={css({ display: "flex", flexDir: "column" })}>
			<AvatarPreview seed={seed} />
			<SeedInput seed={seed} onChange={setSeed} onSubmit={handleSubmit} />
		</div>
	);
};
