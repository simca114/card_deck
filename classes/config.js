function CardDefinition() {
    var suits = ["clubs", "diamonds", "hearts", "spades"];
    var values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    this.getSuits = function () {
        return suits;
    };

    this.getValues = function () {
        return values;
    };
}
