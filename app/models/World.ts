import SeedGenerator from "../generator/SeedGenerator";
import Seed from "./Seed";
import Level from "./Level";

/**
 * a world is managed by a server or a client.
 */
class World {
  seed: Seed;
  createdAt: Date;
  isPlaying?: boolean;
  levels: Level[] = [];
  constructor() {
    this.seed = new Seed(SeedGenerator.randomSeed());
    this.createdAt = new Date();
    this.isPlaying = true;
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

export default World;
