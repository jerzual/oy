import { test, expect } from "vitest";
import { JoinScreen } from "./JoinScreen";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";

test("should render", () => {
	const { container } = render(
		<MemoryRouter>
			<JoinScreen />
		</MemoryRouter>,
	);
	expect(container).toBeTruthy();
});
