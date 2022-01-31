<?php

echo "Coucou de highAndLow !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

/* CodeWars
Une chaine de caractères est donnée, contenant des nombres séparés par des espaces.
Créer une fonction qui retourne le nombre le plus haut et le nombre le plus bas.
La sortie doit être une chaine de caractères contant 2 nombres séparés par un espace, le plus haut en premier.
*/

function highAndLow($numbers) {
    $regex = "/[0-9]/";
    $arrayClean = [];

    // Transformer la chaine en tableau
    $array = explode(" ", $numbers);
    // Parcourir ce tableau et insérer chaque valeur numérique dans le tableau arrayClean
    for ($i = 0; $i < count($array); $i++) {
        if (preg_match($regex, $array[$i])) {
            array_push($arrayClean, $array[$i]);
        }
    }

    // Trier le tableau arrayClean dans l'ordre croissant
    for ($i = count($arrayClean) - 2; $i >= 0; $i--) {
        for ($j = 0; $j <= $i; $j++) {
            if ($arrayClean[$j + 1] < $arrayClean[$j]) {
                $t = $arrayClean[$j + 1];
                $arrayClean[$j + 1] = $arrayClean[$j];
                $arrayClean[$j] = $t;
            }
        }
    }

    // Créer un nouveau tableau
    $newArray = [];
    // Insérer dans ce tableau la valeur la plus haute et la plus basse
    array_push($newArray, $arrayClean[count($arrayClean) - 1]);
    array_push($newArray, $arrayClean[0]);

    // Transformer ce tableau en chaine avec un espace comme séparateur
    $string = implode(" ", $newArray);

    return $string;
}

var_dump(highAndLow("42 -9"));

// Best practice
/*
function highAndLow($numbers) {
    $a = explode(' ', $numbers);
    return max($a) . " " . min($a);
}
*/