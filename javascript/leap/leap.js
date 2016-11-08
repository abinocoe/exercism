module.exports = Year;

function Year(year){
  this.isLeap = function(number){
    if (year % 100 === 0 && year % 400 !== 0) {
      return false;
    } else if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  };
}
