function points(games) {
    let total = 0;
    let x;
    let y;

    for (let i = 0; i < games.length; i++) {
        x = Number(games[i].split(':')[0]);
        y = Number(games[i].split(':')[1]);
        if (x > y) {
            total += 3;
        } else if (x < y) {
            total += 0;
        } else if (x === y) {
            total += 1;
        }
    }

    return total;
}

let test = ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"];

console.log(points(test));