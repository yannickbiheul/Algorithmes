function iceBrickVolume(radius, bottleLength, rimLength) {
    let brickLength = bottleLength - rimLength;
    let brickHeight = radius * 2;

    return (brickLength * brickHeight) * radius;
}

console.log(iceBrickVolume(5,30,7));