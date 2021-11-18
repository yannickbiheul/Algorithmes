<?php

echo "Coucou de removeChar !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/php

// Enlever le premier et le dernier caractère d'une chaine.

// Transformer la chaine en tableau
// Supprimer le 1er et le dernier élément.
// Retourner le tableau transformé en chaine.

function remove_char(string $s): string {
    $array = str_split($s);

    unset($array[0]);
    unset($array[count($array)]);

    return implode($array);
}

echo remove_char("ountr");

// Solution
/*
function remove_char(string $s): string {
    return substr($s,1,-1);
}
*/