import alt  from '../alt';

class OptionsActions {
    constructor() {
        this.generateActions('change', 'close');
    }
}

export default alt.createActions(OptionsActions)
