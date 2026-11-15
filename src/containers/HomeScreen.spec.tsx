import { describe, test, expect } from "vitest";

import { HomeScreen } from "./HomeScreen";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

describe("HomeScreen", () => {
	test("should be defined", () => {
		const { container } = render(
			<MemoryRouter>
				<HomeScreen />
			</MemoryRouter>,
		);
		expect(container).toBeDefined();
	});
});
