function uniTotal(string) {
    let somme = 0;
    let tableau = string.split('');
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i].codePointAt(0);
    }

    return somme;
}

console.log(uniTotal("aaa"));