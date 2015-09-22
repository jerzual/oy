/*global define*/

define([
    'rng',
    'models/Tile'
    ],function(RNG,Tile){
    var CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var MAX_CHARS = 8;
return {
    randomString: function () {
        var randomString = '';
        for (var i = 0; i < MAX_CHARS; i++) {
            var randomPoz = Math.floor(Math.random() * CHARSET.length);
            randomString += CHARSET.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    },
    randomDailyChallenge: function(date){
        var randomString = '';
        var day = date ? date : new Date();
        var rng = new RNG(''+day.year + day.month + day.day)
        for (var i = 0; i < MAX_CHARS; i++) {
            var randomPoz = Math.floor(rng.random() * CHARSET.length);
            randomString += CHARSET.substring(randomPoz, randomPoz + 1);
        }

    }
};
});