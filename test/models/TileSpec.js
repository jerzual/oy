import Tile from '../../app/models/Tile'
import {expect} from 'chai'

describe('Tile', function () {
    let tile
    before(()=> {
        tile = new Tile({x:0,y:0})
    })
    it('is something', function () {
        expect(tile).to.be.ok
    })
})
