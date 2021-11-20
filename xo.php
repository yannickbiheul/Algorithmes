<?php

echo "Coucou de xo !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

/* CodeWars
Une chaine de caractères est donnée.
Créer une fonction qui vérifie qu'il y a autant de "x" que de "o".
Insensible à la casse
Si l n'y a pas de "x" ou de "o", retourner true
*/

function XO($s) {
    $result = 0;
    // Transformer la chaine en minuscules
    $lowerString = strtolower($s);
    // Transformer cette chaine en tableau
    $array = str_split($lowerString);
    // Créer les variables compteurs
    $countX = 0;
    $countO = 0;

    // Parcourir le tableau et compter le nombre de "x" et de "o"
    for ($i = 0; $i < count($array); $i++) {
        if ($array[$i] == "x") {
            $countX++;
        } else if ($array[$i] == "o") {
            $countO++;
        }
    }

    // Vérifier si les compteurs sont égaux
    if ($countX == $countO) {
        $result = true;
    } else {
        $result = false;
    }

    // Si il n'y a pas de "x" ou de "o", retourner true
    if ($countO == 0 && $countX == 0) {
        $result = true;
    }

    return $result;
}

var_dump(XO("xoO"));

// Best practice
/*
function XO($s) {
    $lower = strtolower($s);
    return substr_count($lower, 'x') === substr_count($lower, 'o');
}
*/