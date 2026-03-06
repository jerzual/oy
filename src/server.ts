import fs from "node:fs";
import { defineServer } from "colyseus";
import { WebSocketTransport } from "@colyseus/ws-transport";
import express from "express";
import appConfig from "./app.config";

const isProd = process.env.NODE_ENV === "production";
const transport = new WebSocketTransport();

const gameServer = defineServer({
	...appConfig.options,
	transport,
	rooms: appConfig.rooms!,
	express: async (app) => {
		if (isProd) {
			app.use(express.static("dist/client", { index: false }));

			const template = fs.readFileSync("dist/client/index.html", "utf-8");
			const ssrEntry = "./server/main.server.js";
			const { default: render } = await import(ssrEntry);

			app.get("*all", async (req, res) => {
				const html = await render(req.originalUrl, template);
				res.status(200).set("Content-Type", "text/html").send(html);
			});
		} else {
			const { createServer } = await import("vite");
			const vite = await createServer({
				server: { middlewareMode: true },
				appType: "custom",
			});
			app.use(vite.middlewares);

			app.get("*all", async (req, res) => {
				const url = req.originalUrl;
				const template = await vite.transformIndexHtml(url, fs.readFileSync("index.html", "utf-8"));
				const { default: render } = await vite.ssrLoadModule("/src/main.server.tsx");
				const html = await render(url, template);
				res.status(200).set("Content-Type", "text/html").send(html);
			});
		}
	},
});

await gameServer.listen(4000, "0.0.0.0");
console.log(` [*] Listening on 0.0.0.0:4000 (${isProd ? "production" : "development"})`);
