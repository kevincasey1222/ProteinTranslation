//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (rna = "") => {
  //specs:
  //consume string, 3 letter sequences (codons)
  //translate codons and stop when you reach end of RNA or stop sequence
  //throw error if codon is invalid
  //output array of strings of proteins per codon, empty if string empty or only stop sequence
  
  const codonLength = 3;
  const stopCodons = [ "UAA" , "UAG", "UGA"];
  const errorMsg = 'Invalid codon';
  var proteins = [];

  var i = 0;
  while (i < rna.length) {
    var protein = translateCodon(rna.slice(i,i+3));
    if (protein == "STOP") {
      return proteins;
    } else {
      proteins.push(protein);
      i = i + 3
    }
  }

  console.log(proteins);
  return proteins;

};

const translateCodon = (codon) => {
  return "Didit";
}
