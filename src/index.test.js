import {expect} from 'chai';
import yokozuna from './index';

describe('yokozuna-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(yokozuna.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        })
      }
    });

    it('should contain Forrest Gump', function() {
      expect(yokozuna.all).to.include('Forrest Gump');
    });
  });

  describe('random', function() {
    it('should return a random item fro the yokozuna.all', function() {
      var randomItem = yokozuna.random();
      expect(yokozuna.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = yokozuna.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(yokozuna.all).to.include(item);
      });
    });
  });
});
