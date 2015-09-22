/*global define*/

define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ItemModel = Backbone.Model.extend({
        url: '',

        initialize: function() {
        },

        defaults: {
            'name':'item name',
            //infinite durability
            'durability':-1,

        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

    return ItemModel;
});
