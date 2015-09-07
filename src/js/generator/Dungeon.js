/*global define*/

define([
    'underscore',
    'rng',
    'models/Tile',
    'models/Item',
    'collections/Room',
    'collections/Level',
    'data/rooms.json'
], function (_, RNG, TileModel, ItemModel, Room, Level, rooms) {
    'use strict';

    var DungeonGenerator = _.extend({
        generateEmptyLevel: function (width, height) {
        },
        placeRoomsInLevel: function (level, nbRooms, options) {

        },
        digMaze: function () {

        },
        floodFill: function () {

        }
    });

    return DungeonGenerator;
});