import alt from '../Alt';
import InventoryActions from '../actions/InventoryActions'

export class InventoryStore {
  constructor() {
    this.bindActions( InventoryActions );

    this.state = {
      items: []
    };
  }

  onAdd(item) {
    this.setState({ items: this.state.items.concat(item) });
  }
  static getItems() {
    return this.getState().items;
  }
}

export default alt.createStore(InventoryStore, 'InventoryStore');
