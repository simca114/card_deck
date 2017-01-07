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

/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "Test if new Deck has exactly 52 cards", function (assert) {
    var deck = new Deck();

    assert.ok(
        deck.getCards().length == 52,
        "A newly created deck has 52 cards"
    );
});

/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "Test if Deck.shuffle() changes the order of the cards without destroying any cards (multiple runthroughs)", function (assert) {
    for (deckNum = 1; deckNum <= 5; deckNum++) {
        var deck = new Deck();

        for (timesShuffled = 1; timesShuffled <= 10; timesShuffled++) {
            var messagePrefix = "Deck " + deckNum.toString() + " shuffled " + timesShuffled.toString() + " time(s),";

            // run the shuffle method, capturing the order of the cards before and after the shuffle
            var oldCardOrder = [];
            deck.getCards().forEach(function (card) {
                oldCardOrder.push(card.relativeValue());
            });

            deck.shuffle();
            var newCardOrder = [];
            deck.getCards().forEach(function (card) {
                newCardOrder.push(card.relativeValue());
            });

            // deck still has 52 cards post shuffle
            assert.ok(
                newCardOrder.length == 52,
                messagePrefix + " still has 52 cards"
            );

            // deck still has 52 unique, valid cards post shuffle
            var uniqueRelativeValues = [];

            deck.getCards().forEach(function (card) {
                var currentRelVal = card.relativeValue();
                if ($.inArray(currentRelVal, uniqueRelativeValues) == -1) {
                    uniqueRelativeValues.push(currentRelVal);
                }
            });
            assert.ok(
                uniqueRelativeValues.length == 52,
                messagePrefix + " still has 52 unique cards"
            );

            // at least 1 card position is different post shuffle
            var orderIsNotEqual = false;

            for(index = 0; index < newCardOrder.length; index++) {
                if ( oldCardOrder[index] != newCardOrder[index] ) {
                    orderIsNotEqual = true;
                    break;
                }
            }
            assert.ok(
                orderIsNotEqual,
                messagePrefix + " has at least 1 card in a different position of the deck"
            );
        }
    }
});

/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "Test if Deck.sort() orders of the cards in ascending order without destroying any cards (multiple runthroughs). NOTE: uses Deck.shuffle() to rescramble card order", function (assert) {
    for (deckNum = 1; deckNum <= 5; deckNum++) {
        var deck = new Deck();

        for (timesSorted = 1; timesSorted <= 10; timesSorted++) {
            var messagePrefix = "Deck " + deckNum.toString() + " shuffled then sorted " + timesSorted.toString() + " time(s),";

            deck.shuffle();
            deck.sort();

            // deck still has 52 cards post shuffle
            assert.ok(
                deck.getCards().length == 52,
                messagePrefix + " still has 52 cards"
            );

            // deck still has 52 unique, valid cards post shuffle
            var uniqueRelativeValues = [];

            deck.getCards().forEach(function (card) {
                var currentRelVal = card.relativeValue();
                if ($.inArray(currentRelVal, uniqueRelativeValues) == -1) {
                    uniqueRelativeValues.push(currentRelVal);
                }
            });
            assert.ok(
                uniqueRelativeValues.length == 52,
                messagePrefix + " still has 52 unique cards"
            );

            // the first card in the deck has the relative value of 1
            assert.ok(
                deck.getCards()[0].relativeValue() == 1,
                messagePrefix + " first card has a relative value of 1"
            );

            // for the second card till the end, each card has a relative value greater than the previous one by exactly one
            // we can use 0 as the initial offset because the previous test checks if the first card has a relative value of 1
            var previousValue = 0;
            var sorted = true;
            deck.getCards().forEach(function (card) {
                var difference = card.relativeValue() - previousValue;
                if (difference == 1) {
                    previousValue++;
                } else {
                    sorted = false;
                }
            });
            assert.ok(
                sorted,
                messagePrefix + " every card after the first one has a relative value greater than the previous one by exactly one"
            );
        }
    }
});
