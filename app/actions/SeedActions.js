import alt from '../Alt'

class SeedActions {
    constructor() {
        this.generateActions('create', 'read', 'delete')
    }
}

export default alt.createActions(SeedActions)
