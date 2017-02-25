const Pangram = function(testString) {
  this.testString = testString;
};

Pangram.prototype.isPangram = function() {

  const pangram = this.testString.toLowerCase();

  for (let i = 0; i < 26; i++) {
    let letter = String.fromCharCode(97 + i);

    if (!pangram.includes(letter)) {
      return false;
    }
  }
  return true;
};

module.exports = Pangram;
