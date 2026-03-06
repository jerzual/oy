import { Room, Client } from "@colyseus/core";
import { GameRoomState, PlayerState } from "./schemas";
import { nanoid } from "nanoid";

export class GameRoom extends Room<{ state: GameRoomState }> {
	state = new GameRoomState();
	maxClients = 8;

	onCreate(options: { seed?: string; gameMode?: string }) {
		this.state.seed = options.seed || nanoid(8);
		this.state.gameMode = options.gameMode || "freeroam";

		this.onMessage("chat", (client, message: string) => {
			this.broadcast("chat", {
				from: client.sessionId,
				text: message,
			});
		});
	}

	onJoin(client: Client, options: { name?: string }) {
		const player = new PlayerState();
		player.sessionId = client.sessionId;
		player.name = options.name || "Player";
		this.state.players.set(client.sessionId, player);
	}

	onLeave(client: Client) {
		this.state.players.delete(client.sessionId);
	}

	onDispose() {
		/* cleanup */
	}
}
