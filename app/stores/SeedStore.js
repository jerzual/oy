import alt from '../Alt'
import SeedActions from '../actions/SeedActions'

export class SeedStore {
    constructor() {
        this.bindActions(SeedActions)
        this.seeds = []
    }
    onAddSeed(seed){
      return this.seeds = this.seeds.push(seed);
    }
    onInitializeData(data) {
        for (var key in data) {
            this[key] = data[key];
        }
    }
}

export default alt.createStore(SeedStore, 'SeedStore')
