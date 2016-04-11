/*global define*/

import _ from 'underscore';
import Backbone from 'backbone';
import ItemModel from 'models/Item';


var Inventory = Backbone.Collection.extend({
    model: ItemModel
});

export default Inventory;
