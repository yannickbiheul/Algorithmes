function findLongestWordLength(str) {
    let array = str.split(' ');
    let result = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > result) {
            result = array[i].length;
        }
    }
    return result;
}

console.log(findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"));