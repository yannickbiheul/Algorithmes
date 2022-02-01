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

afficherEtoiles(3);
