import { CanvasRenderingContext2D } from "canvas";
import seedrandom from "seedrandom";

const AVATAR_SIZE = 16,
	HAIR_COLORS = [0x333333, 0xe58c00, 0x856d4e],
	EYE_COLORS = [0x232323, 0x333333, 0x000000, 0x2d4353],
	SKIN_COLORS = [0xffc39f, 0xffd640, 0xb8b8b8],
	BODY_COLORS = [0xbf6f12, 0x776286, 0x963127, 0x268d11, 0x5f7b97, 0x6e5a3d],
	PANT_COLORS = [0x343434, 0x3d4856];

const enum EyeType {
	VERTICAL,
	HORIZONTAL,
	BICOLOR,
}

/**
 * pick a random value from an array.
 *
 * @param rng the random seed generator
 * @param array values to choose from
 * @returns
 */
function fromRandom<T>(rng: seedrandom.prng, array: T[]): T {
	const i = Math.floor(rng.quick() * array.length);
	return array[i];
}

/**
 * Converts an hexadecimal int to a string web color value.
 * @param hexInt number in base 16, from 0x000000 to 0xFFFFFF
 * @returns
 */
function getColor(hexInt: number): string {
	return `#${hexInt.toString(16)}`;
}

/**
 * Draw the avatar sprite on a 16x16 canvas.
 */
export class AvatarPainter {
	private pixels: Array<Array<number>> = [];

	private rng!: seedrandom.prng;

	private context: CanvasRenderingContext2D;

	public choices: {
		skinColor?: number;
		eyeColor?: number;
		pantsColor?: number;
		bodyColor?: number;
	} = {};

	/** Initialize with  */
	constructor(context: CanvasRenderingContext2D) {
		this.context = context;
		//pixel is a bi-dimensional array of hex colors.
		this.pixels = [];
		//init with black
		for (let x = 0; x < AVATAR_SIZE; x++) {
			this.pixels[x] = [];
			for (let y = 0; y < AVATAR_SIZE; y++) {
				this.pixels[x][y] = 0x000000;
			}
		}
	}

	withSeed(seed: string) {
		this.rng = seedrandom(seed);
	}

	draw() {
		this.drawPants();
		this.drawBody();
		this.drawArms();
		this.drawHead();
		this.drawEyes();
		this.drawHair();
	}

	drawPants() {
		// chose color
		this.choices.pantsColor = fromRandom(this.rng, PANT_COLORS);
		this.context.fillStyle = getColor(this.choices.pantsColor);
		// draw top of pants
		this.context.fillRect(7, 12, 3, 2);
		// draw left leg
		this.context.fillRect(7, 14, 1, 3);
		// draw right leg
		this.context.fillRect(9, 14, 1, 3);
	}

	drawBody() {
		// pick body color
		this.choices.bodyColor = fromRandom(this.rng, BODY_COLORS);
		this.context.fillStyle = getColor(this.choices.bodyColor);
		// main part of the body
		this.context.fillRect(7, 9, 3, 3);
		// shirt over the pant
		this.context.fillRect(7, 12, 2, 1);
		// lighter part on top
		const ligherBodyColor = this.choices.bodyColor + 0x222222;
		this.context.fillStyle = getColor(ligherBodyColor);
		this.context.fillRect(7, 9, 1, 2);
	}

	drawArms() {}

	drawHead() {
		// draw head
		this.choices.skinColor = fromRandom(this.rng, SKIN_COLORS);
		this.context.fillStyle = getColor(this.choices.skinColor);
		this.context.fillRect(6, 3, 5, 5);
		// draw neck
		const neckColor = this.choices.skinColor - 0x222222;
		this.context.fillStyle = getColor(neckColor);
		this.context.fillRect(8, 8, 1, 1);
	}

	drawEyes() {
		// TODO draw eyes
		this.choices.eyeColor = fromRandom(this.rng, EYE_COLORS);
		this.context.fillStyle = getColor(this.choices.eyeColor);
		const eyeTypes = fromRandom(this.rng, [0, 0, 0, 1, 1, 2]);
		switch (eyeTypes) {
			case 0:
			//break;
			case 1: // bicolor
				this.context.fillRect(6, 5, 1, 2);
				this.context.fillRect(8, 5, 1, 2);
				break;
			case 2: // horizontal
				this.context.fillRect(6, 5, 1, 1);
				this.context.fillRect(8, 5, 2, 1);
				break;
		}
	}

	drawHair() {
		//TODO draw hair
	}

	paint(context: CanvasRenderingContext2D, width: number, height: number) {
		const pixelWidth = width / AVATAR_SIZE,
			pixelHeight = height / AVATAR_SIZE;

		for (let x = 0; x < AVATAR_SIZE; x++) {
			for (let y = 0; y < AVATAR_SIZE; y++) {
				//hex color to string value
				const stringColor = this.pixels[x][y].toString(16);
				//quick left pad with 0
				context.fillStyle = "#" + ("00000" + stringColor).substr(-6, 6);
				context.rect(x * pixelWidth, y * pixelHeight, pixelWidth, pixelHeight);
			}
		}
		return this.pixels;
	}
}
