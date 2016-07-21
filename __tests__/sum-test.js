jest.unmock('../sum/sum'); // unmock to use the actual implementation of sum

describe('sum', function () {
    it('sum 2 + 1 to equal 3', function () {
        const sum = require('../sum/sum');
        expect(sum(2, 1)).toBe(3);
    });
});