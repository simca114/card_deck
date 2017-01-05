function CardInvalidArgException(message) {
    this.name = "CardInvalidArgException";
    this.message = "An invalid arguement was passed to the constructor"

    if (message) {
        this.message = message;
    }
}

function CardMissingArgException(message) {
    this.name = "CardMissingArgException";
    this.message = "One or more arguements are missing during the card creation";

    if (message) {
        this.message = message;
    }
}

function Card(s, v) {
    var suit = "";
    var value = 0;

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
