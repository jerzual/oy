
import Model from '../../app/models/Item'
import {expect} from 'chai'

describe('ItemModel', function() {
  let item;
  beforeEach(()=>{
    item = new Model();
  });
    it('is something', function() {
      expect(item).to.be.an('object');
    });
})
