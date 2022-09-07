import preactPlugin from "@preact/preset-vite";
import { defineConfig } from "vitest/config";
import { readFileSync } from "node:fs";

export default defineConfig({
	plugins: [preactPlugin()],
	test: {
		threads: false,
		environment: "jsdom",
		environmentOptions: { jsdom: { html: readFileSync("index.html") } },
	},
});
