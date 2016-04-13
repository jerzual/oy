import alt from '../Alt';
import OptionsActions from '../actions/OptionsActions'

class OptionsStore {
  constructor() {
    this.bindListeners({
      updateOptions: OptionsActions.updateOptions
    });

    this.state = {
      options: []
    };
  }

  updateOption(option) {
    this.setState({ options: this.state.options.concat(option) });
  }
}

export default alt.createStore(OptionsStore, 'OptionsStore');
