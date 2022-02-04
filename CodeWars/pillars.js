function pillars(num_pill, dist, width) {
    if (num_pill < 2) {
        return 0;
    }
    let distCM = dist * 100;
    // 30 + 1500 = 1530
    let largeur = width + distCM;
    // 1530 * 11 = 16830
    let total = largeur * num_pill;
    // 16830 - 1500 = 15330
    total -= distCM;
    // 15330 - (30 * 2) = 15270
    total -= width * 2;

    return total;
}

console.log(pillars(2,20,25));