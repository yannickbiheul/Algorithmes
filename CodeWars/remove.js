function remove(string) {
    let result = string.split('');
    while (result[result.length - 1] === "!") {
        result.pop();
    }
    result = result.join('');

    return result;
}

console.log(remove("Hi!!!"));