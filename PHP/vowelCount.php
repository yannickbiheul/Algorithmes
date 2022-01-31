<?php
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/php

echo "Coucou de vowelCount !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

// Compter le nombre de voyelles dans une phrase

function getCount($str) {
    $vowelCount = 0;
    $array = str_split($str);

    for ($i = 0; $i < count($array); $i++) {
        if ($array[$i] == "a" || $array[$i] == "e" || $array[$i] == "i" || $array[$i] == "o" || $array[$i] == "u") {
            $vowelCount++;
        }
    }

    return $vowelCount;
}

var_dump(getCount("abracadabra"));