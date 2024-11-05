import { render } from "@testing-library/preact";
import { SeedInput } from "./SeedInput";
import { describe, test, expect } from "vitest";

describe("SeedInput", () => {
	test("seed input is defined", () => {
	  const {container} = render(SeedInput);
		expect(container).toBeDefined();
	});
});
