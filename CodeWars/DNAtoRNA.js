function DNAtoRNA(dna) {
    let result = dna.split('');
    for (let i = 0; i < result.length; i++) {
        if (result[i] === "T") {
            result[i] = "U";
        }
    }

    return result.join('');
}

console.log(DNAtoRNA("TTTT"));