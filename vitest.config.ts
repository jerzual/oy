import preactPlugin from "@preact/preset-vite";
import { defineConfig, configDefaults } from "vitest/config";
import { readFileSync } from "node:fs";

export default defineConfig({
	plugins: [preactPlugin()],
	test: {
		threads: false,
		environment: "jsdom",
		environmentOptions: { jsdom: { html: readFileSync("index.html") } },
		exclude: [...configDefaults.exclude, "e2e/*"],
	},
});
