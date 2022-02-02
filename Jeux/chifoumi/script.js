scoreJoueur = 0;
scoreBot = 0;
nomDuJoueur = demarrage();

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

