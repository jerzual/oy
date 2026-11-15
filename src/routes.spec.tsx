import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router";

import { Routes } from "./routes";

describe("Routes", () => {
	test("should render jsx", () => {
		const { container } = render(
			<MemoryRouter>
				<Routes />
			</MemoryRouter>,
		);
		expect(container).toBeDefined();
	});
});
