function bitsBattle(numbers) {
    // Créer un tableau pairs et un tableau impairs, ainsi que les compteurs de 0 et 1
    let tabPair = [];
    let tabImpair = [];
    let compteur0 = 0;
    let compteur1 = 0;
    // Parcourir le tableau donné pour remplir ces 2 tableaux
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            tabPair.push(numbers[i]);
        } else if (numbers[i] % 2 === 1) {
            tabImpair.push(numbers[i]);
        }
    }
    // Convertir chaque éléments du tableau pairs en binaire, et ajouter les 0 au compteur 0
    for (let i = 0; i < tabPair.length; i++) {
        tabPair[i] = tabPair[i].toString(2);
        for (let j = 0; j < tabPair[i]; j++) {
            if (tabPair[i][j] === "0") {
                compteur0++;
            }
        }
    }
    // Convertir chaque éléments du tableau impairs en binaire, et ajouter les 1 au compteur 1
    for (let i = 0; i < tabImpair.length; i++) {
        tabImpair[i] = tabImpair[i].toString(2);
        for (let j = 0; j < tabImpair[i]; j++) {
            if (tabImpair[i][j] === "1") {
                compteur1++;
            }
        }
    }

    // Comparer les deux compteurs
    if (compteur0 < compteur1) {
        return "odds win";
    } else if (compteur0 > compteur1) {
        return "evens win";
    } else {
        return "tie";
    }

}

console.log(bitsBattle([3, 8, 22, 15, 78]));