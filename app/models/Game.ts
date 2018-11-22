import randomSeed from '../generator/SeedGenerator';
import Seed from './Seed'

class Game {

    constructor() {
        this.seed = new Seed(randomSeed());
        this.creationDate = new Date();
        this.isPlaying = true;
    }
    /**
     * pause game loop
     */
    pause(){

    }
    /**
     * Main game loop
     */
    play(){

    }
    /**
     * Serialize game objets and save them
     */
    save(){

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
