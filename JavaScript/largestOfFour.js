function largestOfFour(arr) {
    let arrayOfLargest = [];
    for (let i = 0; i < arr.length; i++) {
        let temp = -1000000;
        for (let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] > temp) {
                temp = arr[i][j];
            }
        }
        arrayOfLargest.push(temp);
    }

    return arrayOfLargest;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
