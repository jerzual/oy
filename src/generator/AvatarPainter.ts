import seedrandom from "seedrandom";

const AVATAR_SIZE = 16,
	HAIR_COLORS = [0x333333, 0xe58c00, 0x856d4e],
	EYE_COLORS = [0x333333, 0x000000, 0x2d4353],
	SKIN_COLORS = [0xffc39f, 0xffd640, 0xb8b8b8],
	BODY_COLORS = [0xbf6f12, 0x776286, 0x963127, 0x268d11, 0x5f7b97, 0x6e5a3d],
	PANT_COLORS = [0x343434, 0x3d4856];

function randomFrom(rng: seedrandom.prng, array: number[]) {
	const i = Math.floor(rng.quick() * array.length);
	return array[i];
}
/**
 * Draw the avatar sprite on a 16x16 canvas.
 */
export class AvatarPainter {
	private pixels: Array<Array<number>> = [];
	private rng?: seedrandom.prng;
	private ctx: CanvasRenderingContext2D | null;
	constructor(canvas: HTMLCanvasElement) {
		this.ctx = canvas.getContext("2d");
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
		this.drawHead();
		this.drawArms();
		this.drawEyes();
		this.drawHair();
	}
	drawPants() {}
	drawBody() {
		//TODO draw body
	}
	drawArms() {}
	drawHead() {
		//TODO draw head
	}
	drawEyes() {
		//TODO draw eyes
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
