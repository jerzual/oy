import { describe, beforeEach, it, expect } from "vitest";

import { Tile } from "./Tile";

describe("Tile", function() {
  let tile: Tile;
  beforeEach(() => {
    tile = new Tile(0, 0);
  });
  it("is something", function() {
    expect(tile).toBeDefined();
  });
});
