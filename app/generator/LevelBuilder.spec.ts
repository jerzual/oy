import LevelBuilder from '../../app/generator/LevelBuilder';
import {expect} from 'chai';

describe('LevelBuilder', function() {

    let dungeonBuilder = new LevelBuilder();

    it('can be instanciated', function() {
        expect(dungeonBuilder).to.be.an('object');
    });

    it('has a generateEmptyLevel method', function() {
        expect(dungeonBuilder).to.have.property('generateEmptyLevel');
    });

});
