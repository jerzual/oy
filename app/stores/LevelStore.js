import alt from '../Alt'
import LevelActions from '../actions/LevelActions'

class LevelStore {
  constructor() {
    this.bindListeners({
      enterLevel: LevelActions.enter
    });

    this.state = {
      levels: []
    };
  }

  addLevel(level) {
    this.setState({ todos: this.state.levels.concat(level) });
  }
  enterLevel(level){

  }
  exitLevel(level){

  }
}

export default alt.createStore(LevelStore, 'LevelStore');
