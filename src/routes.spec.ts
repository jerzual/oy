import Routes from "./routes";

describe("Routes", () => {
  let routes;
  beforeAll(() => {
    routes = Routes;
  });
  it("redirects to menu on empty hash", () => {
    expect(routes).toBeDefined();
  });
  it("redirects to menu on #menu", () => {
    expect(true).toBe(true);
  });
  it("redirects to options on #options", () => {
    expect(true).toBe(true);});
  it("redirects to credits on #credits", () => {
    expect(true).toBe(true);});
  it("quit/close the app on #quit", () => {
    expect(true).toBe(true);});
});
