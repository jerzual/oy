import alt from '../Alt';

export class LegalActions {
    constructor() {
        this.generateActions('illegalPet');
    }
}

export default alt.createActions(LegalActions);