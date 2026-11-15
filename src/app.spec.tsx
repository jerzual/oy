import { render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { MemoryRouter } from "react-router";
import { App } from "./app";

describe("App object", () => {
	test("should render without error", () => {
		const { container } = render(
			<MemoryRouter>
				<App />
			</MemoryRouter>,
		);
		expect(container).toBeDefined();
	});
});
