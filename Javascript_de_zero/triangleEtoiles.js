/**
 * Permet d'afficher plusieurs lignes d'étoiles dans l'ordre croissant, de 1 à nombre.
 * @param {Number} nombre
 */
function afficherEtoilesCroissant(nombre) {
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
 * Permet d'afficher plusieurs lignes d'étoiles dans l'ordre décroissant, de nombre à 1.
 * @param {Number} nombre 
 */
function afficherEtoilesDecroissant(nombre) {
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
 * Permet d'afficher des étoiles dans l'ordre croissant et décroissant
 * @param {Number} nombre 
 */
function afficherEtoiles(nombre) {
    afficherEtoilesCroissant(nombre);
    afficherEtoilesDecroissant(nombre - 1);
}

// afficherEtoiles(3);

/**
 * Permet d'afficher plusieurs lignes d'étoiles dans l'ordre croissant impair, de 1 à nombre.
 * @param {Number} nombre 
 */
function afficherEtoilesCroissantImpair(nombre) {
    let ligne = "";
    for (let i = 1; i <= nombre; i += 2) {
        for (let j = 1; j <= i; j++) {
            ligne += "*";
        }
        console.log(ligne);
        ligne = "";
    }
}

function afficherEtoilesDecroissantImpair(nombre) {
    let ligne = "";
    for (let i = nombre; i >= 1; i -= 2) {
        for (let j = nombre; j >= 1; j--) {
            ligne += "*";
        }
        console.log(ligne);
        ligne = "";
    }
}

// afficherEtoilesDecroissantImpair(3);

function etoilesCroissant(nombre) {
    let ligne = "";
    // nombre représente le nombre de lignes
    for (let i = 0; i < nombre; i++) {
        // On parcourt la ligne actuelle pour afficher les étoiles
        for (let j = 0; j <= i; j++) {
            ligne += "*";
        }
        // On affiche la ligne
        console.log(ligne);
        // On réinitialise la ligne
        ligne = "";
    }
}

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

function etoiles(nombre) {
    etoilesCroissant(nombre);
    etoilesDecroissant(nombre - 1);
}

function etoilesCroissantPair(nombre) {
    let ligne = "";
    if (nombre % 2 === 0) {
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

function etoilesDecroissantPair(nombre) {
    let ligne = "";
    if (nombre % 2 === 0) {
        for (let i = nombre; i > 0; i -= 2) {
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

function etoilesPair(nombre) {
    if (nombre % 2 === 0) {
        etoilesCroissantPair(nombre);
        etoilesDecroissantPair(nombre - 2);
    } else {
        console.log("Ce nombre est impair !");
    }
}

function etoilesCroissantImpair(nombre) {
    if (nombre % 2 != 0) {
        let ligne = "";
        for (let i = 1; i <= nombre; i += 2) {
            for (let j = 1; j <= i; j++) {
                ligne += "*";
            }
            console.log(ligne);
            ligne = "";
        }
    } else {
        console.log("Ce nombre est pair !");
    }
}

function etoilesDecroissantImpair(nombre) {
    if (nombre % 2 != 0) {
        let ligne = "";
        for (let i = nombre; i >= 1; i -= 2) {
            for (let j = i; j >= 1; j--) {
                ligne += "*";
            }
            console.log(ligne);
            ligne = "";
        }
    } else {
        console.log("Ce nombre est pair !");
    }
}

function etoilesImpair(nombre) {
    if (nombre % 2 != 0) {
        etoilesCroissantImpair(nombre);
        etoilesDecroissantImpair(nombre - 2);
    } else {
        console.log("Ce nombre est pair !");
    }
}

etoilesImpair(15);
