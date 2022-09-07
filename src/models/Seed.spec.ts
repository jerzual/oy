import {describe, expect, it, beforeEach} from "vitest";

import { Seed } from "./Seed";

describe("Seed", () => {
  describe("is instanciable", () => {
    it("takes a string as an argument", () => {
      let seed = new Seed("OY");
      expect(seed).toBeDefined();
    });
    
  });
  describe('when initialized with a seed ABCDEFG', () => {
    let threeFirstResults: number[] = [],
      seed = null;
    beforeEach(function() {
      seed = new Seed('ABCDEFG');
      threeFirstResults = [];
      threeFirstResults.push(seed.random());
      threeFirstResults.push(seed.random());
      threeFirstResults.push(seed.random());
    });
    it('a new Seed with the same string should have same results.', () => {
      seed = new Seed('ABCDEFG');
      let newFirstResults = [];
      newFirstResults.push(seed.random());
      newFirstResults.push(seed.random());
      newFirstResults.push(seed.random());
      expect(newFirstResults).toStrictEqual(threeFirstResults);
      expect(newFirstResults[0]).toEqual(threeFirstResults[0]);
      expect(newFirstResults[1]).toEqual(threeFirstResults[1]);
      expect(newFirstResults[2]).toEqual(threeFirstResults[2]);
    });
  });
});
