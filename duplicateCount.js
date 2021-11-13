// CodeWars

// Compter le nombre d'éléments qui se répètent dans une chaine de caractères
// Voir la méthode "indexOf" => https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

function duplicateCount(text) {
    let result;

    return result;
}

let array = ["a", "b", "c", "d", "a", "b", "c", "d"];

let count = 0;
for (let i = 0; i < array.length; i++) {
    let indices = [];
    let element = array[i];
    let idx = array.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
    }
    if (indices.length >= 1) {
        count++;
    }
}

console.log(count);

