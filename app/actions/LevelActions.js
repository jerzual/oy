import alt from '../Alt';

class LevelActions {
    constructor() {
        this.generateActions('enter', 'exit', 'generate');
    }
}

export default alt.createActions(LevelActions)
