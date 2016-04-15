import alt  from '../Alt';

class OptionsActions {
    constructor() {
        this.generateActions('change', 'close');
    }
}

export default alt.createActions(OptionsActions)
