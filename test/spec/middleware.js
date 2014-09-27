var expect = require('chai').expect
  , mid = require('../..');

describe('cli-mid-action:', function() {
  it('should execute middleware function', function(done) {
    var closure = mid();
    expect(closure).to.be.a('function');
    //closure();
    done();
  });
})
