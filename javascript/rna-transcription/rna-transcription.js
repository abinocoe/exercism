module.exports = DnaTranscriber;

function DnaTranscriber() {
  this.translation = { "C" : "G", "G" : "C", "A" : "U", "T" : "A" };
}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  var rnaStrand = "";
  for (var i = 0; i < dnaStrand.length; i++) {
      rnaStrand += this.translation[dnaStrand[i]];
  }
  return rnaStrand;
};
