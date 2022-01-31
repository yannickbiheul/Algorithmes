// Afficher la lettre correspondant au code ASCII
console.log(String.fromCodePoint(65));
console.log(String.fromCharCode(97));

// Obtenir le code ASCII d'une lettre
console.log("ABC".codePointAt(0));
console.log("abc".charCodeAt(0));

// Préférer utiliser les codePoint, car ils supportent les emojis.