import { describe, beforeEach, test, expect } from "vitest";
import { JoinScreen } from "./JoinScreen";

describe("JoinScreen", () => {
	describe("Component", () => {
		let joinScreen: JoinScreen;
		beforeEach(() => {
			joinScreen = new JoinScreen();
		});
		test("#view()", () => {
			expect(joinScreen).toBeDefined();
		});
		test("#view()", () => {
			expect(joinScreen).toBeDefined();
		});
	});
});
