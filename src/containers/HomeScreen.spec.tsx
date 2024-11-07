import { describe, test, expect } from "vitest";

import { HomeScreen } from "./HomeScreen";
import { render } from "@testing-library/preact";

describe("HomeScreen", () => {
	test("should be defined", () => {
		const { container } = render(<HomeScreen />);
		expect(container).toBeDefined();
	});
});
