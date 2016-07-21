'use strict';

jest.mock('../sum'); // this happens automatically with automocking


describe('sum', () => {
    it('adds 1 + 2 to equal 3', () => {
        var foo = require('../sum');

        // foo is a mock function
        foo.mockImplementation(function (a) { return a*a; }).mockImplementationOnce(function (a) { return a*a+1; }).mockImplementationOnce(function (a) { return a*a+2; });
        expect(foo(2)).toEqual(5);
        expect(foo(2)).toEqual(6);
        expect(foo(2)).toEqual(4);
        expect(foo).toBeCalled();
        expect(foo.mock.calls.length).toBe(3);
    });
});