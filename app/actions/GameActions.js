import alt from '../alt';

class GameActions {
    constructor() {
        this.generateActions('jump', 'shoot', 'playerMove');
    }
}

export default alt.createActions(GameActions)
