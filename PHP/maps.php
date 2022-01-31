<?php

echo "Coucou de maps !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

/* CodeWars
Un tableau de nombres entiers est donné.
Retourner ce tableau avec chaque nombre doublés.
*/

function maps($x) {
    // Créer un nouveau tableau
    $array = [];
    // Parcourir le tableau donné
    for ($i = 0; $i < count($x); $i++) {
        // Multiplier l'élément par 2 et l'insérer dans le nouveau tableau
        array_push($array, $x[$i] * 2);
    }
    
    // Retourner le nouveau tableau
    return $array;
}

var_dump(maps([1, 2, 3]));

// Best practice
/*
function maps($x)
{
    return array_map(function($el) {
        return $el * 2;
    }, $x);
}
*/