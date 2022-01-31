let fin = false;
const Yeclair = 10;
const Xeclair = 5;
let Ythor = 2;
let Xthor = 3;

while(!fin) {
    let direction = "";

    if (Ythor > Yeclair) {
        direction += "N";
        Ythor--;
    } else if (Ythor < Yeclair) {
        direction += "S";
        Ythor++;
    }

    if (Xthor > Xeclair) {
        direction += "W";
        Xthor--;
    } else if (Xthor < Xeclair) {
        direction += "E";
        Xthor++;
    }

    if (Ythor === Yeclair && Xthor === Xeclair) {
        console.log("Terminé !");
        fin = true;
    } else {
        console.log("Déplacer Thor vers " + direction + ".");
    }
}