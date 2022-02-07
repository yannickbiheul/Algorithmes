function remove(string) {
    let result = string.split('');
    while (result[result.length - 1] === "!") {
        result.pop();
        break;
    }
    result = result.join('');

    return result;
}

console.log(remove("Hi!!!"));