/*global define*/

define([
    'underscore',
    'backbone',
    'rng'
], function (_, Backbone, RNG) {
    'use strict';

    var GameModel = Backbone.Model.extend({
        seed: '',

        initialize: function () {
            this.rng = new RNG(this.get('seed'));
            console.log(rng.seed);
        },

        defaults: {
            seed : randomString(),
            width:32,
            height:32
        },

        validate: function (attrs, options) {
            console.log(attrs);
        },

        parse: function (response, options) {
            return response;
        },
        randomString: function () {
            var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
                randomString = '';
            for (var i = 0; i < 8; i++) {
                var randomPoz = Math.floor(Math.random() * charSet.length);
                randomString += charSet.substring(randomPoz, randomPoz + 1);
            }
            return randomString;
        }
    });

    return GameModel;
});
