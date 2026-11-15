import react from "@vitejs/plugin-react";
import { defineConfig, configDefaults } from "vitest/config";
import { readFileSync } from "node:fs";

export default defineConfig({
	plugins: [react({ exclude: [/node_modules/, /src\/server\//] })],
	test: {
		threads: false,
		environment: "jsdom",
		environmentOptions: { jsdom: { html: readFileSync("index.html") } },
		exclude: [...configDefaults.exclude, "e2e/*"],
	},
});
