import alt from '../Alt'
import Tile from '../models/Tile'


class RoomStore {
  constructor() {
    this.bindListeners({

    })
  }
  addTile(){
    this.tiles.push(new Tile())
  }
}

export default alt.createStore(RoomStore, 'RoomStore')
