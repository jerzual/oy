/**
 * Displays the Game canvas.
 */

define([
    'underscore',
    'backbone',
    'models/Game',
    'text!../../templates/game.hbs'
], function (_, Backbone, Game) {
    var GameView = Backbone.View.extend(
        {
            model:Game
        }
    );
    return GameView;
});