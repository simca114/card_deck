function Card(s, v) {
    var suit = "";
    var value = 0;

    //only set suit to a specific value if provided upon creation
    if (s) {
        if ( s == "clubs" || s == "diamonds" || s == ""
        suit = s;
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
