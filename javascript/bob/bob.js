//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(phrase) {
  var silence  = phrase.trim() === "";
  var shouting = phrase.toUpperCase() === phrase;
  var numbers  = /(\d+,?\s?)+[\.\?!]*/.test(phrase);
  var question = phrase[(phrase.length)-1] === '?';
  var exclaim  = phrase[(phrase.length)-1] === '!';

  if (silence) {
    return 'Fine. Be that way!';
  } else if (shouting && !numbers) {
    return 'Whoa, chill out!';
  } else if (question) {
    return 'Sure.';
  } else if (numbers) {
    if (exclaim) {
      return 'Whoa, chill out!';
    } else {
      return 'Whatever.';
    }
  } else {
    return 'Whatever.';
  }

};

module.exports = Bob;
