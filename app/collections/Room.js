/*global define*/

define([
    'underscore',
    'backbone',
    'models/Tile'
], function (_, Backbone, TileModel) {
    'use strict';

    var Room = Backbone.Collection.extend({
        model: TileModel
    });

    return Room;
});
