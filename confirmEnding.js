function confirmEnding(str, target) {
    let strArray = str.split('');
    let test = strArray.splice(strArray.length - target.length, target.length).join('');
    let result;
    if (test === target) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

console.log(confirmEnding("Open sesame", "same"));