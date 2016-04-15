import alt from '../Alt';
import OptionsActions from '../actions/OptionsActions'

//named export
export class OptionsStore {
    constructor() {
        this.bindActions(OptionsActions);

        this.state = {
            options: []
        };
    }

    onChange(option) {
        this.setState({options: this.state.options.concat(option)});
    }

    onClose() {

    }
    static getOptions() {
        return this.getState().options;
    }
}

//default export
export default alt.createStore(OptionsStore, 'OptionsStore');
