<?php

// Bubble sort
function bubbleSort($array) {
    for ($i = count($array) - 2; $i >= 0; $i--) {
        for ($j = 0; $j <= $i; $j++) {
            if ($array[$j + 1] < $array[$j]) {
                $t = $array[$j + 1];
                $array[$j + 1] = $array[$j];
                $array[$j] = $t;
            }
        }
    }

    return $array;
}

var_dump(bubbleSort([5, 10, 7, 24, 49, 2]));