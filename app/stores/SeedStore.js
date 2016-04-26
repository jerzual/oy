import alt from '../Alt'
import SeedActions from '../actions/SeedActions'
/**
 * Store played games with their seed, player death cause and run duration.
 */
export class SeedStore {
    constructor() {
        this.bindActions(SeedActions)
        this.seeds = []
        this.selectedSeed = {};
    }
    onAddSeed(seed){
      return this.seeds = this.seeds.push(seed);
    }
    onInitializeData(data) {
        for (var key in data) {
            this[key] = data[key];
        }
    }
    static getSeeds() {
        return this.getState().seeds;
    }
}

export default alt.createStore(SeedStore, 'SeedStore')
