import { render } from "@testing-library/react";
import { SeedInput } from "./SeedInput";
import { describe, test, expect } from "vitest";

describe("SeedInput", () => {
	test("seed input is defined", () => {
		const { container } = render(<SeedInput seed="" onChange={() => {}} onSubmit={() => {}} />);
		expect(container).toBeDefined();
	});
});
