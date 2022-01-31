<?php

echo "Coucou de repeatStr !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

// CodeWars

// Écrire une fonction qui retourne une chaine de caractères répétée un nombre de fois donné.
// Créer une variable "result"
// Créer une boucle sur le nombre "n"
// Concaténer la chaine de caractère dans la variable "result" à chaque itération

function repeatStr($n, $str) {
    $result = "";

    for ($i = 0; $i < $n; $i++) {
        $result = $result . $str;
    }

    return $result;
}

echo repeatStr(3, "*");