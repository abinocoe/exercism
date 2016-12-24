const Isogram = function(input) {
  this.testCase = input;
};

Isogram.prototype.isIsogram = function() {
  let string = this.testCase;

  while (string.length > 1) {
    string     = string.toLowerCase()
                       .replace(/[\s\-]/g, '');
    let letter = string.slice(0, 1);
    string     = string.slice(1);
    
    if (string.match(letter)) return false;
  }
  return true;
};

module.exports = Isogram;
