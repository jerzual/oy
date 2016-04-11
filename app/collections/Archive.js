/*global define*/

define('collections/Archive',[
    'underscore',
    'backbone',
    'models/Game'
], function (_, Backbone, GameModel) {
    'use strict';

    var Archive = Backbone.Collection.extend({
        model: GameModel
    });

    return Archive;
});
