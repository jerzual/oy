
import GameRouter from '../../app/routes/GameRouter'
import {expect} from 'chai'

describe('GameRouter', function() {
  let router
  before(()=>{
    router = new GameRouter();
  })
    it('redirects to menu on empty hash', function() {
      expect(router).to.be.ok;
    });
    it('redirects to menu on #menu', function() {

    });
    it('redirects to options on #options', function() {

    });
    it('redirects to credits on #credits', function() {

    });
    it('quit/close the app on #quit', function() {

    });
})
