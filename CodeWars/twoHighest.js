function twoHighest(arr) {
    let result = [];
    let finish;

    // Prise en compte des tableaux vides et avec 1 seul élément
    if (arr.length === 0) {
        return [];
    } else if (arr.length === 1) {
        return arr;
    }

    // Tri du tableau dans l'ordre croissant
    do {
        finish = false;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                finish = true;
            }
        }

    } while (finish);

    // Ajout de la dernière valeur dans le tableau result
    result.push(arr[arr.length - 1]);
    // Si l'avant-dernière valeur est égale à celle d'avant, on ajoute celle d'encore avant
    if (arr[arr.length - 1] === arr[arr.length - 2]) {
        result.push(arr[arr.length - 3]);
    } else {
        result.push(arr[arr.length - 2]);
    }
    
    return result;
}

console.log(twoHighest([])); // []
console.log(twoHighest([15])); // [15]
console.log(twoHighest([15,20,20,17])); // [20,17]