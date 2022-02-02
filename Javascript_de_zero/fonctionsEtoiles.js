/**
 * Vérifie si un nombre est pair ou impair
 * @param {*} nombre 
 * @returns 
 */
 function verifNombre(nombre) {
    if (nombre % 2 === 0) {
        return "pair";
    } else {
        return "impair";
    }
}

/**
 * Affiche des traits de séparation.
 * @param {Number} nombre 
 */
function separation(nombre) {
    let ligne = "";
    for (let i = 0; i < nombre; i++) {
        ligne += "-";
    }
    console.log(ligne);
}

/**
 * Affiche des étoiles dans un ordre croissant
 * @param {Number} nombre 
 */
 function etoilesCroissant(nombre) {
    let ligne = "";
    for (let i = 0; i < nombre; i++) {
        for (let j = 0; j <= i; j++) {
            ligne += "*";
        }
        console.log(ligne);
        ligne = "";
    }
}

/**
 * Affiche des étoiles dans un ordre décroissant
 * @param {Number} nombre 
 */
function etoilesDecroissant(nombre) {
    let ligne = "";
    for (let i = nombre; i > 0; i--) {
        for (let j = i; j > 0; j--) {
            ligne += "*";
        }
        console.log(ligne);
        ligne = "";
    }
}

/**
 * Affiche des étoiles dans un ordre croissant. Ne prend qu'un nombre pair au dessus de 0
 * @param {Number} nombre 
 */
 function etoilesCroissantPair(nombre) {
    if (verifNombre(nombre) == "pair") {
        let ligne = "";
        for (let i = 2; i <= nombre; i += 2) {
            for (let j = 0; j < i; j++) {
                ligne += "*";
            }
            console.log(ligne);
            ligne = "";
        }
    } else {
        console.log("Ce nombre est impair !");
    }
}

/**
 * Affiche des étoiles dans un ordre décroissant. Ne prend qu'un nombre pair au dessus de 0
 * @param {Number} nombre 
 */
function etoilesDecroissantPair(nombre) {
    if (verifNombre(nombre) == "pair") {
        let ligne = "";
        for (let i = nombre; i >= 2; i -= 2) {
            for (let j = i; j > 0; j--) {
                ligne += "*";
            }
            console.log(ligne);
            ligne = "";
        }
    } else {
        console.log("Ce nombre est impair !");
    }
}

/**
 * Affiche des étoiles dans un ordre croissant. Ne prend qu'un nombre impair positif
 * @param {Number} nombre 
 */
 function etoilesCroissantImpair(nombre) {
    if (nombre % 2 != 0 && nombre != 0 && nombre > 0) {
        let ligne = "";
        for (let i = 1; i <= nombre; i += 2) {
            for (let j = 1; j <= i; j++) {
                ligne += "*";
            }
            console.log(ligne);
            ligne = "";
        }
    } else {
        console.log("Ce nombre est soit pair, soit égal à 0, soit négatif !");
    }
}

/**
 * Affiche des étoiles dans un ordre décroissant. Ne prend qu'un nombre impair positif
 * @param {Number} nombre 
 */
 function etoilesDecroissantImpair(nombre) {
    if (nombre % 2 != 0 && nombre != 0 && nombre > 0) {
        let ligne = "";
        for (let i = nombre; i > 0; i -= 2) {
            for (let j = i; j > 0; j--) {
                ligne += "*";
            }
            console.log(ligne);
            ligne = "";
        }
    } else {
        console.log("Ce nombre est soit pair, soit égal à 0, soit négatif !");
    }
}