import { render } from "@testing-library/preact";
import { describe, test, expect } from "vitest";
import { App } from "./app";

describe("App object", () => {
	test("should render without error", () => {
		const { container } = render(<App />, {});
		expect(container).toBeDefined();
	});
});
