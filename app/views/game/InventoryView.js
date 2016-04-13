/**
 * Display player information (hearts, gold, items) over the game screen.
 */

import _ from 'underscore';
import Backbone from 'backbone';
import Item from '../../models/Item';
import Inventory from '../../collections/Inventory';

var InventoryView = Backbone.View.extend({
    collection: Inventory
});
export default InventoryView;