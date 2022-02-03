// eachCons([1,2,3,4], 2) => [[1,2],[2,3],[3,4]]
function eachCons(array, n) {
    let tableau1 = [];
    let tableau2 = [];
    for (let i = 0; i < array.length; i++) {
        tableau2 = array.slice(i, n + i);
        if (tableau2.length < n) {
            break;
        }
        tableau1.push(tableau2);
    }
    
    return(tableau1);
}

console.log(eachCons([3,5,8,13], 2));

