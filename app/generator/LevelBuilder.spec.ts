import LevelBuilder from "../../app/generator/LevelBuilder";

describe("LevelBuilder", () => {
  let levelBuilder;

  beforeAll(() => {
    levelBuilder = new LevelBuilder();
  });
  it("can be instanciated", () => {
    expect(levelBuilder).toBeDefined();
  });

  describe("# generateEmptyLevel()", () => {
    it("should always generate something", () => {
      levelBuilder.build();
    });
  });
});
