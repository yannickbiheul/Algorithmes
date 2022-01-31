// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

// Créer une fonction qui parcourt un tableau et qui retourne le premier élément à passer le "truth test". Un élément "num" est donné. Si function(x) est vraie, alors le test est passé. Si aucun élément ne passe le test, on retourne "undefined".

// Parcourir le tableau
// Vérifier si la fonction est vraie sur chaque élément
// Si c'est vrai, retourner l'élément
// Si c'est faux, retourner "undefined"

function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            return arr[i];
        }
    }
    return undefined;
}

console.log(findElement([1, 3, 5, 8, 9], function(num) { return num % 2 === 0; }));