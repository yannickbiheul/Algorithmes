// abbrevName("Sam Harris") => S.H
function abbrevName(name) {
    let noms = name.split(' ');
    let prenom = noms[0];
    let nom = noms[1];
    let initiales = prenom[0] + "." + nom[0];
    return initiales.toUpperCase();
}

console.log(abbrevName("Yannick Biheul"));