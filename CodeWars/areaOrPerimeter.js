function areaOrPerimeter(l,w) {
    if (l === w) {
        return l * w;
    } else {
        return l * 2 + w * 2;
    }
}

console.log(areaOrPerimeter(6,10));