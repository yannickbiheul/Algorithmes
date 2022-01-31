function reverseString(str) {
    let array = str.split('');
    let reverse = array.reverse();
    let newString = reverse.join('');
    return newString;
}

console.log(reverseString("Bonjour je m'appelle Yannick Biheul"));