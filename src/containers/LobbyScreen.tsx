import { FunctionalComponent } from "preact";
import { useState, useEffect } from "preact/hooks";
import { getStateCallbacks } from "@colyseus/sdk";

import { getRoom } from "../services/colyseus";
import { css } from "../../styled-system/css";

interface PlayerInfo {
	sessionId: string;
	name: string;
}

export const LobbyScreen: FunctionalComponent = () => {
	const [players, setPlayers] = useState<PlayerInfo[]>([]);
	const room = getRoom();

	useEffect(() => {
		if (!room) return;

		const updatePlayers = () => {
			const list: PlayerInfo[] = [];
			room.state.players.forEach((player: any, key: string) => {
				list.push({ sessionId: key, name: player.name });
			});
			setPlayers(list);
		};

		const $ = getStateCallbacks(room);
		$(room.state).players.onAdd(updatePlayers);
		$(room.state).players.onRemove(updatePlayers);

		updatePlayers();
	}, [room]);

	if (!room) {
		return <div>Not connected. Please join a game first.</div>;
	}

	return (
		<div class={css({ display: "flex", flexDir: "column", gap: "4" })}>
			<h1>Lobby</h1>
			<p>
				Seed: <strong>{room.state.seed}</strong>
			</p>
			<h2>Players ({players.length})</h2>
			<ul>
				{players.map((p) => (
					<li key={p.sessionId}>{p.name}</li>
				))}
			</ul>
		</div>
	);
};
