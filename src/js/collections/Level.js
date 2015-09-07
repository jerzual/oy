/*global define*/

define([
    'underscore',
    'backbone',
    'models/Tile'
], function (_, Backbone, TileModel) {
    'use strict';

    var Level = Backbone.Collection.extend({
        model: TileModel
    });

    return Level;
});
