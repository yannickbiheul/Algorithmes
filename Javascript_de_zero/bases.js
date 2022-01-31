let nombre = 42;
// Décimal => Binaire
console.log(nombre.toString(2));
// Décimal => Hexadécimal
console.log(nombre.toString(16));
// "toString" renvoie toujours une chaine de caractères

// Binaire => Décimal
let binaire = "101010";
console.log(Number.parseInt(binaire, 2));
// Hexadécimal => Décimal
let hexa = "2a";
console.log(Number.parseInt(hexa, 16));
// "parseInt" prend toujours une chaine de caractères et renvoie toujours un nombre en base 10

// Binaire => Hexadécimal
console.log(Number.parseInt(binaire, 2).toString(16));
// Hexadécimal => Binaire
console.log(Number.parseInt(hexa, 16).toString(2));