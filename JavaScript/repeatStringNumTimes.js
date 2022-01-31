function repeatStringNumTimes(str, num) {
    let result = "";
    if (num > 0) {
        let strArray = [str];
        for (let i = 1; i < num; i++) {
            strArray.push(str);
        }
        result = strArray.join('');
    }

    return result;
}

console.log(repeatStringNumTimes("*", 5));