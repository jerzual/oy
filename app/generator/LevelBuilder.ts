import Seed from "../models/Seed";
//import Tile from '../models/Tile';
//import Item from '../models/Item';
//import Room from '../collections/Room';
import Level from "../models/Level";

/**
 * Builds a level from a seed using the Level/Room/Tile models.
 */
class LevelBuilder {
  private level: Level;
  private currentSeed: Seed;
  constructor(private seed?: string, private width = 16, private height = 16) {
    this.currentSeed = new Seed(seed);
    this.level = new Level(width, height);
  }

  placeRoomsInLevel(numberOfRooms) {
    return this;
  }

  digMaze() {
    return this;
  }

  floodFill() {
    return this;
  }

  build() {
    return this.level;
  }
}

export default LevelBuilder;
