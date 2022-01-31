<?php

echo "Coucou de positiveSum !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

/* CodeWars
Un tableau de nombres est donné, il faut retourner la somme des nombres positifs
*/

function positiveSum($arr) {
    $result = 0;

    for ($i = 0; $i < count($arr); $i++) {
        if ($arr[$i] >= 0) {
            $result+= $arr[$i];
        } 
    }

    return $result;
}

var_dump(positiveSum([-1, -2, -3, -4, -5]));

// Best practice
/*
function positive_sum($a) {
    return array_sum(array_filter($a, function ($n) {return $n > 0;}));
}
*/