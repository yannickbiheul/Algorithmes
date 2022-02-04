function fakeBin(x) {
    let tableau = x.split('');
    let result;
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] < 5) {
            tableau[i] = 0;
        } else {
            tableau[i] = 1;
        }
    }
    result = tableau.join('');

    return result;
}

console.log(fakeBin('45385593107843568'))