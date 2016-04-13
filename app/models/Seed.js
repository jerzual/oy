import RNG from 'rng-js';

/**
 * Encapsulate rng-js.
 */
class Seed {

    constructor(seed) {
        this.seedString = seed || this.randomString();
        this.rng = new RNG(this.seedString);
        //this.creationDate = moment().now();
    }
    random(){
        return this.rng.random();
    }
}

export default Seed;
