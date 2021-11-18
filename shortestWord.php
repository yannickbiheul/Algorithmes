<?php

echo "Coucou de shortestWord !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/php

// On nous donne une phrase, la fonction doit retourner la longueur du mot le plus court.
// Transformer la phrase en tableau
// Faire un tri à bulles sur ce tableau dans l'ordre croissant
// Retourner le 1er élément du tableau

function findShort($str) {
    $array = explode(' ', $str);
    $newArray = [];

    for ($i = 0; $i < count($array); $i++) {
        array_push($newArray, str_split($array[$i]));
    }

    for ($i = count($newArray) - 2; $i >= 0; $i--) {
        for ($j = 0; $j <= $i; $j++) {
            if ($newArray[$j + 1] < $newArray[$j]) {
                $t = $newArray[$j + 1];
                $newArray[$j + 1] = $newArray[$j];
                $newArray[$j] = $t;
            }
        }
    }

    return count($newArray[0]);
}

var_dump(findShort("bitcoin take over the world maybe who knows perhaps"));