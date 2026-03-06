import config, { type ConfigOptions } from "@colyseus/tools";
import { defineRoom } from "@colyseus/core";
import { GameRoom } from "./server/GameRoom";

export default config({
	rooms: {
		game: defineRoom(GameRoom),
	},
	options: {
		devMode: true,
	},
});
