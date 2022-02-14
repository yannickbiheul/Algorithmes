function sumStr(a,b) {
    let result;
    let numberA = Number(a);
    let numberB = Number(b);

    result = numberA + numberB;

    return result.toString(10);
}

console.log(sumStr("4", "5"));