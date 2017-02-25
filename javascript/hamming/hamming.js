module.exports = Hamming;

function Hamming() {}

Hamming.prototype.compute = function(stringOne, stringTwo) {
  this.count = 0;
  if (stringOne.length === stringTwo.length) {
    for (var i = 0; i <= stringOne.length; i++) {
      if (stringOne[i] !== stringTwo[i]) {
        this.count ++;
      }
    }
  } else {
    throw 'DNA strands must be of equal length.';
  }
  return this.count;
};
