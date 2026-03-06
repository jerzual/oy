import { Schema, type, MapSchema } from "@colyseus/schema";

export class Vector2 extends Schema {
	@type("float32") x: number = 0;
	@type("float32") y: number = 0;
}

export class PlayerState extends Schema {
	@type("string") name: string = "Player";
	@type("string") sessionId: string = "";
	@type(Vector2) position = new Vector2();
	@type(Vector2) velocity = new Vector2();
	@type("uint8") life: number = 12;
	@type("uint16") score: number = 0;
	@type("uint16") gold: number = 0;
}

export class GameRoomState extends Schema {
	@type({ map: PlayerState }) players = new MapSchema<PlayerState>();
	@type("string") seed: string = "";
	@type("string") gameMode: string = "freeroam";
}
