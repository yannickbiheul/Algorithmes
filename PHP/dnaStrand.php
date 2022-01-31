<?php

echo "Coucou de dnaStrand !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/php
// Une chaine de caractères avec que des "C", des "G", des "T" et des "A" est donnée.
// Remplacer les "T" par des "A" et inversement. Faire pareil pour les "G" et les "C"

// Transformer la chaine en tableau
// Parcourir ce tableau et remplacer les lettres.
// Transformer le tableau en chaine de caractères.
// Retourner cette chaine.

function DNA_strand($str) {
    $array = str_split($str);

    for ($i = 0; $i < count($array); $i++) {
        switch($array[$i]) {
            case "A":
                $array[$i] = "T";
                break;
            case "T":
                $array[$i] = "A";
                break;
            case "C":
                $array[$i] = "G";
                break;
            case "G":
                $array[$i] = "C";
                break;
            default:
                $array[$i] = "";
        }
    }

    return implode($array);
}

var_dump(DNA_strand("TAACG"));

// Solution :
/*
function DNA_strand($dna) {
    return strtr($dna, 'ACGT', 'TGCA');
}
*/