import { createCanvas } from "canvas";
import fs from "node:fs";
import { AvatarPainter } from "./AvatarPainter";
import { describe, beforeEach, test, afterEach, expect } from "vitest";

describe("AvatarPainter", () => {
	let canvas: any;
	let avatarPainter: AvatarPainter;
	beforeEach(() => {
		canvas = createCanvas(16, 16);
		avatarPainter = new AvatarPainter(canvas);
	});
	["ABCDEFGH", "TITITATA"].forEach((seed) => {
		test(`generate for seed ${seed}`, () => {
			avatarPainter.withSeed(seed);
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
