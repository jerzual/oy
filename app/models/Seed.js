define('Seed', function () {
    var Seed = function (seed) {
        this.seedString = seed || this.randomString();
        //this.creationDate = moment().now();
    };
    Seed.prototype.randomString = function () {
        var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        var randomString = '';
        for (var i = 0; i < 8; i++) {
            var randomPoz = Math.floor(Math.random() * charSet.length);
            randomString += charSet.substring(randomPoz, randomPoz + 1);
        }
        return randomString;
    };
    var s = new Seed(Seed.randomString());
    alert(s.seedString);
    return Seed;


});