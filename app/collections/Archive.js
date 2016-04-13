import _ from 'underscore';
import Backbone from 'backbone';
import Seed from '../models/Seed';


var Archive = Backbone.Collection.extend({
    model: Seed
});

export default Archive;
