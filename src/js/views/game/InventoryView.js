/**
 * Display player information (hearts, gold, items) over the game screen.
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