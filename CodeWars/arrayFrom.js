console.log(Array.from({length: 5}, function(item, index) {
    return index;
}))

console.log(Array.from({length: 5}, (item, index) => {
    return index;
}))