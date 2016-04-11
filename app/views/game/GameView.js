/**
 * Displays the Game canvas.
 */

import _ from 'underscore';
import Backbone from 'backbone';
import Game from 'models/Game';
import 'text!../../templates/game.hbs';
var GameView = Backbone.View.extend({
    model: Game
});
export default GameView;