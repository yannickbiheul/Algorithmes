function smash(words) {
    return words.join(',').split(',').join(' ');
}

console.log(smash(['hello', 'world', 'this', 'is', 'great']));