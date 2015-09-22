/**
 * Displays the final score of a Game.
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