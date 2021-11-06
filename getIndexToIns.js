// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number. For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1). Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// Retrouver l'index auquel une valeur donnée doit être ajouté à un tableau une fois trié.

// Trier le tableau dans l'ordre croissant
// Parcourir le tableau et comparer chaque élément avec la valeur donnée
// Insérer cette valeur dans le tableau
// Parcourir ce nouveau tableau et trouver l'index de la valeur donnée
// Retourner cette valeur

function getIndexToIns(arr, num) {
    let array = arr.sort((a, b) => a - b );
    let index;

    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            if (num > array[i]) {
                index = i + 1;
            } else if (num == array[i]) {
                index = i;
            }
        }
    } else {
        index = 0;
    }
    

    return index;
}

console.log(getIndexToIns([3, 10, 5], 3));