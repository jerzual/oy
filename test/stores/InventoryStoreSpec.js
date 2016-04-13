import InventoryStore from '../../app/stores/InventoryStore';
import {expect} from 'chai';
describe('InventoryStore', function() {
  let items;
  before(function(){
   items = new InventoryStore();
  })
    it('is a Collection', function() {
      expect(items).to.be.ok;
    });

});
