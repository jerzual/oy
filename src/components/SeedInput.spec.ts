import SeedInput from "./SeedInput";

describe("SeedInput", () => {
  let seedInput: SeedInput;
  beforeEach(() => {
    seedInput = new SeedInput();
  });
  test("seed input is defined", () => {
    expect(seedInput).toBeDefined();
  });
});
