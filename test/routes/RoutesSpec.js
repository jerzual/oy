
import Routes from '../../app/routes/Routes'
import {expect} from 'chai'

describe('Routes', function() {
  let routes
  before(()=>{
    routes = Routes;
  })
    it('redirects to menu on empty hash', function() {
      expect(routes).to.be.a('function');
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
