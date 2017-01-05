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

    this.getSuit = function () {
        return suit;
    }

    this.getValue = function () {
        return value;
    }
}
