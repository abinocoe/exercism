const BeerSong = function() {};

BeerSong.prototype.verse = function (startNumber) {
  const secondLineV1 = `Take one down and pass it around`;
  const secondLineV2 = `Take it down and pass it around`;
  const secondLineV3 = `Go to the store and buy some more`;
  const plural       = `bottles`;
  const singular     = `bottle`;
  let finishNumber;
  let startOfSecondLine;
  let startType;
  let finishType;

  if (startNumber > 2) {
    finishNumber = startNumber - 1;
    startOfSecondLine = secondLineV1;
    startType = plural;
    finishType = plural;
  } else if (startNumber === 2) {
    finishNumber = startNumber -1;
    startOfSecondLine = secondLineV1;
    startType = plural;
    finishType = singular;
  } else if (startNumber === 1) {
    finishNumber = `no more`;
    startOfSecondLine = secondLineV2;
    startType = singular;
    finishType = plural;
  } else if (startNumber === 0) {
    startNumber = `no more`;
    finishNumber = 99;
    startOfSecondLine = secondLineV3;
    startType = plural;
    finishType = plural;
  }

  return this.verseContents(startNumber, finishNumber, startOfSecondLine, startType, finishType);
};

BeerSong.prototype.verseContents = function (x, y, z, b, c) {
  let w;

  if (isNaN(x)) {
    w = x.charAt(0).toUpperCase() + x.slice(1);
  } else {
    w = x;
  }
  return `${w} ${b} of beer on the wall, ${x} ${b} of beer.\n${z}, ${y} ${c} of beer on the wall.\n`;
};

BeerSong.prototype.sing = function(startNumber, finishNumber = 0) {
  let song = ``;

  for (var i = startNumber; i >= finishNumber; i--) {
    song += this.verse(i);
    if (i > finishNumber) {
      song += `\n`;
    }
  }

  return song;
};

module.exports = BeerSong;
