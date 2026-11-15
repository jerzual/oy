import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, test, expect, vi } from "vitest";
import { Modal } from "./Modal";

afterEach(cleanup);

describe("Modal", () => {
	test("is closed when open is false", () => {
		render(
			<Modal open={false} onClose={() => {}} title="Pause">
				content
			</Modal>,
		);
		expect(screen.queryByRole("dialog")).toBeNull();
	});

	test("opens and is labelled by its title", () => {
		render(
			<Modal open onClose={() => {}} title="Pause">
				content
			</Modal>,
		);
		expect(screen.getByRole("dialog", { name: "Pause" })).toBeTruthy();
	});

	test("calls onClose from the close button and the backdrop", () => {
		const onClose = vi.fn<() => void>();
		render(
			<Modal open onClose={onClose} title="Pause">
				content
			</Modal>,
		);
		fireEvent.click(screen.getByRole("button", { name: "Close" }));
		fireEvent.click(screen.getByRole("dialog"));
		fireEvent.click(screen.getByText("content"));
		expect(onClose).toHaveBeenCalledTimes(2);
	});
});
