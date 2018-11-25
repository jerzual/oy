const AVATAR_SIZE = 16,
  HAIR_COLORS = [0x333333],
  EYE_COLORS = [0x333333];

class AvatarPainter {
  private pixels: Array<Array<number>> = [];
  private rng: seedrandom.prng;
  constructor({ rng }) {
    this.rng = rng;
    //pixel is a bi-dimensional array of hex colors.
    this.pixels = [];
    //init with black
    for (let x = 0; x < AVATAR_SIZE; x++) {
      this.pixels[x] = [];
      for (let y = 0; y < AVATAR_SIZE; y++) {
        this.pixels[x][y] = 0x000000;
      }
    }
    this.drawPants();
  }
  drawPants() {
    //TODO
  }
  drawBody() {
    //TODO draw body
  }
  drawHead() {
    //TODO draw head
  }
  drawEyes() {
    //TODO draw eyes
  }
  drawHair() {
    //TODO draw hair
  }
  paint(context, width, height) {
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

export default AvatarPainter;
