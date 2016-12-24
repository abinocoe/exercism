const Isogram = function(input) {
  this.testCase = input;
};

Isogram.prototype.isIsogram = function() {
  let hi = this.testCase;

  while (hi.length > 1) {
    hi = hi.toLowerCase();
    let letter = hi.slice(0, 1);
    hi = hi.slice(1);
    if (hi.indexOf(letter) !== -1 && letter !== '-' && letter !== ' ') {
      return false;
    }
  }

  if (hi.length === 1) {
    return true;
  }

  // DESTROY THE INPUT WORD BY SLICING LETTERS OFF AND THEN TESTING THOSE
  // look at while and unless - basically you need to break the loop

};

module.exports = Isogram;
