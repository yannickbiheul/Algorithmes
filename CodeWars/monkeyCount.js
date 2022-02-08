function monkeyCount(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (i > 10) {
            result.push(i - 10);
        } else {
            result.push(i);
        }
    }

    return result;
}

console.log(monkeyCount(20));