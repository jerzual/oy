
import $ from 'jquery';
import Backbone from 'backbone';


var GameRouter = Backbone.Router.extend({
    routes: {
        "": "menu",
        "game": "game",
        "seed": "enterSeed",
        "games": "savedGames",
        "options": "options",
        "credits": "credits",
        "quit": "quit"
    },
    index: function() {

    },
    game: function() {

    },
    enterSeed: function() {

    },
    savedGames: function() {

    },
    options: function() {

    },
    credits: function() {

    }

});

export default GameRouter;
