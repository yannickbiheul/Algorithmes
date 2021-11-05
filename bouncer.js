// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer
// Remove all falsy values from an array. Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. Hint: Try converting each value to a Boolean.

// Enlever du tableau toutes les fausses valeurs (false, null, 0, "", undefined, NaN).
// Convertir les valeurs en valeurs booléennes
// Créer un tableau vide
// Parcourir le tableau
// Vérifier que chaque élément n'est pas égal à "false"

function bouncer(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(bouncer([null, NaN, 1, 2, undefined]));