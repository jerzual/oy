import { Schema, defineTypes, MapSchema } from "@colyseus/schema";

export class Vector2 extends Schema {
	x: number = 0;
	y: number = 0;
}
defineTypes(Vector2, {
	x: "float32",
	y: "float32",
});

export class PlayerState extends Schema {
	name: string = "Player";
	sessionId: string = "";
	position = new Vector2();
	velocity = new Vector2();
	life: number = 12;
	score: number = 0;
	gold: number = 0;
}
defineTypes(PlayerState, {
	name: "string",
	sessionId: "string",
	position: Vector2,
	velocity: Vector2,
	life: "uint8",
	score: "uint16",
	gold: "uint16",
});

export class GameRoomState extends Schema {
	players = new MapSchema<PlayerState>();
	seed: string = "";
	gameMode: string = "freeroam";
}
defineTypes(GameRoomState, {
	players: { map: PlayerState },
	seed: "string",
	gameMode: "string",
});
