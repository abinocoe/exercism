const Pangram = function(testString) {
  this.testString = testString;
};

Pangram.prototype.isPangram = function() {

  const pang = this.testString.toLowerCase();
  
  if (!pang) {
    return false;
  }

  let alphabet = new Set();

  for (var i = 0; i < pang.length; i++) {
    let charCode = pang.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      alphabet.add(charCode);
    }
  }

  return alphabet.size === 26;

};

module.exports = Pangram;
