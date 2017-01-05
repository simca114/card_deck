var configs = new CardDefinition();

/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "Create a new card with given suit and value (All valid cards)", function (assert) {
    for (val = 1; val <= 13; val++) {
        var suit = "clubs";
        var value = val.toString();
        var newCard = new Card(suit, val);
        assert.ok(
            $.inArray(newCard.getSuit(), configs.getSuits()) != -1,
            suit + " is a valid suit!"
        );
        assert.ok(
            $.inArray(newCard.getValue(), configs.getValues()) != -1,
            value + " is a valid value!"
        );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "diamonds";
        var value = val.toString();
        var newCard = new Card(suit, val);
        assert.ok(
            $.inArray(newCard.getSuit(), configs.getSuits()) != -1,
            suit + " is a valid suit!"
        );
        assert.ok(
            $.inArray(newCard.getValue(), configs.getValues()) != -1,
            value + " is a valid value!"
        );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "hearts";
        var value = val.toString();
        var newCard = new Card(suit, val);
        assert.ok(
            $.inArray(newCard.getSuit(), configs.getSuits()) != -1,
            suit + " is a valid suit!"
        );
        assert.ok(
            $.inArray(newCard.getValue(), configs.getValues()) != -1,
            value + " is a valid value!"
        );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "spades";
        var value = val.toString();
        var newCard = new Card(suit, val);
        assert.ok( $.inArray(newCard.getSuit(), configs.getSuits()) != -1, suit.concat(" is a valid suit!") );
        assert.ok( $.inArray(newCard.getValue(), configs.getValues()) != -1, value.concat(" is a valid value!") );
    }
});

/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "Create a new card with given suit and value (valid value, invalid suit)", function (assert) {
    for (val = 1; val <= 13; val++) {
        var suit = "clovers";
        var value = val.toString();
        assert.throws(
            function () {
                new Card(suit, val)
            },
            CardInvalidArgException,
            suit + " is not a valid suit (value " + value + "), CardInvalidArgException thrown"
        );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "kites";
        var value = val.toString();
        assert.throws(
            function () {
                new Card(suit, val)
            },
            CardInvalidArgException,
            suit + " is not a valid suit (value " + value + "), CardInvalidArgException thrown"
        );
    }
    for (val = 1; val <= 13; val++) {
        var suit = "pinenuts";
        var value = val.toString();
        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardInvalidArgException,
            suit + " is not a valid suit (value " + value + "), CardInvalidArgException thrown"
        );
    }
});

/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "Create a new card with given suit and value (invalid value, valid suit)", function (assert) {
    configs.getSuits().forEach(function (suit) {
        var val = 0;
        var value = val.toString();

        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardInvalidArgException,
            value + " is not a valid value (suit " + suit + "), CardInvalidArgException thrown"
        );
    });
    configs.getSuits().forEach(function (suit) {
        var val = 14;
        var value = val.toString();

        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardInvalidArgException,
            value + " is not a valid value (suit " + suit + "), CardInvalidArgException thrown"
        );
    });
    configs.getSuits().forEach(function (suit) {
        var val = -1;
        var value = val.toString();

        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardInvalidArgException,
            value + " is not a valid value (suit " + suit + "), CardInvalidArgException thrown"
        );
    });
    configs.getSuits().forEach(function (suit) {
        var val = 100;
        var value = val.toString();

        assert.throws(
            function () {
                new Card(suit, val);
            },
            CardInvalidArgException,
            value + " is not a valid value (suit " + suit + "), CardInvalidArgException thrown"
        );
    });
});

/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "Create a new card with given suit and value (invalid types)", function (assert) {
    var validSuit = "hearts";
    var validValue = 1;
    var invalidSuitTypes = [null, true, 1, function () {}];
    var invalidValueTypes = [null, true, "string", function () {}];

    invalidSuitTypes.forEach(function (badSuitType) {
        assert.throws(
            function () {
                new Card(badSuitType, validValue);
            },
            CardInvalidArgException,
            "invalid suit type passed (" + typeof badSuitType + ", should be string), CardInvalidArgException thrown"
        );
    });
    invalidValueTypes.forEach(function (badValueType) {
        assert.throws(
            function () {
                new Card(validSuit, badValueType);
            },
            CardInvalidArgException,
            "invalid value type passed (" + typeof badValueType + ", should be number), CardInvalidArgException thrown"
        );
    });
});


/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "Create a new card with missing/extra arguments", function (assert) {
    var validSuit = "hearts";
    var validValue = 1;

    assert.throws(
        function () {
            new Card(validSuit);
        },
        CardInvalidArgAmountException,
        "missing one or more arguments for creating a card, CardInvalidArgAmountException thrown"
    );
    assert.throws(
        function () {
            new Card(validValue);
        },
        CardInvalidArgAmountException,
        "missing one or more arguments for creating a card, CardInvalidArgAmountException thrown"
    );
    assert.throws(
        function () {
            new Card();
        },
        CardInvalidArgAmountException,
        "missing one or more arguments for creating a card, CardInvalidArgAmountException thrown"
    );
    assert.throws(
        function () {
            new Card(validSuit, validValue, "EXTRA");
        },
        CardInvalidArgAmountException,
        "one or more extra arguments for creating a card, CardInvalidArgAmountException thrown"
    );
});

/* TODO: explain what is being tested here and why
 *
 */
QUnit.test( "Card.toString(), make sure expected name is returned for each valid card", function (assert) {
    configs.getSuits().forEach(function (suit) {
        for (val = 2; val < 11; val++) {
            var value = val.toString()
            var card = new Card(suit, val);
            assert.ok(
                card.toString() === value + " of " + suit,
                "Correct string for Card(" + suit + ", " + value + ")"
            );
        }

        var val = 1;
        var value = val.toString();
        var card = new Card(suit, val);
        assert.ok(
            card.toString() === "ace of " + suit,
            "Correct string for Card(" + suit + ", " + value + ")"
        );

        var val = 11;
        var value = val.toString();
        var card = new Card(suit, val);
        assert.ok(
            card.toString() === "jack of " + suit,
            "Correct string for Card(" + suit + ", " + value + ")"
        );

        var val = 12;
        var value = val.toString();
        var card = new Card(suit, val);
        assert.ok(
            card.toString() === "queen of " + suit,
            "Correct string for Card(" + suit + ", " + value + ")"
        );

        var val = 13;
        var value = val.toString();
        var card = new Card(suit, val);
        assert.ok(
            card.toString() === "king of " + suit,
            "Correct string for Card(" + suit + ", " + value + ")"
        );
    });
});
