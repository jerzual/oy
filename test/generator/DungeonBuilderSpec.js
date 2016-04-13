import DungeonBuilder from '../../app/generator/DungeonBuilder';
import {expect} from 'chai';

describe('DungeonBuilder', function() {

    let dungeonBuilder = new DungeonBuilder();

    it('can be instanciated', function() {
        expect(dungeonBuilder).to.be.an('object');
    });

    it('has a generateEmptyLevel method', function() {
        expect(dungeonBuilder).to.have.property('generateEmptyLevel');
    });

});
