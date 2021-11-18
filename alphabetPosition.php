<?php

echo "Coucou de alphabetPosition !";
echo "<br>";
echo "<a href='index.php'>Retour</a>";
echo "<br>";

/* CodeWars
Une chaine de caractère est donnée, créer une fonction qui remplace chaque lettre par sa position dans l'alphabet
*/

function alphabetPosition(string $s): string {
    // Passer tous les caractères en minuscules
    $lowerString = strtolower($s);
    // Transformer la chaine en tableau
    $array = str_split($lowerString);
    $arrayClean = [];
    // Créer une regex "a" à "z"
    $regex = "/[a-z]/";
    $result = "";

    // Parcourir le tableau
    for ($i = 0; $i < count($array); $i++) {
        // Transformer l'élément $array[i] lui-même en tableau
        $arrayTemp = str_split($array[$i]);
        // Vérifier que cet élément est une lettre (entre "a" et "z")
        if (preg_grep($regex, $arrayTemp)) {
            // Si oui, l'insérer dans le tableau $arrayClean
            array_push($arrayClean, $array[$i]);
        }
    }

    // Parcourir ce nouveau tableau
    for ($i = 0; $i < count($arrayClean); $i++) {
        // Faire un switch sur l'élément $arraClean[i]
        switch($arrayClean[$i]) {
            case "a":
                $arrayClean[$i] = "1";
                break;
            case "b":
                $arrayClean[$i] = "2";
                break;
            case "c":
                $arrayClean[$i] = "3";
                break;
            case "d":
                $arrayClean[$i] = "4";
                break;
            case "e":
                $arrayClean[$i] = "5";
                break;
            case "f":
                $arrayClean[$i] = "6";
                break;
            case "g":
                $arrayClean[$i] = "7";
                break;
            case "h":
                $arrayClean[$i] = "8";
                break;
            case "i":
                $arrayClean[$i] = "9";
                break;
            case "j":
                $arrayClean[$i] = "10";
                break;
            case "k":
                $arrayClean[$i] = "11";
                break;
            case "l":
                $arrayClean[$i] = "12";
                break;
            case "m":
                $arrayClean[$i] = "13";
                break;
            case "n":
                $arrayClean[$i] = "14";
                break;
            case "o":
                $arrayClean[$i] = "15";
                break;
            case "p":
                $arrayClean[$i] = "16";
                break;
            case "q":
                $arrayClean[$i] = "17";
                break;
            case "r":
                $arrayClean[$i] = "18";
                break;
            case "s":
                $arrayClean[$i] = "19";
                break;
            case "t":
                $arrayClean[$i] = "20";
                break;
            case "u":
                $arrayClean[$i] = "21";
                break;
            case "v":
                $arrayClean[$i] = "22";
                break;
            case "w":
                $arrayClean[$i] = "23";
                break;
            case "x":
                $arrayClean[$i] = "24";
                break;
            case "y":
                $arrayClean[$i] = "25";
                break;
            case "z":
                $arrayClean[$i] = "26";
                break;
            default:
                $arrayClean[$i] = "0";
                break;
        }
    }

    // Transormer le tableau $arrayClean en chaine de caractères
    $stringClean = implode(' ', $arrayClean);

    return $stringClean;
}

var_dump(alphabetPosition('The sunset sets at twelve o\' clock.'));

// Best practice
/*
function alphabet_position(string $s): string {
    
    $result = [];
    
    for ($i = 0; $i < strlen($s); $i++) {

        if (preg_match("/^[a-zA-Z]$/", $s[$i])) {
        $result[] = ord(strtolower($s[$i])) - ord('a') + 1;
        }
    }
    
    return join(' ', $result);
}
*/