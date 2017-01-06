var configs = new CardDefinition();


/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "Test if new Deck has all 52 cards (true if all tests pass)", function (assert) {
    var deck = new Deck();
    var tester = {};

    for (val = 1; val <= 52; val++) {
        tester[val.toString()] = false;
    }

    deck.getCards().forEach(function (card) {
        var relVal = card.relativeValue();
        tester[relVal.toString()] = true;
    });

    for (relativeValue in tester) {
        assert.ok(
            tester[relativeValue],
            "Card with relative value (" + relativeValue + ") exists"
        );
    }
});
