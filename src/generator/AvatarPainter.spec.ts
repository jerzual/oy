import { Canvas, createCanvas } from "canvas";
import fs from "node:fs";
import { AvatarPainter } from "./AvatarPainter";
import { describe, beforeEach, test, afterEach, expect } from "vitest";

describe("AvatarPainter", () => {
	let canvas: Canvas;
	let avatarPainter: AvatarPainter;
	beforeEach(() => {
		canvas = createCanvas(16, 16);
		const context = canvas.getContext("2d");
		avatarPainter = new AvatarPainter(context as unknown as CanvasRenderingContext2D);
	});
	new Array<string>(26)
		.fill("", 0, 25)
		.map((val, index) => {
			return String.fromCharCode(96 + index);
		})
		.forEach((seed) => {
			test(`generate for seed ${seed}`, () => {
				avatarPainter.withSeed(seed);
				avatarPainter.draw();
				expect(avatarPainter.choices).toBeDefined();
			});
		});
	afterEach(
		() =>
			new Promise((resolve) => {
				const out = fs.createWriteStream(
					`${__dirname}/__generated__/avatar-${Date.now()}.png`,
				);
				const stream = canvas.createPNGStream();
				stream.pipe(out);
				out.on("finish", () => {
					console.log("The PNG file was created.");
					resolve();
				});
			}),
	);
});
