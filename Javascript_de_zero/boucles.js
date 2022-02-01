let poidsClients = [50, 100, 150, 200, 250, 300];
let total = 0;
let indice = 0;
let tours = 0;

while (total < 500) {
    total += poidsClients[indice];
    indice++;
    tours++;
}

console.log(tours + " tours");
