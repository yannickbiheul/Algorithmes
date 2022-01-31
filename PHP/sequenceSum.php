<?php

echo "Coucou de sequenceSum !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

/* CodeWars
Créer une fonction qui retourne la somme d'une séqueneces de nombres entiers.
La séquence est définie par 3 valeurs non négatives : début, fin, pas.
Si la valeur de début est supérieure à celle de fin, retourner 0.
Exemples : 2,2,2 => 2 | 2,6,2 => 12 (2 + 4 + 6)
*/

function sequenceSum(int $begin, int $end, int $step): int {
    $result = 0;
    $array = [];

    // Si begin est supérieur à end
    if ($begin > $end) {
        $result = 0;
    }

    for ($i = $begin; $i <= $end; $i+= $step) {
        array_push($array, $i);
    }

    for ($i = 0; $i < count($array); $i++) {
        $result+= $array[$i];
    }

    return $result;
}

var_dump(sequenceSum(1, 5, 1));

// Best practice
/*
function sequence_sum(int $begin, int $end, int $step): int {
    $sum = 0;
    for ($begin; $begin <= $end; $begin += $step) {
        $sum += $begin;
    }
    return $sum;
}
*/