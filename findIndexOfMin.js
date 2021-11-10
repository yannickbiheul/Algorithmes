// Retourner les index des valeurs minimum et maximum d'un tableau
let array = [18, 1981, 12, -7, 48, 59, 93, 54, -14, 1200, 22, 29, -98, -72, 36];

function findIndexOfMin(arr) {
    let arrayCopy = arr.slice();
    let isSwapped;
    let min;

    do {
        isSwapped = false;

        for (let i = 0; i < arrayCopy.length; i++) {
            if (arrayCopy[i] > arrayCopy[i + 1]) {
                const TEMP = arrayCopy[i];
                arrayCopy[i] = arrayCopy[i + 1];
                arrayCopy[i + 1] = TEMP;
                isSwapped = true;
            }
        }
    } while(isSwapped);

    min = arr.indexOf(arrayCopy[0]);

    return min;

}

console.log(findIndexOfMin(array));