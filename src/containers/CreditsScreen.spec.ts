import { describe, beforeEach, test, expect } from "vitest";

import { CreditsScreen } from "./CreditsScreen";

describe("CreditsScreen", () => {
	describe("Component", () => {
		let creditsScreen: CreditsScreen;
		beforeEach(() => {
			creditsScreen = new CreditsScreen();
		});
		test("view()", () => {
			expect(creditsScreen).toBeDefined();
		});
	});
});
