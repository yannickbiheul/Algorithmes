
/**
 * Démarre le jeu et demande au joueur d'enregistrer son pseudo.
 * @returns 
 */
function demarrage() {
    let nom = prompt("Bienvenue dans le jeu du Chifoumi, quel est votre pseudo ?");
    return nom;
}

/**
 * Demande de choisir entre pierre, papier ou ciseaux.
 * @returns 
 */
function choix() {
    let choix = "";
    while (choix != "pierre" && choix != "papier" && choix != "ciseaux") {
        choix = prompt("Choisissez pierre, papier ou ciseaux");
    }
    return choix;
}

function choixDuBot() {
    let random = Math.floor(Math.random() * 3);
    return choixChifoumi[random];
}

function resultats(choixDuJoueur) {
    let choixJoueur = choixDuJoueur;
    let choixBot = choixDuBot();
    let resultat;
    if (choixJoueur === "pierre") {
        if (choixBot === "pierre") {
            resultat = "Vous faites égalité avec le bot, qui a choisi " + choixBot + " lui aussi.";
            scoreJoueur += 0;
            scoreBot += 0;
        } else if (choixBot === "papier") {
            resultat = "Vous perdez, car " + choixBot + " enveloppe " + choixJoueur + ".";
            scoreJoueur += 0;
            scoreBot += 1;
        } else {
            resultat = "Vous gagnez, car " + choixJoueur + " casse " + choixBot + " !";
            scoreJoueur += 1;
            scoreBot += 0;
        }
    } else if (choixJoueur === "papier") {
        if (choixBot === "pierre") {
            resultat = "Vous gagnez, car " + choixJoueur + " enveloppe " + choixBot + " !";
            scoreJoueur += 1;
            scoreBot += 0;
        } else if (choixBot === "papier") {
            resultat = "Vous faites égalité avec le bot, qui a choisi " + choixBot + " lui aussi.";
            scoreJoueur += 0;
            scoreBot += 0;
        } else {
            resultat = "Vous perdez, car " + choixBot + " découpe " + choixJoueur + " !";
            scoreJoueur += 0;
            scoreBot += 1;
        }
    } else {
        if (choixBot === "pierre") {
            resultat = "Vous perdez, car " + choixBot + " casse " + choixJoueur + " !";
            scoreJoueur += 0;
            scoreBot += 1;
        } else if (choixBot === "papier") {
            resultat = "Vous gagnez, car " + choixJoueur + " découpe " + choixBot + " !";
            scoreJoueur += 1;
            scoreBot += 0;
        } else {
            resultat = "Vous faites égalité avec le bot, qui a choisi " + choixBot + " lui aussi.";
            scoreJoueur += 0;
            scoreBot += 0;
        }
    }
    return resultat;
}

function affichageScore() {
    alert("Score de " + nomDuJoueur + " : " + scoreJoueur + ".\nScore du bot : " + scoreBot + ".");
}

function continuer() {
    let reponse = confirm("Voulez-vous continuer ?");
    return reponse;
}
