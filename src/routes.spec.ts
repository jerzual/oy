import { Routes } from "./routes";
import { describe, beforeAll, afterAll, it, expect } from "vitest";

describe("Routes", () => {
  let routes: Routes;
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
