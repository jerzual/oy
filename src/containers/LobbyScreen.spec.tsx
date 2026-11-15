import { describe, expect, test } from "vitest";
import { LobbyScreen } from "./LobbyScreen";
import { render } from "@testing-library/react";

describe("LobbyScreen", () => {
	test("LobbyScreen", () => {
		const { container } = render(<LobbyScreen />);
		expect(container).toBeDefined();
	});
});
