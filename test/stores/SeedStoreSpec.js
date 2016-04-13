import SeedStore from '../../app/stores/SeedStore'
import expect from 'chai'

describe('SeedStore', function () {
  let seedStore
  before(() => {
    seedStore = new SeedStore()
  })
  it('is a Collection', function () {
    expect(seedStore).to.be.truthy
  })
})
