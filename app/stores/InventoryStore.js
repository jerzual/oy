import alt from '../Alt';
import InventoryActions from '../actions/InventoryActions'

class InventoryStore {
  constructor() {
    this.bindListeners({
      addItem: InventoryActions.pickupItem
    });

    this.state = {
      inventory: []
    };
  }

  addItem(item) {
    this.setState({ inventory: this.state.inventory.concat(item) });
  }
}

export default alt.createStore(InventoryStore, 'InventoryStore');
