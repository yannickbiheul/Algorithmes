// Si la clé d'encodage est égale à 3, alors on décale chaque lettre 3 fois à droite.
// Exemple : A => D; Z => C, etc...

function cesarSimple(message, cle) {
    let messageCode = "";
    for (let i = 0; i < message.length; i++) {
        let lettre = message[i];
        let codeLettre = lettre.codePointAt(0);
        let limiteInferieure = String.fromCodePoint(65 + 26 - cle);
        if (lettre >= limiteInferieure && lettre <= "Z") {
            codeLettre += cle - 26;
        } else {
            codeLettre += cle;
        }
        let nouvelleLettre = String.fromCodePoint(codeLettre);
        messageCode += nouvelleLettre;
    }
    return messageCode;
}

function cesarModulo(message, cle) {
    let messageCode = "";
    for (let i = 0; i < message.length; i++) {
        let lettre = message[i];
        let valeurLettre = lettre.codePointAt(0);
        // On calcule la position dans l'alphabet de la lettre claire
        let positionAlphabetLettreClaire = valeurLettre - 65;
        // On calcule la position dans l'alphabet de la lettre encodée
        let positionAlphabetLettreEncodee = (positionAlphabetLettreClaire + cle) % 26;
        // On calcule la valeur de la lettre depuis sa position dans l'alphabet
        let nouvelleValeur = positionAlphabetLettreEncodee + 65;
        let nouvelleLettre = String.fromCodePoint(nouvelleValeur);
        messageCode += nouvelleLettre;
    }
    return messageCode;
}

function cesarModulo2(message, cle) {
    let messageCode = "";
    for (let i = 0; i < message.length; i++) {
        let lettre = message[i];
        let nouveauSymbole = String.fromCodePoint((lettre.codePointAt(0) - 65 + cle) % 26 + 65);
        messageCode += nouveauSymbole;
    }
    return messageCode;
}

console.log(cesarSimple("PUISSANT", 10));
console.log(cesarModulo("PUISSANT", 10));
console.log(cesarModulo2("PUISSANT", 10));
