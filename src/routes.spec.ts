import Routes from "./routes";

describe("Routes", () => {
  let routes;
  beforeAll(() => {
    routes = Routes;
  });
  it("redirects to menu on empty hash", () => {
    expect(routes).toBeDefined();
  });
  it("redirects to menu on #menu", () => {});
  it("redirects to options on #options", () => {});
  it("redirects to credits on #credits", () => {});
  it("quit/close the app on #quit", () => {});
});
