import { describe, test, expect } from "vitest";

import { CreditsScreen } from "./CreditsScreen";
import { render } from "@testing-library/preact";

describe("CreditsScreen", () => {
	describe("Component", () => {
		test("view()", () => {
			const { container } = render(<CreditsScreen />);
			expect(container).toBeDefined();
		});
	});
});
