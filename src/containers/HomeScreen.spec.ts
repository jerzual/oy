import { describe, test, expect, beforeEach } from "vitest";

import {HomeScreen} from "./HomeScreen";

describe("HomeScreen", () => {
  let homeScreen: HomeScreen;
  beforeEach(() => {
    homeScreen = new HomeScreen();
  })
  test("should be defined", () => {
    expect(homeScreen).toBeDefined()
  });
});
