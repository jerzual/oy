/*global define*/

define([
    'underscore',
    'backbone',
    'models/Item'
], function (_, Backbone, ItemModel) {
    'use strict';

    var Inventory = Backbone.Collection.extend({
        model: ItemModel
    });

    return Inventory;
});
