import { describe, beforeEach, it, expect } from "vitest";

import { Entity } from "./Entity";

describe("Entity", () => {
  let entity: Entity;
  beforeEach(() => {
    entity = new Entity();
  });
  it("is something", () => {
    expect(entity).toBeDefined();
  });
});
