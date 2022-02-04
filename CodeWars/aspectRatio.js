function aspectRatio(x,y) {
    let result = [];
    let ratio = 16 / 9;
    result.push(Math.ceil(y * ratio));
    result.push(y);

    return result;
}

console.log(aspectRatio(640,480));