// eachCons([1,2,3,4], 2) => [[1,2],[2,3],[3,4]]
function eachCons(array, n) {
    let tableau1 = [];
    let tableau2 = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < n; j++) {
            if (array[i + j]) {
                tableau2.push(array[i + j]);
            } else {
                break;
            } 
        }
        tableau1.push(tableau2);
        tableau2 = [];
    }
    // console.log(tableau1[tableau1.length - 1][0]);
    // console.log(array[array.length - 1]);
    if (tableau1[tableau1.length - 1][0] === array[array.length - 1]) {
        tableau1.pop();
    }
    
    return(tableau1);
}

console.log(eachCons([3,5,8,13], 1));