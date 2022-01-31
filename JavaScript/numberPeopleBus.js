// CodeWars
// Compter le nombre de personnes restantes dans un bus.

// Un tableau de paires d'entiers est donné.
// Le 1er élément de la paire représente le nombre de personnes montant dans le bus
// Le 2ème représente le nombre de personnes descendant du bus.
// Calculer combien de personnes restent dans le bus.

function numberPeopleBus(busStops) {
    let result;
    let numberIn = 0;
    let numberOut = 0;

    for (let i = 0; i < busStops.length; i++) {
        numberIn+= busStops[i][0];
        numberOut+= busStops[i][1];
    }

    result = numberIn - numberOut;

    return result;
}

console.log(numberPeopleBus([[10,0],[3,5],[5,8]]));