// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// Une phrase est donnée en argument. La fonction doit retourner la même phrase, mais tous les mots doivent commencer par une majuscule.
// Si certaines lettres sont déja en majuscules, les mettre en miniscules.

// Passer toute la phrase en minuscules
// Créer un tableau result
// Tranformer la phrase en tableau de mots
// Parcourir chaque mot, et passer la première lettre (index[0]) en majuscules
// Insérer ce mot dans le tableau result
// Transfomer le tableau result en chaine de caractère
// Retourner ce tableau

function titleCase(str) {
    let phrase = str.toLowerCase();
    let result = [];
    let array = phrase.split(' ');

    for (let i = 0; i < array.length; i++) {
        let mot = array[i].split('');
        let firstLetter = mot[0].toUpperCase();
        mot.shift();
        mot.unshift(firstLetter);
        let strMot = mot.join('');
        result.push(strMot);
    }

    return result.join(' ');
}

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));