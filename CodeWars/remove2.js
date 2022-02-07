function remove(string) {
    let result = string.split('');
    while (result.includes("!")) {
        result.splice(result.indexOf("!"), 1);
    }

    return result.join('') + "!";
}

console.log(remove("kpvrpx!!!!!"));