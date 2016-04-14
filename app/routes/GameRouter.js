import ReactRouter from 'react-router'
import Routes from './Routes';

const GameRouter = ReactRouter.create({
    location : ReactRouter.HashLocation,
    routes : Routes
});
/*
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
*/
export default GameRouter;
