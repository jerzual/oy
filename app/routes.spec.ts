import Routes from './routes';

describe('Routes', function() {
  let routes;
  beforeAll(() => {
    routes = Routes;
  });
  it('redirects to menu on empty hash', function() {
    expect(routes).toBeDefined();
  });
  it('redirects to menu on #menu', function() {});
  it('redirects to options on #options', function() {});
  it('redirects to credits on #credits', function() {});
  it('quit/close the app on #quit', function() {});
});
