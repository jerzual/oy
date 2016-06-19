import Seed from '../models/Seed';
//import Tile from '../models/Tile';
//import Item from '../models/Item';
//import Room from '../collections/Room';
import LevelStore from '../stores/LevelStore';
import Level from '../models/Level';

class LevelBuilder {

    constructor(seed) {
        this.currentSeed = new Seed(seed);
        this.levelStore = LevelStore;
    }

    generateEmptyLevel(width, height) {
        this.level = new Level(width, height);
        return this;
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

    build(){
      return this.level;
    }
}

export default LevelBuilder;
