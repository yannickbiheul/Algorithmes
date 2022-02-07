function dutyFree(normPrice, discount, hol) {
    let result = (normPrice * discount) / 100;
    result = hol / result;

    return Math.floor(result);
}

console.log(dutyFree(10, 10, 500)); // ((10 * 10) / 100) = 1 ; 500 / 1 = 500;
console.log(dutyFree(12, 50, 1000)); // 166