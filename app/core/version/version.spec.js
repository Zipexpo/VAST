'use strict';

describe('VAST.version module', function() {
  beforeEach(module('VAST.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
