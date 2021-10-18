const sum = require('../../sum');
var assert = require('assert');

describe('Simple Math Test', () => {
    
    it('adds 1 + 2 to equal 3', () => {
        var result = sum(1, 2);
        assert.equal(result, 3);
    });

});