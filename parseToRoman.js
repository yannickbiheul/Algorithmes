function parseToRoman(number) {
    const decimal = [1000, 500, 100, 50, 10, 5, 1];
    const roman = ["M", "D", "C", "L", "X", "V", "I"];
    let result = '';

    for (let i = 0; i < decimal.length; i++) {
        while (number%decimal[i] < number) {
            result += roman[i];
            number -= decimal[i];
        }
    }
    
    console.log(result);
    // return result;
}

parseToRoman(1981);
