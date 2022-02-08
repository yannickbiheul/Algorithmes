function queue(queuers, pos) {
    let count = 0;
    let buddyTickets = queuers[pos];

    while (buddyTickets > 0) {
        if (pos === 0) {
            pos = queuers.length - 1;
            buddyTickets -= 1;
        } else {
            pos -= 1;
        }
        let temp = queuers[0] - 1;
        queuers.splice(0,1);
        if (temp != 0) {
            queuers.push(temp);
        }
        count++;
    }

    return count;
}

console.log(queue([2, 5, 3, 6, 4], 2)); 
