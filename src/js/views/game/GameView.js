/**
 * Displays the Map, collision and general ingormations
 */

define([
    'underscore',
    'backbone',
    'models/Item',
    'collections/Inventory'
], function (_, Backbone, ItemModel, Inventory) {
    var InventoryView = Backbone.View.extend(
        {
            collection:Inventory
        }
    );
    return InventoryView;
});