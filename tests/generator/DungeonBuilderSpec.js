/*global define*/
define(
    ['generator/DungeonBuilder'],
    function (DungeonBuilder) {
    'use strict';
    describe('DungeonBuilder', function () {

        var dungeonBuilder = DungeonBuilder;

        it('can be instanciated', function () {
            expect(dungeonBuilder).to.be.a('Object');
        });

        it('has a generateEmptyLevel method', function () {
            expect(dungeonBuilder).to.have.property('generateEmptyLevel');
        });

    });

});