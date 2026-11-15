import { render } from "@testing-library/react";
import { OptionsScreen } from "./OptionsScreen";
import { describe, test, expect } from "vitest";

describe("OptionsScreen", () => {
	test("should do something", () => {
		const { container } = render(<OptionsScreen />);
		expect(container).toBeDefined();
	});
});
