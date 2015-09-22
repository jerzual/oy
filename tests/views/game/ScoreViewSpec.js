/**
 * Displays the Map, collision and general ingormations
 */

define([
    'underscore',
    'backbone',
    'models/Item',
    'collections/Inventory'
], function (_, Backbone, ScoreModel, Scores) {
    var ScoreView = Backbone.View.extend(
        {
            collection:Scores
        }
    );
    return ScoreView;
});