import HeroStatus from "./HeroStatus";

describe("HeroStatus", () => {
  let heroStatus: HeroStatus;
  beforeEach(() => {
    heroStatus = new HeroStatus();
  });
  test("hero status is defined", () => {
    expect(heroStatus).toBeDefined();
  });
});
