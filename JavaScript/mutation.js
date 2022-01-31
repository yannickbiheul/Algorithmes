// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// Retourner "true" si le 1er élément du tableau contient toutes les lettres du 2ème élément.

// Transformer les éléments en minuscules
// Parcourir le 2ème élément
// Comparer chaque lettre avec celle du 1er élément
// Si la lettre correspond, retourner true. Sinon, retourner false et stopper la boucle.

function mutation(arr) {
    let string1 = arr[0].toLowerCase();
    let string2 = arr[1].toLowerCase();
    let result;
    let right = [];
    let wrong = [];

    for (let i = 0; i < string2.length; i++) {
        for (let j = 0; j < string1.length; j++) {
            if (string2[i] === string1[j]) {
                right.push(string2[i]);
                break;
            } else {
                wrong.push(string2[i]);
            }
        }
    }
    
    if (right.length === string2.length) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

console.log(mutation(["hello", "Hello"]));