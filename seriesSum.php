<?php

echo "Coucou de seriesSum !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

/* CodeWars
Écrire une fonction qui retourne la somme d'une série de calculs.
Series : 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ...
Arrondir la réponse à 2 décimales et retourner une chaine de caractères
SI la valeur donnée est 0, retourner 0.00
Exemples :
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"
*/

function seriesSum($n) {
    $result = 0;
    // Créer un tableau avec la série de calculs
    $serie = [1, 1/4, 1/7, 1/10, 1/13, 1/16];
    // Parcourir le tableau jusqu'au chiffre donné
    for ($i = 0; $i < $n; $i++) {
        $result += $serie[$i];
    }
    // Arrondir le résultat
    $result = round($result, $precision = 2);

    return $result;
}

var_dump(seriesSum(4));