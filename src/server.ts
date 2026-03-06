import { defineServer, defineRoom } from "colyseus";
import { WebSocketTransport } from "@colyseus/ws-transport";
import { createServer as createViteServer } from "vite";
import { GameRoom } from "./server/GameRoom";

const transport = new WebSocketTransport();

const vite = await createViteServer({
	server: { middlewareMode: true },
	appType: "custom",
});

const gameServer = defineServer({
	transport,
	rooms: {
		game: defineRoom(GameRoom),
	},
	express: (app) => {
		app.use(vite.middlewares);
	},
	devMode: true,
});

await gameServer.listen(4000, "0.0.0.0");
console.log(" [*] Listening on 0.0.0.0:4000");
