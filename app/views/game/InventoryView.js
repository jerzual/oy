/**
 * Display player information (hearts, gold, items) over the game screen.
 */

import _ from 'underscore';
import Backbone from 'backbone';
import Item from 'models/Item';
import Inventory from 'collections/Inventory';
import 'text!../../templates/inventory.hbs';
var InventoryView = Backbone.View.extend({
    collection: Inventory
});
export default InventoryView;