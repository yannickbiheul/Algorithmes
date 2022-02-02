/**
 * Affiche des étoiles dans un ordre croissant puis décroissant
 * @param {Number} nombre 
 */
function etoiles(nombre) {
    etoilesCroissant(nombre);
    etoilesDecroissant(nombre - 1);
}

/**
 * Affiche des étoiles dans un ordre croissant puis décroissant. Ne prend qu'un nombre pair
 * @param {Number} nombre 
 */
function etoilesPair(nombre) {
    if (verifNombre(nombre) == "pair") {
        etoilesCroissantPair(nombre);
        etoilesDecroissantPair(nombre - 2);
    } else {
        console.log("Ce nombre est impair !");
    }
}

/**
 * Affiche des étoiles dans un ordre croissant puis décroissant. Ne prend qu'un nombre impair
 * @param {Number} nombre 
 */
function etoilesImpair(nombre) {
    if (nombre % 2 != 0 && nombre != 0 && nombre > 0) {
        etoilesCroissantImpair(nombre);
        etoilesDecroissantImpair(nombre - 2);
    } else {
        console.log("Ce nombre est soit pair, soit égal à 0, soit négatif !");
    }
}

separation(5);
etoiles(5);
separation(5);
etoilesPair(6);
separation(5);
etoilesImpair(5);
separation(5);
