import uniqueRandomArray from 'unique-random-array';
import yokozunaNames from './yokozuna-names.json';

var getRandomItem = uniqueRandomArray(yokozunaNames);

module.exports = {
  all: yokozunaNames,
  random: random
}

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
