/*global define*/

define([
    'underscore',
    'backbone',
    'rng'
], function (_, Backbone, RNG) {
    'use strict';

    var TileModel = Backbone.Model.extend({
        x: 0,
        y:0,
        initialize: function () {
            this.rng = new RNG(this.get('seed'));
            console.log(rng.seed);
        },

        defaults: {
            x: 0,
            y:0,
            color:'white',
            isInARoom:false,
            isWalkable:true,
            isDeadly:false
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