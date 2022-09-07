import {Tile} from "./Tile";

describe("Tile", function() {
  let tile;
  beforeEach(() => {
    tile = new Tile(0, 0);
  });
  it("is something", function() {
    expect(tile).toBeDefined();
  });
});
