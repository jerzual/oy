import { Point } from "pixi.js";
import { nanoid } from "nanoid";

export interface GameState {
	status: "paused" | "playing" | "lost";
	mode: "rogue" | "capture-the-flag" | "last-man-standing" | "deathmatch";
	entities: { [id: number]: EntityState };
	frame: number;
}
export interface LevelState {
	status: "generating" | "loading" | "cached" | "loaded";
}
export interface EntityState {
	id: number;
	position: Point;
	velocity: number;
	direction: Point;
	status:
		| "patrolling"
		| "aiming"
		| "jumping"
		| "running"
		| "sliding"
		| "dying"
		| "dead";
}
export interface HeroState {
	status: "connected" | "offline";
	uuid: string;
	name: string;
	score: number;
	life: number;
	gold: number;
}
export interface AppState {
	status: "starting" | "running";
	route?: string;
	lobby?: LobbyState;
	game?: GameState;
	hero?: HeroState;
}
export interface LobbyState {
	members: unknown[];
}
export interface WorldState {
	members: unknown[];
}

export function getInitialState(): AppState {
	return {
		status: "starting",
		hero: {
			status: "offline",
			uuid: nanoid(),
			name: "Player",
			score: 0,
			life: 12,
			gold: 0,
		},
	};
}
