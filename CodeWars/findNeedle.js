// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) => "found the needle at position 5"
function findNeedle(haystack) {
    let position;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === "needle") {
            position = i;
            break;
        }
    }
    return "found the needle at position " + position;
}

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));