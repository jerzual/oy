import LevelStore from '../../app/stores/LevelStore';
import {expect} from 'chai';

describe('LevelStore', function() {
  let world;
  before(function(){
   world = new LevelStore();
  })
    it('is a Collection', function() {
      expect(world).to.be.ok;
    });

});
