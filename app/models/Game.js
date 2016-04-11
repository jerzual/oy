/*global define*/

import _ from 'underscore';
import Backbone from 'backbone';
import RNG from 'rng';
import SeedGenerator from '../generator/SeedGenerator';


var GameModel = Backbone.Model.extend({
    seed: '',

    initialize: function() {
        this.rng = new RNG(this.get('seed'));
        console.log(rng.seed);
    },

    defaults: {
        seed: SeedGenerator.randomSeed(),
        lastPlayDate: new Date(),
        lastPlayDuration: 0,
        width: 32,
        height: 32
    },

    validate: function(attrs, options) {
        console.log(attrs);
    },

    parse: function(response, options) {
        return response;
    }
});

export default GameModel;
