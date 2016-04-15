import alt from '../Alt';

class EntityActions {
    constructor() {
        this.generateActions('jump', 'shoot', 'move', 'hit', 'collide', 'death', 'birth');
    }
}

export default alt.createActions(EntityActions)
