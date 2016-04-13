import alt from '../Alt'
import LevelActions from '../actions/LevelActions'

class LevelStore {
  constructor() {
    this.bindListeners({
      enterLevel: LevelActions.enterLevel
    });

    this.state = {
      levels: []
    };
  }

  updateTodo(level) {
    this.setState({ todos: this.state.levels.concat(level) });
  }
}

export default alt.createStore(LevelStore, 'LevelStore');
