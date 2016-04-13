/**
 * Displays the final score of a Game.
 */

import _ from 'underscore';
import Backbone from 'backbone';
import ScoreModel from '../../models/Item';
import Scores from '../../collections/Inventory';

var ScoreView = Backbone.View.extend({
    collection: Scores
});
export default ScoreView;