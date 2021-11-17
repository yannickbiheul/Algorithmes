// CodeWars

// Compter le nombre d'éléments qui se répètent dans une chaine de caractères
// Voir la méthode "indexOf" => https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

function duplicateCount(text) {
    let array = text.toLowerCase().split('');
    let regex = /[a-z]/g;
    let arrayClean = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i].match(regex)) {
            arrayClean.push(array[i]);
        }
    }

    let arrayDup = [];

    for (let i = 0; i < arrayClean.length; i++) {
        // Sélectionner la lettre [i] de arrayClean
        let index = arrayClean[i];

        // Récupérer les index de cette lettre dans indices
        let indices = [];
        let idx = arrayClean.indexOf(index);
        while (idx != -1) {
            indices.push(idx);
            idx = arrayClean.indexOf(index, idx+1);
        }

        // Si la lettre se répète, supprimer toutes ses occurences dans arrayCopy et incrémenter result
        if (indices.length > 1) {
            if (arrayDup.length >= 1) {
                
                if (!arrayDup.includes(index)) {
                    arrayDup.push(index);
                }
                
            } else {
                arrayDup.push(index);
            }
        }
    }

    return arrayDup.length;
}

console.log(duplicateCount("Indivisibility"));

