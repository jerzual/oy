import Seed from '../models/Seed';
//import Tile from '../models/Tile';
//import Item from '../models/Item';
//import Room from '../collections/Room';
import Level from '../collections/Level';


class LevelBuilder{
    constructor(seed){
      this.currentSeed = new Seed(seed);
    }
    generateEmptyLevel(width, height) {
      this.levels.push(new Level(width,height));
    }
    placeRoomsInLevel() {

    }
    digMaze() {

    }
    floodFill() {

    }
}

export default LevelBuilder;
