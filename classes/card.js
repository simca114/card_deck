function CardException(message) {
    this.name = "CardException";
    this.message = message;
}

function Card(s, v) {
    var suit = "";
    var value = 0;

    //only set suit to a specific value if provided upon creation
    if (s) {
        if ( s == "clubs" || s == "diamonds" || s == "hearts" || s == "spades" ) {
            suit = s;
        } else {
            throw new CardException("Invalid suit passed");
        }
    }

    if (v) {
        value = v;
    }

    this.getSuit = function () {
        return suit;
    }

    this.getValue = function () {
        return value;
    }
}
