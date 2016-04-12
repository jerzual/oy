
import _ from 'underscore';
import Backbone from 'backbone';
import SavedGamesModel from 'models/SavedGames';


var SavedGamesCollection = Backbone.Collection.extend({
    model: SavedGamesModel
});

export default SavedGamesCollection;
