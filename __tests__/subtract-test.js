jest.unmock('../subtract/subtract'); // unmock to use the actual implementation of sum

describe('subtract', function () {
    it('subtract 2 - 1 to equal 1', function () {
        var subtract = require('../subtract/subtract');
        expect(subtract(2, 1)).toBe(1);
    });
});