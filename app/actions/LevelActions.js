import alt from '../Alt';

export class LevelActions {
    constructor() {
        this.generateActions('enter', 'exit', 'generate');
    }
}

export default alt.createActions(LevelActions)
