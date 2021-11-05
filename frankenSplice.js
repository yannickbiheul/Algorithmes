// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice
// You are given two arrays and an index. Copy each element of the first array into the second array, in order. Begin inserting elements at index n of the second array. Return the resulting array. The input arrays should remain the same after the function runs.

// On donne à la fonction deux tableaux et un index. Copier chaque élément du 1er tableau dans le 2ème, dans l'ordre. Commencer à copier les éléments à l'index donné du 2ème tableau. Retourner le tableau qui en résulte. Les tableaux donnés à la fonction doivent rester les mêmes avant et après celle-ci.

// Faire une copie des 2 tableaux.
// Parcourir le 1er tableau
// Ajouter chaque élément au 2ème tableau à partir de l'index donné

function frankenSplice(arr1, arr2, n) {
    let array1 = [];
    let array2 = [];

    for (let i = 0; i < arr1.length; i++) {
        array1.push(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        array2.push(arr2[i]);
    }

    for (let i = 0; i < array1.length; i++) {
        array2.splice(n + i, 0, array1[i]);
    }
    
    return array2;
}

console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));