module.exports = DnaTranscriber;

function DnaTranscriber() {}

DnaTranscriber.prototype.toRna = function(dnaStrand) {
  var rnaStrand = [];
  for (var i = 0; i < dnaStrand.length; i++) {
    switch (dnaStrand[i]) {
      case 'C': rnaStrand.push('G');
        break;
      case 'G': rnaStrand.push('C');
        break;
      case 'A': rnaStrand.push('U');
        break;
      case 'T': rnaStrand.push('A');
        break;
    }
  }
  return rnaStrand.join('');
};
