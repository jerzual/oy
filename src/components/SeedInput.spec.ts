import { SeedInput } from "./SeedInput";
import {describe, beforeEach, test, expect } from "vitest";

describe("SeedInput", () => {
  let seedInput: SeedInput;
  beforeEach(() => {
    seedInput = new SeedInput();
  });
  test("seed input is defined", () => {
    expect(seedInput).toBeDefined();
  });
});
