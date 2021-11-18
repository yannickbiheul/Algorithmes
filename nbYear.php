<?php

echo "Coucou de nbYear !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

/* CodeWars
Dans une petite ville la population est de 1000 habitants au début d'une année.
Cette population augmente de 2% par an, et 50 habitants rejoignent la ville chaque année.
Combien d'années la ville a-t'elle besoin pour voir sa population plus grande ou égale à 1200 habitants ?
Créer une fonction qui calcule ce nombre d'années.
Elle prend en paramètres la population n(0), le pourcentage d'habitants en plus, le nombre d'habitant s'installant dans la ville, et la population à atteindre.
*/

function nbYear($p0, $percent, $aug, $p) {
    // Convertir le pourcentage
    $percent /= 100;

    /*
    Nombre d'habitants au bout d'un an :
    $result = $p0 + $p0 * $percent + $aug;
    */

    // Création d'une variable "count" pour compter le nombre d'années nécessaires
    $count = 0;
    // Tant que $p0 est inférieur à $p
    while ($p0 < $p) {
        // Augmenter p0 d'une année
        $p0 = $p0 + $p0 * $percent + $aug;
        // Incrémenter le compteur
        $count++;
    }

    // Retourner la valeur du compteur
    return $count;
}

var_dump(nbYear(1000, 2, 50, 1200));