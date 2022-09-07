import { describe,it,expect } from "vitest";

import { SeedGenerator } from './SeedGenerator';

describe('SeedGenerator', () => {
  it('provides a randomSeed method', () => {
    expect(SeedGenerator.randomSeed).toBeDefined();
  });

  it('provides a dailyChallengeSeed method', () => {
    expect(SeedGenerator.dailyChallengeSeed).toBeDefined();
  });

  describe('when randomSeed() is called', () => {
    const seed = SeedGenerator.randomSeed();
    it('should return an 8 char string', () => {
      expect(seed).toMatch(/^(.*){8}$/);
    });
    it('should only contains alphanumeric chars', () => {
      expect(seed).toMatch(/^([A-Z]|[0-9]){8}$/);
    });
  });
  describe('when dailyChallengeSeed() is called without date', () => {
    var seed = SeedGenerator.dailyChallengeSeed();

    it('should return an 8 char string', () => {
      expect(seed).toMatch(/^(.*){8}$/);
    });

    it('should only contains alphanumeric chars', () => {
      expect(seed).toMatch(/^([A-Z]|[0-9]){8}$/);
    });

    it('should return the same string as if given the date of the day.', () => {
      var date = new Date();
      expect(seed).toEqual(SeedGenerator.dailyChallengeSeed(date));
    });
  });
});
