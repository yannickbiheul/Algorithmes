// Retourner l'index de la valeur maximum d'un tableau
let array = [18, 1981, 12, -7, 48, 59, 93, 54, -14, 1200, 22, 29, -98, -72, 36];

function findIndexOfMax(arr) {
    let arrayCopy = arr.slice();
    let isSwapped;
    let max;

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

    max = arr.indexOf(arrayCopy[arrayCopy.length - 1]);

    return max;

}

console.log(findIndexOfMax(array));