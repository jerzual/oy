import { SeedGenerator } from "../generator/SeedGenerator";
import { Seed } from "./Seed";
import { Level } from "./Level";
import { GameMode } from "./GameMode.enum";

/**
 * a world is managed by a server or a client;
 * t cntains a suiite of levels, a game mode.
 */
export class World {
	seed: Seed;
	createdAt: Date;
	gameMode: GameMode;
	levels: Level[] = [];
	constructor() {
		this.seed = new Seed(SeedGenerator.randomSeed());
		this.createdAt = new Date();
		this.gameMode = GameMode.FreeRoam;
	}
	/**
	 * pause game loop
	 */
	pause() {}
	/**
	 * Main game loop
	 */
	play() {}
	/**
	 * Serialize game objets and save them
	 */
	save() {}
}
