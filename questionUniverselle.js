// https://prologin.org/train/2008/semifinal/42_revisite
// Trouver le nombre de 42 présents dans un nombre entier (exemple : 14422 => 4)

// Combien de 42 différents on peut obtenir dans un nombre donné.
// Deux 42 lus dans un nombre seront dits différents lorsque les positions des chiffres des deux 42 ne sont pas rigoureusement les mêmes
// Exemples : 14422 doit retourner 4 et 42424242 doit retourner 10

// Convertir le nombre en tableau et le trier pour ne garder que les 4 et les 2
function arraySorted(number) {
    let string = number.toString();
    let array = string.split('');
    let arraySorted = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 4 || array[i] == 2) {
            arraySorted.push(array[i]);
        }
    }

    return arraySorted;
}

// Compter le nombre de 42 qu'on peut lire dans ce tableau
function count42(array) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] == 4) {
            for (let j = i; j < array.length; j++) {
                if (array[j] == 2) {
                    count++;
                }
            }
        }
    }

    return count;
}

// Créer la fonction principale qui regroupe les 2 précédentes
function howMany42(number) {
    let array = arraySorted(number);
    let count = count42(array);

    return count;
}

console.log(howMany42(1000000000));
