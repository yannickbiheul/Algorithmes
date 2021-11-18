// CodeWars

// Compter le nombre d'éléments qui se répètent dans une chaine de caractères

// Nettoyer le tableau
function cleanArray(text) {
    // Convertir le text en minuscules avant de le transormer en tableau
    let array = text.toLowerCase().split('');
    // Créer une regex qui contient toutes les lettres de a à z
    let regex = /[a-z]/g;
    // Créer un tableau "clean"
    let arrayClean = [];
    
    // Parcourir le tableau et vérifier que chaque lettre correspond à la regex
    for (let i = 0; i < array.length; i++) {
        if (array[i].match(regex)) {
            // Si elle correspond, l'ajouter au tableau "clean"
            arrayClean.push(array[i]);
        }
    }

    // Retourner le tableau "clean"
    return arrayClean;
}

function duplicateCount(text) {
    // Créer un tableau "arrayClean" qui contient le texte "nettoyé"
    let arrayClean = cleanArray(text);
    // Créer un tableau "arrayDup" qui contiendra les lettres qui se répètent
    let arrayDup = [];

    // Parcourir le tableau "arrayClean"
    for (let i = 0; i < arrayClean.length; i++) {
        // Sélectionner la lettre [i] de arrayClean
        let index = arrayClean[i];
        // Récupérer les index de cette lettre dans le tableau "indices"
        let indices = [];
        // indexOf retourne l'index de l'élément selectionné (index), et retourne -1 si il ne le trouve pas
        let idx = arrayClean.indexOf(index);
        while (idx != -1) {
            // Ajoute l'index au tableau "indices"
            indices.push(idx);
            // Incrémente idx pour passer à l'index suivant
            idx = arrayClean.indexOf(index, idx+1);
        }

        // Si le tableau "indices" comporte plus d'1 élément, alors la lettre se répète
        if (indices.length > 1) {
            // Si le tableau "arrayDup" contient 1 élément ou plus
            if (arrayDup.length >= 1) {
                // Si le tableau "arrayDup" ne contient pas l'index
                if (!arrayDup.includes(index)) {
                    // Ajout de cet index au tableau
                    arrayDup.push(index);
                }
            // Sinon si le tableau "arrayDup" est vide
            } else {
                // Ajout de cet index au tableau
                arrayDup.push(index);
            }
        }
    }

    // On retourne donc la longueur du tableau "arrayDup"
    return arrayDup.length;
}

console.log(duplicateCount("Indivisibility"));

