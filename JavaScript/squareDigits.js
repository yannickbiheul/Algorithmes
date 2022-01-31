// CodeWars
// Mettre au carré chaque chiffre d'un nombre et concaténer le tout

function squareDigits(num) {
    let result = "";
    let array = num.toString().split('');

    for (let i = 0; i < array.length; i++) {
        result += Number(array[i]) * Number(array[i]);
    }

    return Number(result);
}

console.log(squareDigits(3212));