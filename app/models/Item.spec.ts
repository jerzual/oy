import Model from "../../app/models/Item";

describe("ItemModel", () => {
  let item;
  beforeEach(() => {
    item = new Model();
  });
  it("is something", () => {
    expect(item).toBeDefined();
  });
});
