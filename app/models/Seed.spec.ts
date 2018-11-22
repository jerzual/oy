
import Seed from '../../app/models/Seed';
import {expect} from 'chai';


describe('Seed', function() {
    describe('is instanciable',function(){
        let seed = new Seed('OY');
        expect(seed).to.be.ok;
        expect(seed).to.be.an('object');
    })
    it('takes a string as an argument', function() {

    })
    it('a string as an argument', function() {

    })

    describe('when initialized with a seed ABCDEFG',function(){
        let threeFirstResults = [],
            seed = null;
        before(function(){
            seed = new Seed('ABCDEFG');
            threeFirstResults = [];
            threeFirstResults.push(seed.random());
            threeFirstResults.push(seed.random());
            threeFirstResults.push(seed.random());
        });
        it('a new Seed with the same string should have same results.',function(){

            seed = new Seed('ABCDEFG');
            let newFirstResults = [];
            newFirstResults.push(seed.random());
            newFirstResults.push(seed.random());
            newFirstResults.push(seed.random());
            expect(newFirstResults).to.deep.equal(threeFirstResults);
            expect(newFirstResults[0]).to.equals(threeFirstResults[0]);
            expect(newFirstResults[1]).to.equals(threeFirstResults[1]);
            expect(newFirstResults[2]).to.equals(threeFirstResults[2]);
        });
    })
});
