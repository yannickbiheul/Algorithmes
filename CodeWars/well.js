function well(x) {
    let countGood = 0
    let countBad = 0;

    for (let i = 0; i < x.length; i++) {
        if (x[i] === "good") {
            countGood += 1;
        } else if (x[i] === "bad") {
            countBad += 1;
        } else {
            countGood == 0;
            countBad += 0;
        }
    }

    if (countGood > 0 && countGood <= 2) {
        return "Publish!";
    } else if (countGood > 2) {
        return "I smell a series!";
    } else {
        return "Fail!";
    }
}