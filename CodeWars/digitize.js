function digitize(n) {
    let chaine = n.toString();
    let tableau = chaine.split('');
    let inverse = tableau.reverse();
    let result = [];

    for (let i = 0; i < inverse.length; i++) {
        result.push(Number(inverse[i]));
    }

    return result;
}

console.log(digitize(35231));