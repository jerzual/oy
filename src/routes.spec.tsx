import { h } from "preact";
import { render } from "@testing-library/preact";
import { describe, beforeAll, afterAll, test, expect } from "vitest";

import { Routes } from "./routes";

describe("Routes", () => {
	test("should render jsx", () => {
		const { container } = render(<Routes />, {});
		expect(container).toBeDefined();
	});
});
