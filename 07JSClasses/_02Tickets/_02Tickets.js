function ticketsDB(input, sorting) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = +price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let ticketData of input) {
        ticketData = ticketData.split("|");

        let ticket = new Ticket(ticketData[0],
            ticketData[1], ticketData[2]);

        tickets.push(ticket);
    }

    switch (sorting) {
        case"destination":
            tickets = tickets.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case"price":
            tickets = tickets.sort((a, b) => a - b);
            break;
        case"status":
            tickets = tickets.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    return tickets;
}

console.log(ticketsDB(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'));

console.log(ticketsDB(['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'status'));