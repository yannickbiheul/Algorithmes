function sixToast(num) {
    let result = 6 - num;

    while (result >= 6) {
        result = num - 6;
    }

    if (result < 0) {
        result = result - result * 2;
    }

    return result;
}

console.log(sixToast(17)); 