function rps(p1, p2) {
    let result;

    if (p1 === "rock") {
        if (p2 === "rock") {
            return "Draw!";
        } else if (p2 === "paper") {
            return "Player 2 won!";
        } else if (p2 === "scissors") {
            return "Player 1 won!";
        } else {
            return "Choice of player 2 doesn't exists !";
        }
    } else if (p1 === "paper") {
        if (p2 === "rock") {
            return "Player 1 won!";
        } else if (p2 === "paper") {
            return "Draw!";
        } else if (p2 === "scissors") {
            return "Player 2 won!";
        } else {
            return "Choice of player 2 doesn't exists !";
        }
    } else if (p1 === "scissors") {
        if (p2 === "rock") {
            return "Player 2 won!";
        } else if (p2 === "paper") {
            return "Player 1 won!";
        } else if (p2 === "scissors") {
            return "Draw!";
        } else {
            return "Choice of player 2 doesn't exists !";
        }
    } else {
        return "Choice of player 1 doesn't exists !";
    }
}

console.log(rps('paper', 'paper'));