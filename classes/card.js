function CardInvalidArgException(message) {
    this.name = "CardInvalidArgException";
    this.message = "An invalid argument was passed to the constructor"

    if (message) {
        this.message = message;
    }
}

function CardInvalidArgAmountException(message) {
    this.name = "CardInvalidArgAmountException";
    this.message = "Invalid number of arguments are passed to the constructor";

    if (message) {
        this.message = message;
    }
}

function Card(s, v) {
    var suit = "";
    var value = 0;

    if (arguments.length < 2) {
        throw new CardInvalidArgAmountException("One or more arguments are missing for the Card constructor");
    } else if (arguments.length > 2) {
        throw new CardInvalidArgAmountException("One or more extra arguments are passed to the Card constructor")
    }

    //only set suit to a specific value if a string is provided
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

    // returns a string representation of the current card
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

    // returns the name of the img file for the card (untested)
    this.imgName = function () {
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

        return valueString + "_of_" + suit + ".png";

    }

    // returns the value of the card in relation to all other cards (used for sorting)
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
