import Tile from "./Tile";

class Level {
  tiles: Tile[];
  entities: [];
  items: [];
  constructor(width: number, height: number) {
    this.tiles = [];
    this.entities = [];
    this.items = [];
  }
}

export default Level;
