// CodeWars

// Compter le nombre d'éléments qui se répètent dans une chaine de caractères

function duplicateCount(text) {
    let result = [];
    let array = text.toString().toLowerCase().split('');
    let unique1;
    let unique2;

    for (let i = 0; i < array.length; i++) {
        unique1 = "";
        if (array[i] != unique1) {
            for (let j = i + 1; j < array.length; j++) {
                unique2 = "";
                if (array[j] != unique2) {
                    if (array[i] == array[j]) {
                        result.push(array[i]);
                        unique1 = array[i];
                        unique2 = array[j];
                    }
                }
                
            }
        }
        
    }

    return result.length;
}

console.log(duplicateCount("Indivisibility"));