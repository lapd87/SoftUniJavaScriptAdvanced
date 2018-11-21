let result = (function cards() {

    let Faces = ["2", "3", "4", "5", "6", "7", "8", "9",
        "10", "J", "Q", "K", "A"];

    let Suits = {
        SPADES: "♠",
        HEARTS: "♥",
        DIAMONDS: "♦",
        CLUBS: "♣"
    };

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }


        get face() {
            return this._face;
        }

        set face(value) {
            if (Faces.includes(value)) {
                this._face = value;
            } else {
                throw Error(`Invalid face ${value}`);
            }
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (Object.values(Suits).includes(value.toUpperCase())) {
                this._suit = value;
            } else {
                throw Error(`Invalid suit ${value}`);
            }
        }

        toString() {
            return `${this._face}${this._suit}`;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    };
})();

let Card = result.Card;
let Suits = result.Suits;

let card = new Card("Q", Suits.CLUBS);
card.face = "A";
card.suit = Suits.DIAMONDS;
console.log(card.toString());

// let card2 = new Card("1", Suits.DIAMONDS);
