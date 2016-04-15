import SeedGenerator from '../generator/SeedGenerator';
import Seed from './Seed'

class Game {

    constructor() {
        this.seed = new Seed();
    }

}

Game.defaultValues = {
    seed: SeedGenerator.randomSeed(),
    lastPlayDate: new Date(),
    lastPlayDuration: 0,
    width: 32,
    height: 32
};
export default Game;
