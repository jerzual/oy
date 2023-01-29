import { beforeEach, describe, expect, it } from "vitest";
import { TilePainter } from "./TilePainter";

describe("TilePainter", () => {
	let painter: TilePainter;
	beforeEach(() => {
		painter = new TilePainter();
	});
	it("it should be created", () => {
		expect(painter).toBeDefined();
	});
});
