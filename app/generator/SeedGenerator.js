
import RNG from 'rng-js';
var CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
var MAX_CHARS = 8;

export default class SeedGenerator{
    /**
     * Constructs an 8 character string, made of random alphanumeric characters ([A-Z][0-9]
     * @returns {string} an 8 char alphanumeric string.
     */
    static randomSeed() {
        var randomSeed = '';
        for (var i = 0; i < MAX_CHARS; i++) {
            var randomPoz = Math.floor(Math.random() * CHARSET.length);
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
    static dailyChallengeSeed(date) {
        var day = date ? date : new Date();
        //takes the 10 first char of an iso date : 2015-09-22T09:19:23.111Z becomes 2015-09-22
        var dailySeed = '';
        var rng = new RNG(day.toISOString().substr(0, 10));
        for (var i = 0; i < MAX_CHARS; i++) {
            var randomPoz = Math.floor(rng.random() * CHARSET.length);
            dailySeed += CHARSET.substring(randomPoz, randomPoz + 1);
        }
        return dailySeed;
    }
}
