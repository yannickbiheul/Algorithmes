// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who
// Check if a value is classified as a boolean primitive. Return true or false.

// Vérifier si la valeur passée en argument est une valeur booléenne.
// Vérifier la valeur : si elle est égale à "true" OU "false", retourner "true".
// Sinon, retourner "false".

function booWho(bool) {
    let result;
    if (bool === true || bool === false) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

console.log(booWho(true));