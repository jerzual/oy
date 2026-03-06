import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact({ exclude: [/node_modules/, /src\/server\//] })],
	build: {
		target: "esnext",
	},
});
