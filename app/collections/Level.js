
import _ from 'underscore';
import Backbone from 'backbone';
import TileModel from 'models/Tile';


var Level = Backbone.Collection.extend({
    model: TileModel
});

export default Level;
