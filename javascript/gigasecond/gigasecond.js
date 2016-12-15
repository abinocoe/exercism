var Gigasecond = function(date) {
  this.data = date;
};

Gigasecond.prototype.date = function() {
  var submittedDate = this.data;
  var timeInSeconds = Date.parse(submittedDate);
  var GIGASECOND = ((Math.pow(10,9))*1000);
  return new Date(timeInSeconds + GIGASECOND);
};

module.exports = Gigasecond;
