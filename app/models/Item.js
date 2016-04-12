
import _ from 'underscore';
import Backbone from 'backbone';


var ItemModel = Backbone.Model.extend({
    url: '',

    initialize: function() {},

    defaults: {
        'name': 'item name',
        //infinite durability
        'durability': -1,

    },

    validate: function(attrs, options) {},

    parse: function(response, options) {
        return response;
    }
});

export default ItemModel;
