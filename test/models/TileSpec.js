
import Tile from '../../app/models/Tile'
import {expect} from 'chai'

describe('Tile', function() {
  let tile
  before(()=>{
    tile = new Tile()
  })
    it('is something', function() {
      expect(tile).to.be.ok
    })
})
