import SeedGenerator from 'generator/SeedGenerator';
describe('SeedGenerator', function() {

    it('provides a randomSeed method', function() {
        expect(SeedGenerator.randomSeed).to.be.a('Function');
        describe('when randomSeed() is called', function() {
            var seed = SeedGenerator.randomSeed();
            it('should return an 8 char string', function() {
                expect(seed).to.match(/^(.*){8}$/);
            });
            it('should only contains alphanumeric chars', function() {
                expect(seed).to.match(/^([A-Z]|[0-9]){8}$/);
            });
        });
    });
    it('provides a dailyChallengeSeed method', function() {
        expect(SeedGenerator.dailyChallengeSeed).to.be.a('Function');

        describe('when dailyChallengeSeed() is called without date', function() {
            var seed = SeedGenerator.dailyChallengeSeed();

            it('should return an 8 char string', function() {
                expect(seed).to.match(/^(.*){8}$/);
            });

            it('should only contains alphanumeric chars', function() {
                expect(seed).to.match(/^([A-Z]|[0-9]){8}$/);
            });

            it('should return the same string as if given the date of the day.', function() {
                var date = new Date();
                expect(seed).to.equal(SeedGenerator.dailyChallengeSeed(date));
            });
        });
    });
});