import alt from '../Alt'
import Tile from '../models/Tile'
import LevelActions from '../actions/LevelActions'

export class LevelStore {
  constructor() {
    this.bindActions(LevelActions);

    this.state = {
      levels: []
    };
  }

  onEnter(level) {
    this.setState({ todos: this.state.levels.concat(level) });
  }
  onExit(level){

  }
  onGenerate(level){

  }
  static getLevels() {
    return this.getState().levels;
  }
}

export default alt.createStore(LevelStore, 'LevelStore');
