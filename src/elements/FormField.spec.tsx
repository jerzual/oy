import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test, expect } from "vitest";
import { FormField } from "./FormField";
import { Input } from "./Input";

afterEach(cleanup);

describe("FormField", () => {
	test("links label, hint and error to the input", () => {
		render(
			<FormField label="Name" hint="8 chars max" error="Too long" required>
				<Input />
			</FormField>,
		);
		const input = screen.getByLabelText(/Name/);
		expect(input.getAttribute("aria-invalid")).toBe("true");
		expect(input.hasAttribute("required")).toBe(true);
		const describedBy = input.getAttribute("aria-describedby")?.split(" ") ?? [];
		expect(describedBy.map((id) => document.getElementById(id)?.textContent)).toEqual([
			"8 chars max",
			"Too long",
		]);
	});

	test("uses the provided id", () => {
		render(
			<FormField id="seed" label="Seed">
				<Input />
			</FormField>,
		);
		expect(screen.getByLabelText("Seed").id).toBe("seed");
		expect(screen.getByLabelText("Seed").hasAttribute("aria-invalid")).toBe(false);
	});
});
