function transformToRot13(stringToTransform) {
    // ROT13 : Il faut décaler chacune des lettres de 13 places.

    // Transformer la chaine en tableau
    return stringToTransform
    .toUpperCase()
    .split('')
    .map(char => {
        // Transformer chaque lettre en character code (valeur entre 65 et 90)
        const code = char.charCodeAt(char);
        
        // En dehors de la valeur => retourner un caractère pas converti
        if (code < 65 || code > 90) {
            return String.fromCharCode(code);

        // Valeur inférieure à 78 (médiane, vaut "N") => incrémente de 13
        } else if (code < 78) {
            return String.fromCharCode(code + 13);

        // Valeur supérieure à 78 => décrémente de 13
        } else {
            return String.fromCharCode(code - 13);
        }

    }).join(''); // Retransforme en string
}

console.log(transformToRot13("URYYB JBEYQ")); // HELLO WORLD
console.log(transformToRot13("Bonjour je m'appelle Yannick Biheul")); // OBAWBHE WR Z'NCCRYYR LNAAVPX OVURHY
