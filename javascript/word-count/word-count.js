const Words = function(inputString) {};

Words.prototype.count = function(inputString) {
  inputString = inputString.replace(/[\u00A1\u00BF\u2000-\u206F\u2E00-\u2E7F\\!"#\$%&\(\)\*\+\-\.\/:;<=>\?@\[\]\^_`\{\|\}~]/g, '');
  const inputArray = inputString
                        .trim()
                        .toLowerCase()
                        .split(/\s+|,/);

  const countObject = inputArray.reduce((object, item) => {
    if (item.match(/^'\w+'$/)) item = item.slice(1, -1);
    if (!object[item] || isNaN(object[item])) {
      object[item] = 0;
    }
    object[item] ++;
    return object;
  }, {});

  return countObject;
};

module.exports = Words;
