<?php

echo "Coucou de nbDigit !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

/* CodeWars
Prenons un nombre "n" (sypérieur ou égal à 0) et un nombre "d" (compris entre 0 et 9).
Mettre au carré (nombre "k") chaque nombre entre 0 et "n".
Compter tous les nombres "d" utilisés pour écrire ces nombres "k"
Exemple avec n = 10 et d = 1
nombres k : 0,1,4,9,16,25,36,49,64,81,100.
On utilise le nombre "d" (1) dans : 1,16,81 et 100.
Il y a donc 4 nombres "d" dans les nombres "k".
*/

function nbDigit($n, $d) {
    $result = 0;

    // Créer un tableau qui contiendra les nombres "k"
    $arrayK = [];
    // Le remplir avec les carrés des nombres allant de 0 à "n"
    for ($i = 0; $i <= $n; $i++) {
        array_push($arrayK, pow($i, 2));
    }
    
    // Parcourir le tableau arrayK
    for ($i = 0; $i < count($arrayK); $i++) {
        // transformer la valeur "i" en tableau
        $arrayK[$i] = array_map('intval', str_split($arrayK[$i]));
        // Parcourir cet élément
        for ($j = 0; $j < count($arrayK[$i]); $j++) {
            // Si l'élément "j" de l'élément "i" est égal à "d"
            if ($arrayK[$i][$j] == $d) {
                // Incrémenter $result
                $result++;
            }
        }
    }

    return $result;
}

var_dump(nbDigit(5750, 0));

// best practice
/*
function nbDig(int $n, int $d) : int {
    $count = 0;
    for ($i = 0; $i <= $n; $i++) {
        $count += substr_count((string)(pow($i, 2)), (string)$d);
    }
    return $count;
}
*/