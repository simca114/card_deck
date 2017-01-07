function Deck() {
    var config = new CardDefinition();
    var cards = [];

    // generate all of the cards that belong in a deck of cards
    config.getSuits().forEach(function (suit) {
        config.getValues().forEach(function (val) {
            cards.push(new Card(suit, val));
        });
    });

    // getter method for the all of the cards in a deck
    this.getCards = function () {
        return cards;
    }

    // method to shuffle the card order
    this.shuffle = function () {
        cards.sort(function (a, b) {
            var randomNumber = Math.random();
            if (randomNumber < .33) {
                return -1;
            } else if (randomNumber > .66) {
                return 1;
            }

            return 0;
        });
        cards.forEach(function (card) {
            console.log(card.relativeValue());
        });
    }

    // method to sort the cards in order
    this.sort = function () {
        cards.sort(function (a, b) {
            var relValA = a.relativeValue();
            var relValB = b.relativeValue();

            if (relValA < relValB) {
                return -1;
            } else if (relValA > relValB) {
                return 1;
            }

            return 0;
        });
    }
}
