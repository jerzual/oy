import RoomStore from '../../app/stores/RoomStore'
import { expect } from 'chai'

describe('RoomStore', () => {
  let rooms
  before(() => {
    rooms = new RoomStore()
  })
  it('is a Collection', () => {
    expect(rooms).to.be.ok
  })
})
