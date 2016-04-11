/**
 * Display player information (hearts, gold, items) over the game screen.
 */

define([
    'underscore',
    'backbone',
    'models/Item',
    'collections/Inventory',
    'text!../../templates/inventory.hbs'
], function (_, Backbone, Item, Inventory) {
   var InventoryView = Backbone.View.extend(
       {
           collection:Inventory
       }
   );
    return InventoryView;
});