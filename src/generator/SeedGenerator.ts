import seedrandom from "seedrandom";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const MAX_CHARS = 8;

/**
 * Generates human readable seed.
 */
export class SeedGenerator {
	/**
	 * Constructs an 8 character string, made of random alphanumeric characters ([A-Z][0-9]).
	 * @returns {string} an 8 char alphanumeric string.
	 */
	static randomSeed() {
		let randomSeed = "";
		for (let i = 0; i < MAX_CHARS; i++) {
			const randomPoz = Math.floor(Math.random() * CHARSET.length);
			randomSeed += CHARSET.substring(randomPoz, randomPoz + 1);
		}
		return randomSeed;
	}
	/**
	 * Generates a seed from the current date.
	 * Always the same on a given day.
	 *
	 * @param date optional Date object.
	 * @returns {string} an 8 char alphanumeric string.
	 */
	static dailyChallengeSeed(date = new Date()) {
		// takes the 10 first char of an iso date : 2015-09-22T09:19:23.111Z becomes 2015-09-22
		let dailySeed = "";
		const rng = seedrandom(date.toISOString().slice(0, 10));
		for (let i = 0; i < MAX_CHARS; i++) {
			const randomPoz = Math.floor(rng.double() * CHARSET.length);
			dailySeed += CHARSET.substring(randomPoz, randomPoz + 1);
		}
		return dailySeed;
	}
}
