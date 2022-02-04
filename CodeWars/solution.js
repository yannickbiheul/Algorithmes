function solution(str) {
    let tableau = str.split('');
    let tableauInverse = tableau.reverse();
    let result = tableauInverse.join();

    return result;
}

console.log(solution("world"));