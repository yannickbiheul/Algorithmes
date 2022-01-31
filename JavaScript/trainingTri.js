// Tri à bulles

// Déclarer un tableau
let array = [18, 1981, 12, -7, 48, 59, 93, 54, -14, 1200, 22, 29, -98, -72, 36];

// Afficher le tableau et le nombre d'éléments qu'il contient dans la console
console.log("Tableau de base : " + array);
console.log("Nombre d'éléments du tableau : " + array.length);

// Faire une copie du tableau
let arrayCopy = array.slice();

// Créer une fonction pour trier le tableau dans l'ordre croissant
function bubbleSort(arr) {
    let isSwapped;

    do {
        isSwapped = false;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                const TEMP = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = TEMP;
                isSwapped = true;
            }
        }
    } while (isSwapped);

    return arr;
}

// Afficher le tableau trié dans la console, ainsi que sa valeur minimale et sa valeur maximale
console.log("Tableau trié : " + bubbleSort(arrayCopy));
console.log("Valeur minimale du tableau : " + arrayCopy[0]);
console.log("Valeur maximale du tableau : " + arrayCopy[arrayCopy.length - 1]);

// Trouver les index des minimum et maximum dans le tableau d'origine
let min = array.indexOf(arrayCopy[0]);
let max = array.indexOf(arrayCopy[arrayCopy.length - 1]);
console.log("Index du minimum : " + min);
console.log("Index du maximum : " + max);