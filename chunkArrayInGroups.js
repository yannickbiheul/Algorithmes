// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Diviser le tableau du 1er argument en plusieurs tableaux dont la longueur est définie par le 2ème argument
// chunkArrayInGroups(["a", "b", "c", "d"], 2) doit retourner [["a", "b"], ["c", "d"]]

function chunkArrayInGroups(arr, size) {
    let array = [];
    
    for (let i = 0; i < arr.length; i += size) {
        let tab = [];
        for (let j = i; j < size + i; j++) {
            if (arr[j] != undefined) {
                tab.push(arr[j]);
            }
            
        }
        array.push(tab);
    }

    return array;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));