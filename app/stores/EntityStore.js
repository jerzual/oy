import alt from '../Alt'
import Entity from '../models/Entity'
import EntityActions from '../actions/EntityActions'

export class EntityStore {
  constructor() {
    this.bindActions(EntityActions);
  }
  addTile(){
    this.entities.push(new Entity())
  }
}

export default alt.createStore(EntityStore, 'EntityStore')
