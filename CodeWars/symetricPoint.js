function symetricPoint(p,q) {
    let result = [];
    // Calculer la différence entre les points p et q
    let diffX = q[0] - p[0];
    let diffY = q[1] - p[1];
    // Ajouter ces différences aux point q
    newX = q[0] + diffX;
    newY = q[1] + diffY;
    // Ajouter le résultat au tableau result
    result.push(newX, newY);

    return result;
}

console.log(symetricPoint([2, 6], [-2, -6])); // [2,2]