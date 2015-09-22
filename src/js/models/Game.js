/*global define*/

define([
    'underscore',
    'backbone',
    'rng',
    '../generator/SeedGenerator'
], function (_, Backbone, RNG, SeedGenerator) {
    'use strict';

    var GameModel = Backbone.Model.extend({
        seed: '',

        initialize: function () {
            this.rng = new RNG(this.get('seed'));
            console.log(rng.seed);
        },

        defaults: {
            seed : SeedGenerator.randomSeed(),
            lastPlayDate:new Date(),
            lastPlayDuration:0,
            width:32,
            height:32
        },

        validate: function (attrs, options) {
            console.log(attrs);
        },

        parse: function (response, options) {
            return response;
        }
    });

    return GameModel;
});
