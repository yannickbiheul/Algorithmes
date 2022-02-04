function cannonsReady(gunners) {
    let result = "Fire!";

    for (let i = 0; i < Object.values(gunners).length; i++) {
        if (Object.values(gunners)[i] === "nay") {
            result = "Shiver me timbers!"
        }
    }

    return result;
}

console.log(cannonsReady({'Mike':'aye','Joe':'aye','Johnson':'nay','Peter':'aye'}));