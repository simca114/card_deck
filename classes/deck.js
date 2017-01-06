/*
function CardInvalidArgException(message) {
    this.name = "CardInvalidArgException";
    this.message = "An invalid argument was passed to the constructor"

    if (message) {
        this.message = message;
    }
}
*/

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
}

/*
function Card(s, v) {
    var suit = "";
    var value = 0;

    if (arguments.length < 2) {
        throw new CardInvalidArgAmountException("One or more arguments are missing for the Card constructor");
    } else if (arguments.length > 2) {
        throw new CardInvalidArgAmountException("One or more extra arguments are passed to the Card constructor")
    }

    //only set suit to a specific value if provided
    if (typeof s === 'string') {
        //only set the suit if a valid suit is provided
        if ( s == "clubs" || s == "diamonds" || s == "hearts" || s == "spades" ) {
            suit = s;
        } else {
            throw new CardInvalidArgException("Invalid suit passed");
        }
    } else {
        throw new CardInvalidArgException("Invalid suit data type passed (should be string)");
    }

    //only set the value if a number is provided
    if (typeof v === 'number') {
        //only set the value if a valid value is provided
        if (v >= 1 && v <= 13) {
            value = v;
        } else {
            throw new CardInvalidArgException("Invalid value passed");
        }
    } else {
        throw new CardInvalidArgException("Invalid value data type passed (should be number)");
    }

    // getter function for the card's suit
    this.getSuit = function () {
        return suit;
    }

    // getter function for the card's value
    this.getValue = function () {
        return value;
    }

    this.toString = function () {
        var valueString = "";

        if (value >= 2 && value <= 10) {
            valueString = value.toString();
        } else {
            switch (value) {
                case 1:
                    valueString = "ace";
                    break;
                case 11:
                    valueString = "jack";
                    break;
                case 12:
                    valueString = "queen";
                    break;
                case 13:
                    valueString = "king";
                    break;
            }
        }

        return valueString + " of " + suit;
    }

    // returns the value of the card in relation to all other cards
    this.relativeValue = function () {
        var offset = 0;

        // apply an offset to the cards value based on its suit
        switch (suit) {
            case "clubs":
                offset = 0;
                break;
            case "diamonds":
                offset = 13;
                break;
            case "hearts":
                offset = 26;
                break;
            case "spades":
                offset = 39;
        }

        return value + offset;
    }
}
*/
