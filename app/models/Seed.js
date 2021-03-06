import RNG from '../generator/RandomNumberGenerator';

/**
 * Encapsulate a random number generator and a human reedable seed string.
 */
class Seed {

    constructor(seed) {
        this.seedString = seed;
        this.rng = new RNG(this.seedString);
        //this.creationDate = moment().now();
    }
    random(){
        return this.rng.random();
    }
}

export default Seed;
