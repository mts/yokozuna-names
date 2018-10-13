var uniqueRandomArray = require('unique-random-array');
var yokozunaNames = require('./yokozuna-names.json');

module.exports = {
  all: yokozunaNames,
  random: uniqueRandomArray(yokozunaNames)
}
