import Tile from "./Tile";

export enum LevelType {
  TestChamber,
  Cellular,
  Dungeon,
  SpelunkyLike,
}

export class Level {
  /** seed used to generate this level */
  seed: string;
  /**
   * tiles/decor.
   */
  tiles: Tile[];
  /** entities (item or monster/players) currently in the level */
  entities: [];
  items: [];
  constructor(width: number, height: number) {
    this.tiles = [];
    this.entities = [];
    this.items = [];
  }
}

