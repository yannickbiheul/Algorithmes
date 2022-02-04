function shortcut(string) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let tableau = string.split('');
    let compteur = 0;
    let result;
    for (let i = 0; i < tableau.length; i++) {
        if (vowels.includes(tableau[i])) {
            tableau.splice(i, 1);
            compteur++;
            tableau.unshift("a");
        }
    }
    tableau.splice(0, compteur);
    result = tableau.join('');
    return result;
}

console.log(shortcut("how are you today?"));