let choixChifoumi = ["pierre", "papier", "ciseaux"];
let choixDuJoueur;
let choixBot;
let finDepartie = false;
let scoreJoueur = 0;
let scoreBot = 0;
let nomDuJoueur = demarrage();

while (!finDepartie) {
    choixDuJoueur = choix();
    alert(resultats(choixDuJoueur));
    affichageScore();
    if (continuer()) {
        finDepartie = false;
    } else {
        finDepartie = true;
    }
}

