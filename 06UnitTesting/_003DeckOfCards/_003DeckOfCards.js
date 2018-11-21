function printDeckOfCards(cardArray) {

    let resultCards = [];

    for (let cardData of cardArray) {
        let suit = cardData.slice(cardData.length - 1);
        let face = cardData.replace(suit, "");

        let card;
        try {
            card = makeCard(face, suit);
            resultCards.push(card);
        } catch (e) {
            console.log(`Invalid card: ${cardData}`);
            return;
        }
    }

    console.log(resultCards.join(" "));

    function makeCard(face, suit) {

        let validFaces = ['2', '3', '4', '5', '6', '7', '8',
            '9', '10', 'J', 'Q', 'K', 'A'];
        let validSuits = new Map();
        validSuits.set("S", "\u2660");
        validSuits.set("H", "\u2665");
        validSuits.set("D", "\u2666");
        validSuits.set("C", "\u2663");

        face = face.toUpperCase();
        suit = suit.toUpperCase();

        if (!validFaces.includes(face)
            || !validSuits.has(suit)) {
            throw  new RangeError();
        }

        suit = validSuits.get(suit);

        return {
            face,
            suit,
            toString: () => {
                return face + suit;
            }
        }
    }
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);