/*global define*/

import _ from 'underscore';
import Backbone from 'backbone';


var TileModel = Backbone.Model.extend({
    x: 0,
    y: 0,
    initialize: function() {

    },

    defaults: {
        x: 0,
        y: 0,
        color: 'white',
        isInARoom: false,
        isWalkable: true,
        isDeadly: false
    },

    validate: function(attrs, options) {
        console.log(attrs);
    },

    parse: function(response, options) {
        return response;
    }
});

export default TileModel;