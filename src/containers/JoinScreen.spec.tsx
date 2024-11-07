import { test, expect } from "vitest";
import { JoinScreen } from "./JoinScreen";
import { render } from "@testing-library/preact";

test("should render", () => {
  const { container } = render(JoinScreen);
  expect(container).toBeTruthy();
});
