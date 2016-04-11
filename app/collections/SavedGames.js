/*global define*/

define([
    'underscore',
    'backbone',
    'models/SavedGames'
], function (_, Backbone, SavedGamesModel) {
    'use strict';

    var SavedGamesCollection = Backbone.Collection.extend({
        model: SavedGamesModel
    });

    return SavedGamesCollection;
});
