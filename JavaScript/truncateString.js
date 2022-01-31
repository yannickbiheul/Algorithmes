// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string
// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

// Garder les premiers caractères dans une chaine "str", définis par un nombre "num", et retourner cette chaine non complète, en la terminant par 3 points (...).

function truncateString(str, num) {
    let result;
    // Transormer la chaine en tableau
    let strArray = str.split('');
    // Vérifier si "num" est égal ou supérieur à la taille de la chaine
    if (num >= strArray.length) {
        // Si c'est le cas, on retourne la chaine complète
        result = str;
    } else {
        // Sinon, on récupérer les premiers éléments du tableau définis par "num"
        let firstWords = strArray.splice(0, num);
        // Transformer le résultat en chaine de caractères et ajouter les 3 points
        result = firstWords.join('') + "...";
    }
    
    return result;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("Hello World", 4));