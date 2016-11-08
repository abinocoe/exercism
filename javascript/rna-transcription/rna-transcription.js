module.exports = DnaTranscriber;

function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  var rnaStrand = "";
  for (var i = 0; i < dnaStrand.length; i++) {
    switch (dnaStrand[i]) {
      case 'C': rnaStrand += "G";
        break;
      case 'G': rnaStrand += "C";
        break;
      case 'A': rnaStrand += "U";
        break;
      case 'T': rnaStrand += "A";
        break;
    }
  }
  return rnaStrand;
};
