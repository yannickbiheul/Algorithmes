<?php

echo "Coucou de binaryToNumber !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

/* CodeWars
Un tableau de 0 et de 1 est donné.
Créer une fonction qui converti la valeur binaire en nombre entier.
[0, 0, 0, 1] ==> 1
Les tableaux peuvent avoir différentes longueurs.
Convertir un nombre binaire en décimal :
https://fr.wikihow.com/convertir-un-nombre-binaire-en-nombre-d%C3%A9cimal
*/

function binaryToNumber($arr) {
    $result = 0;

    // Créer un tableau contenant des puissances de 2 dans l'ordre croissant
    $array = [];
    for ($i = 0; $i < count($arr); $i++) {
        array_push($array, pow(2, $i));
    }
    // Inverser ce tableau pour obtenir le tableau des puissances
    $arrayPuissances = array_reverse($array);

    // Parcourir le tableau donné
    for ($i = 0; $i < count($arr); $i++) {
        // Si la valeur "i" du tableau donné est égale à 1
        if ($arr[$i] == 1) {
            // Ajouter la valeur "i" du tableau des puissances à "result"
            $result += $arrayPuissances[$i];
        }
    }

    return $result;
}

var_dump(binaryToNumber([1, 0, 0, 1]));

// Best practice
/*
function binaryArrayToNumber(array $arr): int {
    return bindec(implode('', $arr));
}
*/