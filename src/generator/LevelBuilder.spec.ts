import { describe, beforeAll, it, expect } from "vitest";

import { LevelBuilder } from "./LevelBuilder";

describe("LevelBuilder", () => {
	let levelBuilder: LevelBuilder;

	beforeAll(() => {
		levelBuilder = new LevelBuilder("1234");
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
