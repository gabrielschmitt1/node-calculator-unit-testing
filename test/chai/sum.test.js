var expect = require('chai').expect
const sum = require('../../sum')

describe('Simple Math Test', () => {
    it('should return 2', () => {
        expect(sum(1, 1)).to.equal(2);
    });
});